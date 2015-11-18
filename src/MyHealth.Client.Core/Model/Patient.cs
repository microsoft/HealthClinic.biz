using System;
using System.Collections.Generic;

namespace MyHealth.Client.Core.Model
{
    public class Patient
    {
        public int PatientId { get; set; }

        public string Name { get; set; }

        public string ClinicId { get; set; }

        public Gender Gender { get; set; }

        public double Weight { get; set; }

        public double Height { get; set; }

        public string BloodType { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Phone { get; set; }

        public byte[] Picture { get; set; }

        public bool Deleted { get; set; }

        public int InsuranceCompanyId { get; set; }

        public int TenantId { get; set; }

        public ICollection<Doctor> Doctors { get; set; }

        public ICollection<ClinicAppointment> ClinicAppointments { get; set; }

        public ICollection<Medicine> Medicines { get; set; }

        public ICollection<HomeAppointment> HomeAppointments { get; set; }

    }
}
