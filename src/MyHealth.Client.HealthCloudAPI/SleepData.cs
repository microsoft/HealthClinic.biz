using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyHealth.Client.HealthCloudAPI
{
    class SleepData : IHealthData<SleepInfo>   
    {
        [JsonProperty("nextPage")]
        public string NextPage { get; set; }
        [JsonProperty("sleepActivities")]
        public List<SleepInfo> Summaries{ get; set; }
    }
}
