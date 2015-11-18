using System.Collections.Generic;

namespace MyHealth.Client.HealthCloudAPI
{
    public interface IHealthData<T>
    {
        string NextPage { get; set; }
        List<T> Summaries { get; set; }
    }
}