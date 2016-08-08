using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using MyHealth.Model;

namespace MyHealth.Data
{
    public class MyHealthContext : IdentityDbContext<ApplicationUser, IdentityRole, string>
    {
        public MyHealthContext(DbContextOptions<MyHealthContext> options)
            :base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ClinicAppointment>().Property(a => a.AppointmentId).UseSqlServerIdentityColumn();

            builder.Entity<ClinicAppointment>().HasOne(c => c.Patient).WithMany(p => p.ClinicAppointment).OnDelete(DeleteBehavior.Restrict);
            builder.Entity<ClinicAppointment>().HasOne(c => c.Tenant).WithMany().OnDelete(DeleteBehavior.Restrict);

            builder.Entity<HomeAppointment>().Property(a => a.AppointmentId).UseSqlServerIdentityColumn();

            builder.Entity<HomeAppointment>().HasOne(a => a.Patient).WithMany(p => p.HomeAppointments).OnDelete(DeleteBehavior.Restrict);
            builder.Entity<HomeAppointment>().HasOne(a => a.Tenant).WithMany().OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Medicine>().HasOne(m => m.Tenant).WithMany().OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Doctor>().Property(d => d.DoctorId).UseSqlServerIdentityColumn();
            builder.Entity<Patient>().Property(p => p.PatientId).UseSqlServerIdentityColumn();

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
