using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MyHealth.Client.HealthCloudAPI
{
    class IHealthDataConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return objectType.Equals(typeof(IHealthData<SleepInfo>)) || objectType.Equals(typeof(IHealthData<HeartInfo>));
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var obj = JObject.Load(reader);
            if(objectType.Equals(typeof(IHealthData<SleepInfo>)))
            {
                return obj.ToObject<SleepData>(serializer);
            }
            else
            {
                return obj.ToObject<HeartData>(serializer);
            }
        }

        public override bool CanWrite
        {
            get
            {
                return false;
            }
        }
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }
    }
}
