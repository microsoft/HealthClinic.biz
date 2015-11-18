using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.MobileApp.DataObjects
{
    public class Patient : CustomDataEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
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

        public int TenantId { get; set; }

        public ICollection<Doctor> Doctors { get; set; }
    }
}
