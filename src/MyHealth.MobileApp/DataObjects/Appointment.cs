using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.MobileApp.DataObjects
{
    public class Appointment : CustomDataEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int AppointmentId { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }

        public int DoctorId { get; set; }

        public Doctor Doctor { get; set; }

        public DateTime DateTime { get; set; }

        public string Description { get; set; }

        public Specialities Speciality { get; set; }

        public bool IsUrgent { get; set; }

        public int TenantId { get; set; }
    }
}
