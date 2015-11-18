using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyHealth.Client.HealthCloudAPI
{
    class HeartData : IHealthData<HeartInfo>
    {
        [JsonProperty("nextPage")]
        public string NextPage { get; set; }
        [JsonProperty("summaries")]
        public List<HeartInfo> Summaries { get; set; }
    }
}
