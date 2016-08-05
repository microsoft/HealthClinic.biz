using Microsoft.AspNetCore.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;
using System.Linq;

namespace MyHealth.API.Controllers
{
    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class MedicinesController : Controller
    {
        private readonly MedicinesRepository _MedicinesRepository = null;

        public MedicinesController(MedicinesRepository medicinesRepository)
        {
            _MedicinesRepository = medicinesRepository;
        }

        [HttpGet("{id}")]
        public async Task<Medicine> GetAsync(int id)
        {
            return await _MedicinesRepository.GetAsync(Request.GetTenant(), id);
        }

        [HttpGet("next")]
        public async Task<Medicine> GetNextAsync()
        {
            return await _MedicinesRepository.GetNextAsync(Request.GetTenant());
        }

        [HttpGet("patient/{patientId}")]
        public async Task<IEnumerable<Medicine>> GetMedicinesAsync(int patientId, int count)
        {
            return await _MedicinesRepository.GetMedicinesAsync(Request.GetTenant(), patientId, count);
        }

        [HttpGet("doses/patient/{patientId}")]
        public async Task<IEnumerable<MedicineWithDoses>> GetMedicinesWithDosesAsync(int patientId, int count)
        {
            var medicinesWithDoses = new List<MedicineWithDoses>();
            var medicines = await _MedicinesRepository.GetMedicinesAsync(Request.GetTenant(), patientId, count * 3);

            var groupped = medicines.GroupBy(am => am.MedicineId);
            foreach (var mgroup in groupped)
            {
                var mwd = new MedicineWithDoses(mgroup.First());
                mwd.AddDoseTimes(mgroup.Select(am => am.TimeOfDay));
                medicinesWithDoses.Add(mwd);
            }

            return medicinesWithDoses;
        }
    }
}
