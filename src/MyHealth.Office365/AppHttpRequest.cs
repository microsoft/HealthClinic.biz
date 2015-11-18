//Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
//
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace MyHealth.Office365
{
    public class HttpRequestHelper
    {
        public static async Task<string> MakeHttpRequestAsync(Func<HttpRequestMessage> requestCreator, string accessToken)
        {
            using (HttpClient client = new HttpClient())
            {
                // add propper instrumentation headers
                string clientRequestId = Guid.NewGuid().ToString();
                client.DefaultRequestHeaders.Add("client-request-id", clientRequestId);
                client.DefaultRequestHeaders.Add("return-client-request-id", "true");
                client.DefaultRequestHeaders.Add("UserAgent", "HealthClinicBiz/0.1");
                client.DefaultRequestHeaders.Add("Authorization", String.Format("Bearer {0}", accessToken));

                using (HttpRequestMessage request = requestCreator.Invoke())
                {
                    try
                    {
                        HttpResponseMessage httpResponse = await client.SendAsync(request);
                        string responseString = await httpResponse.Content.ReadAsStringAsync();
                        if (httpResponse.StatusCode == HttpStatusCode.OK)
                        {
                            return responseString;
                        }

                        string error = string.Format("\"error\" : \"{0}\"\r\n{1}", httpResponse.ReasonPhrase, responseString);
                        if (httpResponse.StatusCode == HttpStatusCode.Unauthorized)
                        {
                            //httpResponse.Headers.Select(h => h.Key.Equals("x-ms-diagnostics")).First();
                            foreach (var header in httpResponse.Headers)
                            {
                                // x-ms-diagnostics contains details why request was unauthorized
                                if (header.Key.Equals("x-ms-diagnostics"))
                                {
                                    string e = string.Format("{0}", header.Value.ToArray());
                                    e = e.Replace("\"", "'");
                                    error = error + string.Format(", \"x-ms-diagnostics\" : \"{0}\"", e);
                                }
                            }
                        }

                        string responseString2 = string.Format("{{{0}}}", error);
                        return responseString2;

                    }
                    catch (WebException webex)
                    {
                        HttpWebResponse httpWebResponse = webex.Response as HttpWebResponse;

                        if (httpWebResponse != null)
                        {
                            using (Stream serviceResponseStream = httpWebResponse.GetResponseStream())
                            {
                                using (StreamReader reader = new StreamReader(serviceResponseStream))
                                {
                                    JObject jsonResponse = JObject.Parse(reader.ReadToEnd());
                                    return jsonResponse.ToString();
                                }
                            }
                        }

                        string error = string.Format("\"error\" : \"{0}\"", webex.Message);
                        string responseString = string.Format("{{{0}}}", error);
                        return responseString;
                    }
                    catch (Exception ex)
                    {
                        string error = string.Format("\"error\" : \"{0}\"", ex.Message);
                        string responseString = string.Format("{{{0}}}", error);
                        return responseString;
                    }
                }
            }
        }
    }
}

// MIT License: 

// Permission is hereby granted, free of charge, to any person obtaining 
// a copy of this software and associated documentation files (the 
// ""Software""), to deal in the Software without restriction, including 
// without limitation the rights to use, copy, modify, merge, publish, 
// distribute, sublicense, and/or sell copies of the Software, and to 
// permit persons to whom the Software is furnished to do so, subject to 
// the following conditions: 

// The above copyright notice and this permission notice shall be 
// included in all copies or substantial portions of the Software. 

// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND, 
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.