using System;
using Microsoft.AspNet.TestHost;
using MyHealth.API.Infrastructure.Fixtures;
using Xunit;

namespace MyHealth.API.Specs
{
    [Collection(Collections.Database)]
    public abstract class DatabaseTestBase : IDisposable
    {
        protected DatabaseTestBase()
        {
            // Arrange
            Server = new TestServer(
                TestServer.CreateBuilder()
                    .UseStartup<TestStartup>());
        }

        protected TestServer Server { get; }

        public void Dispose()
        {
            Server.Dispose();
        }
    }
}
