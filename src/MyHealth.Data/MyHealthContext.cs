using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using MyHealth.Model;

namespace MyHealth.Data
{

    public class MyHealthContext : IdentityDbContext<ApplicationUser>
    {
        public MyHealthContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ClinicAppointment>().Property(a => a.AppointmentId).UseSqlServerIdentityColumn();
            builder.Entity<HomeAppointment>().Property(a => a.AppointmentId).UseSqlServerIdentityColumn();
            builder.Entity<Doctor>().Property(d => d.DoctorId).UseSqlServerIdentityColumn();
            builder.Entity<Patient>().Property(p => p.PatientId).UseSqlServerIdentityColumn();

            base.OnModelCreating(builder);
        }

        public DbSet<Tenant> Tenants { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<ClinicAppointment> ClinicAppointments { get; set; }

        public DbSet<HomeAppointment> HomeAppointments { get; set; }

        public DbSet<Medicine> Medicines { get; set; }

        public DbSet<ExpensesSummary> ExpensesSummaries { get; set; }

        public DbSet<PatientsSummary> PatientsSummaries { get; set; }

        public DbSet<ClinicSummary> ClinicSummaries { get; set; }

        public DbSet<Tip> Tips { get; set; }

    }
}
