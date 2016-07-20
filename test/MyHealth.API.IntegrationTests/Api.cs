using System.Collections.Generic;
using System.Linq;

namespace MyHealth.API
{
    public static class Api
    {
        public static class Get
        {
            public static readonly string Doctors = "/api/doctors";
            public static readonly string Doctor = "/api/doctors/{0}";
        }

        public static class Post
        {
            public static readonly string Doctors = "/api/doctors";
        }

        public static class Put
        {

        }

        public static string For(this string format, params object[] args)
        {
            return string.Format(format, args);
        }

        public static string WithQuery(this string format, Dictionary<string, object> values)
        {
            var query = string.Join("&", values.Select(x => x.Key + $"={x.Value}"));

            return format + $"?{query}";
        }
    }
}
