using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.MobileApp.DataObjects
{
    public class Doctor : CustomDataEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DoctorId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Phone { get; set; }

        public string Mobile { get; set; }

        public string Email { get; set; }

        public byte[] Picture { get; set; }

        public int TenantId { get; set; }

        public Specialities Speciality { get; set; }

        public int CurrentRoomNumber { get; set; }

        public int PatientCount { get; set; }

        public bool Synchronized { get; set; }

        public ICollection<Patient> Patients { get; set; }

    }
}