using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.Model
{
    public class Patient
    {
        [Key]
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

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }

        [NotMapped]
        public ICollection<Doctor> Doctors { get; set; }

        public ICollection<ClinicAppointment> ClinicAppointment { get; set; }

        public ICollection<Medicine> Medicines { get; set; }

        public ICollection<HomeAppointment> HomeAppointments { get; set; }

        // This properties are needed to integrate the database with Mobile App
        public DateTimeOffset? CreatedAt { get; set; }

        public string Id { get; set; }

        public DateTimeOffset? UpdatedAt { get; set; }

        public byte[] Version { get; set; }
    }
}
