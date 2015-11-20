using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.Model
{
    public class Doctor
    {
        [Key]
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

        public Tenant Tenant { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Specialities Speciality { get; set; }

        public int CurrentRoomNumber { get; set; }

        public int PatientCount { get; set; }

        public bool Synchronized { get; set; }

        [NotMapped]
        public ICollection<Patient> Patients { get; set; }

        public ICollection<ClinicAppointment> ClinicAppointments { get; set; }

        public ICollection<HomeAppointment> HomeAppointments { get; set; }

        // This properties are needed to integrate the database with Mobile App
        public DateTimeOffset? CreatedAt { get; set; }

        public string Id { get; set; }

        public DateTimeOffset? UpdatedAt { get; set; }

        public byte[] Version { get; set; }
    }
}
