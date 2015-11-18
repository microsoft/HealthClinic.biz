
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace MyHealth.Client.Core.Model
{
    public class Doctor
    {
        public int DoctorId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Phone { get; set; }

        public string Mobile { get; set; }

        public string Email { get; set; }

        public byte[] Picture { get; set; }

        public bool Deleted { get; set; }

        public int TenantId { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Specialities Speciality { get; set; }

        public int CurrentRoomNumber { get; set; }

        public int PatientCount { get; set; }

        public ICollection<Patient> Patients { get; set; }

        public ICollection<ClinicAppointment> ClinicAppointments { get; set; }

        public ICollection<HomeAppointment> HomeAppointments { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
