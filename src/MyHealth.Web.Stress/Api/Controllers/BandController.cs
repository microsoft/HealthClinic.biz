using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.OptionsModel;

namespace MyHealth.Web.Stress.Api.Controllers
{
    [Route("api/[controller]")]
    public class BandController : Controller
    {
        IMemoryCache Cache { get; set; }
        double old_sgv = 120; // default value for mg/dl

        public BandController(IMemoryCache cache)
        {
            Cache = cache;
        }

        [HttpGet]
        public RootObject Get()
        {

            long now = ToEpoch(DateTime.Now);
            string old_sgv_string = String.Empty;
            if (Cache.TryGetValue<string>("old_sgv", out old_sgv_string))
            {
                old_sgv = Convert.ToDouble(old_sgv_string);
            }

            int sgv = MakeFakeBloodSugarValue();

            int delta = sgv - (int)old_sgv;
       
            RootObject root = new RootObject();
            root.status = new List<Status>();
            root.status.Add(new Status() { now = now });
            root.bgs = new List<Bg>();
            root.bgs.Add(new Bg() { datetime = now, sgv = sgv.ToString(), bgdelta = delta, trend = 4, direction = "Flat" });



            return root;
        }

        [HttpPost("{value}")]
        public void Post(string value)
        {
            Cache.Set("old_sgv", value);
        }

        private int MakeFakeBloodSugarValue()
        {
            double volatility = 0.03;


            double rnd = new Random().NextDouble();
            double change_percent = 2 * volatility * rnd;
            if (change_percent > volatility)
                change_percent -= (2 * volatility);
            double change_amount = old_sgv * change_percent;
            double new_price = old_sgv + change_amount;

            Cache.Set("old_sgv", new_price.ToString());

            return (int)new_price;
        }

        private long ToEpoch(DateTime d)
        {
            TimeSpan t = DateTime.UtcNow - new DateTime(1970, 1, 1);
            long secondsSinceEpoch = (long)t.TotalMilliseconds;
            return secondsSinceEpoch;
        }

    }

    public class Status
    {
        public long now { get; set; }
    }

    public class Bg
    {
        public string sgv { get; set; }
        public int bgdelta { get; set; }
        public int trend { get; set; }
        public string direction { get; set; }
        public long datetime { get; set; }
    }

    public class RootObject
    {
        public List<Status> status { get; set; }
        public List<Bg> bgs { get; set; }
    }
}
