using System.Collections.Generic;
using System.Threading.Tasks;
using Acheve.AspNetCore.TestHost.Security;
using FluentAssertions;
using MyHealth.API.Infrastructure;
using MyHealth.Model;
using Xunit;

namespace MyHealth.API.Specs.DoctorsController
{
    public class GetDoctors : DatabaseTestBase
    {
        [Fact]
        public async Task Administrator_Can_GetDoctors()
        {
            var queryString = new Dictionary<string, object>
            {
                ["pageSize"] = 5,
                ["pageCount"] = 0
            };

            // Act
            var response = await Server.CreateRequest(Api.Get.Doctors.WithQuery(queryString))
                .ForTenant(1)
                .WithIdentity(Identities.Administrator)
                .GetAsync();

            response.EnsureSuccessStatusCode();

            // Assert
            var doctors = await response.Content.ReadAsAsync<Doctor[]>();

            doctors.Should().NotBeEmpty();
        }

        [Fact]
        public async Task Tenants_Can_GetDoctors()
        {
            var queryString = new Dictionary<string, object>
            {
                ["pageSize"] = 5,
                ["pageCount"] = 0
            };

            // Act
            var response = await Server.CreateRequest(Api.Get.Doctors.WithQuery(queryString))
                .ForTenant(1)
                .WithIdentity(Identities.Tenant)
                .GetAsync();

            response.EnsureSuccessStatusCode();

            // Assert
            var doctors = await response.Content.ReadAsAsync<Doctor[]>();

            doctors.Should().NotBeEmpty();
        }

        [Fact]
        public async Task Users_Can_GetDoctors()
        {
            var queryString = new Dictionary<string, object>
            {
                ["pageSize"] = 5,
                ["pageCount"] = 0
            };

            // Act
            var response = await Server.CreateRequest(Api.Get.Doctors.WithQuery(queryString))
                .ForTenant(1)
                .GetAsync();

            response.EnsureSuccessStatusCode();

            // Assert
            var doctors = await response.Content.ReadAsAsync<Doctor[]>();

            doctors.Should().NotBeEmpty();
        }
    }
}
