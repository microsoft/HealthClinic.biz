using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.OData;
using Microsoft.Azure.Mobile.Server;
using MyHealth.MobileApp.DataObjects;
using MyHealth.MobileApp.Models;

namespace MyHealth.MobileApp.Controllers
{
    //[Authorize]
    public class HomeAppointmentController : TableController<HomeAppointment>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            MobileServiceContext context = new MobileServiceContext();
            DomainManager = new EntityDomainManager<HomeAppointment>(context, Request);
        }

        // GET tables/HomeAppointment
        public IQueryable<HomeAppointment> GetAllHomeAppointments()
        {
            return Query();
        }

        // GET tables/HomeAppointment/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<HomeAppointment> GetHomeAppointment(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/HomeAppointment/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<HomeAppointment> PatchHomeAppointment(string id, Delta<HomeAppointment> patch)
        {
            return UpdateAsync(id, patch);
        }

        // POST tables/Patient
        public async Task<IHttpActionResult> PostHomeAppointment(HomeAppointment homeAppointment)
        {
            HomeAppointment current = await InsertAsync(homeAppointment);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/HomeAppointment/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteHomeAppointment(string id)
        {
            return DeleteAsync(id);
        }
    }
}