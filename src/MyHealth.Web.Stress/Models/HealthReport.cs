
namespace MyHealth.Web.Stress.Models
{
    using System;
   

    public class HealthReport
    {
       public int Id { get; set; }
        public string UserEmail { get; set; }
        public DateTime Time { get; set; }
        public int Heart { get; set; }
        public int Glucose { get; set; }
        public int Stress { get; set; }
       
    }
}
