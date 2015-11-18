using Microsoft.Data.Entity;
using MyHealth.Web.Stress.Models;


namespace MyHealth.Web.Stress.Data
{
    public class MyHealthContext : DbContext
    {   

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Appointment>()
                .Property(a => a.Id)
                .UseSqlServerIdentityColumn();

            builder.Entity<HealthReport>()
                .Property(a => a.Id)
                .UseSqlServerIdentityColumn();

            builder.Entity<Attendee>()
                .Property(a => a.Id)
                .UseSqlServerIdentityColumn();

            builder.Entity<AppointmentAttendee>()
                .HasKey(aa => new { aa.AttendeeId, aa.AppointmentId });

            base.OnModelCreating(builder);
        }

        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<HealthReport> HealthReports { get; set; }
        public DbSet<Attendee> Attendees { get; set; }
    }
}
