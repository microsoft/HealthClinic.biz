using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MyHealth.Data;

namespace MyHealth.API.Infrastructure.Fixtures
{
    public class DatabaseFixture : IDisposable
    {
        private readonly DbContextOptionsBuilder<MyHealthContext> _myHealthOptionsBuilder;

        public DatabaseFixture()
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json");

            builder.AddEnvironmentVariables();
            var configuration = builder.Build();

            _myHealthOptionsBuilder = new DbContextOptionsBuilder<MyHealthContext>();
            _myHealthOptionsBuilder.UseSqlServer(configuration["Data:DefaultConnection:ConnectionString"]);

            var myHealthContext = new MyHealthContext(_myHealthOptionsBuilder.Options);

            // Ensure the test database is deleted before starting the tests
            myHealthContext.Database.EnsureDeleted();
        }

        public void Dispose()
        {
            // Ensure the test database is deleted after all database test had run
            new MyHealthContext(_myHealthOptionsBuilder.Options).Database.EnsureDeleted();
        }
    }
}
