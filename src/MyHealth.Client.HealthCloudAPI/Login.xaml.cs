using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Net.Http;
using System.Web;
using Newtonsoft.Json.Linq;

namespace MyHealth.Client.HealthCloudAPI
{
    /// <summary>
    /// Interaction logic for Login.xaml
    /// </summary>
    public partial class Login : Page
    {
        private const string RedirectUri = "https://login.live.com/oauth20_desktop.srf";
        private const string Scopes = "mshealth.ReadDevices mshealth.ReadActivityHistory mshealth.ReadActivityLocation mshealth.ReadDevices";
        private const string ClientId = "YOURIDHERE";
        private const string ClientSecret = "YOURSECRETHERE";
        public Login()
        {
            InitializeComponent();
            // The MS Health CloudAPI is protected by the user's Microsoft Account. This page handles the login flow.
            PerformLogin();
        }

        private void PerformLogin()
        {
            UriBuilder uri = new UriBuilder("https://login.live.com/oauth20_authorize.srf");
            var query = new StringBuilder();

            query.AppendFormat("redirect_uri={0}", Uri.EscapeUriString(RedirectUri));
            query.AppendFormat("&client_id={0}", Uri.EscapeUriString(ClientId));

            query.AppendFormat("&scope={0}", Uri.EscapeUriString(Scopes));
            query.Append("&response_type=code");

            uri.Query = query.ToString();

            Browser.Navigate(uri.Uri);
        }

        private async void Browser_Navigated(object sender, NavigationEventArgs e)
        {
            if(e.Uri.LocalPath.StartsWith("/oauth20_desktop.srf", StringComparison.OrdinalIgnoreCase))
            {
                var queryParams = HttpUtility.ParseQueryString(e.Uri.Query);
                var code = queryParams["code"];
                var error = queryParams["error"];
                if (!String.IsNullOrWhiteSpace(code))
                {
                    var builder = new UriBuilder("https://login.live.com/oauth20_token.srf");
                    var query = new StringBuilder();
                    query.AppendFormat("redirect_uri={0}", Uri.EscapeUriString(RedirectUri));
                    query.AppendFormat("&client_id={0}", Uri.EscapeUriString(ClientId));
                    query.AppendFormat("&client_secret={0}", Uri.EscapeUriString(ClientSecret));
                    query.AppendFormat("&code={0}", Uri.EscapeUriString(code));
                    query.Append("&grant_type=authorization_code");
                    builder.Query = query.ToString();
                    using (var client = new HttpClient())
                    {
                        var responseString = await client.GetStringAsync(builder.Uri);
                        var jsonResponse = JObject.Parse(responseString);
                        var accessToken = (string)jsonResponse["access_token"];
                        NavigationService.Navigate(new Selection(accessToken));
                    }
                }
                else if (!String.IsNullOrWhiteSpace(error))
                {
                    throw new Exception(error);
                }
            }
        }
    }
}
