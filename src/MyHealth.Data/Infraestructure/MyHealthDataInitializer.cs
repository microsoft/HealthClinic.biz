using Microsoft.AspNet.Identity;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyHealth.Model;
using System.Security.Claims;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.PlatformAbstractions;

namespace MyHealth.Data.Infraestructure
{
    public class MyHealthDataInitializer
    {
        private static IServiceProvider _serviceProvider = null;
        private static readonly Random Randomize = new Random();

        private const int AppointmentMonths = 6;


        public async Task InitializeDatabaseAsync(IServiceProvider serviceProvider)
        {
            using (var db = serviceProvider.GetService<MyHealthContext>())
            {
                var databaseCreated = await db.Database.EnsureCreatedAsync();
                if (databaseCreated)
                {
                    await CreateSampleData(serviceProvider, db);
                }
            }
        }

        static async Task CreateSampleData(IServiceProvider serviceProvider, MyHealthContext context)
        {
            _serviceProvider = serviceProvider;

            int tenantId = CreateSampleData(context);
            await CreateDefaultUser(serviceProvider, tenantId);
        }

        private static async Task CreateDefaultUser(IServiceProvider serviceProvider, int tenantId)
        {
            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
            var appEnv = serviceProvider.GetService<IApplicationEnvironment>();

            var builder = new ConfigurationBuilder()
                    .SetBasePath(appEnv.ApplicationBasePath)
                    .AddJsonFile("appsettings.json");

            var configuration = builder.Build();

            var user = await userManager.FindByNameAsync(configuration["DefaultUsername"]);
            if (user == null)
            {
                user = new ApplicationUser {
                    UserName = configuration["DefaultUsername"],
                    TenantId = tenantId,
                    Picture = GetDefaultUser()
                };
                await userManager.CreateAsync(user, configuration["DefaultPassword"]);
                await userManager.AddClaimAsync(user, new Claim("ManageStore", "Allowed"));
            }
        }

        private static int CreateSampleData(MyHealthContext context)
        {
            var tenantId = CreateTenants(context);

            CreateDoctors(context, tenantId);
            CreateSummaryInfo(context, tenantId);
            CreatePatients(context, tenantId);
            CreateMedicines(context, tenantId);
            CreateClinicAppointments(context, tenantId);
            CreateHomeAppointments(context, tenantId);
            CreateTips(context, tenantId);

            return tenantId;
        }

        static int CreateTenants(MyHealthContext context)
        {
            var tenants = new List<Tenant>();
            var defaultTenant = new Tenant()
            {
                Name = "HealthClinic.biz",
                Address = "Madison Ave 10037",
                City = "New York",
                WaitTimeAvg = Randomize.Next(1, 10)
            };
            context.Tenants.Add(defaultTenant);

            var tenant = new Tenant()
            {
                Name = "Madison HealthCare",
                Address = "Madison Ave 10037",
                City = "New York",
                WaitTimeAvg = Randomize.Next(1, 10)
            };
            tenants.Add(tenant);

            tenant = new Tenant()
            {
                Name = "HCR Global",
                Address = "Spring Studios, 50. Varick St",
                City = "New York",
                WaitTimeAvg = Randomize.Next(1, 10)
            };
            tenants.Add(tenant);

            context.Tenants.AddRange(tenants);
            context.SaveChanges();

            return defaultTenant.TenantId;
        }

        static void CreateDoctors(MyHealthContext context, int tenantId)
        {
            var doctors = new List<Doctor>();

            var doctor = new Doctor
            {
                Name = "Amanda Silver",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "amanda@healthclinic.biz",
                Deleted = false,
                Picture = GetPatientPicture(4),
                TenantId = tenantId,
                Speciality = Specialities.Cardiologist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = "D0ACA653-2AB1-4160-87FC-21E72FD2ED44",
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 4, 12)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Casey Snider",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "csnider@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(1),
                TenantId = tenantId,
                Speciality = Specialities.Cardiologist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 4, 10)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Clay McKnight",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "cmcknight@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(2),
                TenantId = tenantId,
                Speciality = Specialities.Neurosurgeon,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 5, 19)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Jasper Strader",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "jstrader@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(3),
                TenantId = tenantId,
                Speciality = Specialities.Ophthalmologist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 3, 22)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Eldon Caraway",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "ecaraway@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(4),
                TenantId = tenantId,
                Speciality = Specialities.Orthopedist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 6, 11)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Irving Ingraham",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "iingraham@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(5),
                TenantId = tenantId,
                Speciality = Specialities.Orthopedist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 5, 30)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Denis Slattery",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "dslattery@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(6),
                TenantId = tenantId,
                Speciality = Specialities.Ophthalmologist,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 3, 16)
            };
            doctors.Add(doctor);

            doctor = new Doctor
            {
                Name = "Peter Ingraham",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "pingraham@healthclinic.biz",
                Deleted = false,
                Picture = GetDoctorPicture(7),
                TenantId = tenantId,
                Speciality = Specialities.Neurosurgeon,
                Synchronized = true,
                PatientCount = Randomize.Next(50, 100),
                CurrentRoomNumber = Randomize.Next(3, 15),
                Id = Guid.NewGuid().ToString(),
                Description = "Monitoring and providing general care to patients on hospital wards and in outpatient clinics.",
                Phone = "555-135-2245",
                Mobile = "1-(546)-345-5678",
                CreatedAt = new DateTime(2015, 7, 26)
            };
            doctors.Add(doctor);

            context.Doctors.AddRange(doctors);
            context.SaveChanges();
        }

        static void CreatePatients(MyHealthContext context, int tenantId)
        {
            var patients = new List<Patient>();
            var doctor = context.Doctors.First();

            var patient = new Patient
            {
                Name = "Kavin Gallo",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "appdev232@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(17),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 5.9,
                Weight = 165,
                ClinicId = "DFG-111128-32001",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-234-234",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);


            patient = new Patient
            {
                Name = "Scott Hanselman",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "scottha@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(3),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 5.9,
                Weight = 165,
                ClinicId = "XHW-238928-32121",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-126-785",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "Cesar de la Torre",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "cesar@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(1),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 5.9,
                Weight = 165,
                ClinicId = "HJI-198928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-322-111",
                Doctors = new List<Doctor>() {  doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "Scott Guthrie",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "scott@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(2),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 6.1,
                Weight = 165,
                ClinicId = "HJI-198928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-456-654",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);


            patient = new Patient
            {
                Name = "David Carmona",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "dcarmona@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(5),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 5.9,
                Weight = 165,
                ClinicId = "HJI-198928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 45),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-983-768",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "David Salgado",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "dsalgado@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(6),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 5.9,
                Weight = 165,
                ClinicId = "HJI-198928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-459-345",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "Dmitry Lyalin",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "dlyalin@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(7),
                BloodType = "A+",
                Gender = Gender.Male,
                Height = 6,
                Weight = 165,
                ClinicId = "HJI-198928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-158-163",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "Erika Ehrli Cabral",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "erehrlic@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(8),
                BloodType = "A+",
                Gender = Gender.Female,
                Height = 5.6,
                Weight = 132,
                ClinicId = "TJI-228928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-694-153",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            patient = new Patient
            {
                Name = "Mitra Azizirad",
                Address = "Madison Ave 10037, New York, NY 10037",
                Email = "mazizirad@outlook.com",
                Deleted = false,
                Picture = GetPatientPicture(10),
                BloodType = "A+",
                Gender = Gender.Female,
                Height = 5.6,
                Weight = 132,
                ClinicId = "TJI-228928-39012",
                TenantId = tenantId,
                Age = Randomize.Next(35, 38),
                DateOfBirth = DateTime.UtcNow.AddDays(-Randomize.Next(1, 30)).AddMonths(-Randomize.Next(1, 12)).AddYears(-Randomize.Next(30, 38)),
                Phone = "555-694-153",
                Doctors = new List<Doctor>() { doctor },
                Id = Guid.NewGuid().ToString()
            };
            patients.Add(patient);

            context.Patients.AddRange(patients);
            context.SaveChanges();
        }


        static void CreateMedicines(MyHealthContext context, int tenantId)
        {
            var data = new[] {
                       new {
                           Name="Tylenol",
                           Dose = 100.0,
                           Unit = InternationalUnit.Milligrams,
                           TimeOfDay = TimeOfDay.Dinner
                       },
                       new {
                           Name="Tamiflu",
                           Dose = 100.0,
                           Unit = InternationalUnit.Milligrams,
                           TimeOfDay = TimeOfDay.Breakfast
                       },
                       new {
                           Name="Advil",
                           Dose = 0.5,
                           Unit = InternationalUnit.Milliliters,
                           TimeOfDay = TimeOfDay.Lunch
                       },
                       new {
                           Name="Cafergot",
                           Dose = 100.0,
                           Unit = InternationalUnit.Milligrams,
                           TimeOfDay = TimeOfDay.Breakfast
                       },
                };
            var medicines = new List<Medicine>();
            var patients = context.Patients.Select(p => p.PatientId).ToList();

            var globalIdx = 0;

            foreach (int patientId in patients)
            {
                foreach (var _ in Enumerable.Range(0, 4))
                {
                    var currentMedicineData = data[globalIdx];
                    var medicine = new Medicine
                    {
                        Name = currentMedicineData.Name,
                        Dose = currentMedicineData.Dose,
                        DoseUnit = currentMedicineData.Unit,
                        PatientId = patientId,
                        TimeOfDay = currentMedicineData.TimeOfDay,
                        TenantId = tenantId
                    };
                    medicines.Add(medicine);
                    globalIdx++;
                    globalIdx = globalIdx % data.Length;
                }

                context.Medicines.AddRange(medicines);
            }
            context.SaveChanges();
        }

        static void CreateTips(MyHealthContext context, int tenantId)
        {
            var tip = new Tip()
            {
                Title = "Daily Health Tip",
                Content = "Drinking two glassess of water in the morning helps activate internal organs.\n\nDrinking one glass of water before a meal will help with digestion.\n\nDrinking one glass of water before taking a shower helps prevent high blood pressure.\n\nDrinking a glass of water before bedtime helps prevent strokes or heart attack.",
                Date = DateTime.UtcNow, 
                TenantId = tenantId
            };

            context.Tips.AddRange(tip);
            context.SaveChanges();
        }

        static void CreateClinicAppointments(MyHealthContext context, int tenantId)
        {
            var appointments = new List<ClinicAppointment>();
            var patients = context.Patients.Select(p => p.PatientId).ToList();
            var doctors = context.Doctors.ToList();

            foreach (int patientId in patients)
            {
                for (int i = 1; i <= AppointmentMonths; i++)
                {
                    var doctor = doctors[Randomize.Next(0, doctors.Count - 1)];
                    var appointment = new ClinicAppointment
                    {
                        PatientId = patientId,
                        DoctorId = doctor.DoctorId,
                        DateTime = GetAppointmentDate(i),
                        Speciality = doctor.Speciality,
                        RoomNumber = Randomize.Next(3, 15),
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        IsUrgent = true
                    };
                    appointments.Add(appointment);

                    doctor = doctors[Randomize.Next(0, doctors.Count - 1)];
                    appointment = new ClinicAppointment
                    {
                        PatientId = patientId,
                        DoctorId = doctor.DoctorId,
                        DateTime = GetAppointmentDate(i),
                        Speciality = doctor.Speciality,
                        RoomNumber = Randomize.Next(3, 15),
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        IsUrgent = false
                    };
                    appointments.Add(appointment);

                    doctor = doctors[Randomize.Next(0, doctors.Count - 1)];
                    appointment = new ClinicAppointment
                    {
                        PatientId = patientId,
                        DoctorId = doctor.DoctorId,
                        DateTime = GetAppointmentDate(i),
                        Speciality = doctor.Speciality,
                        RoomNumber = Randomize.Next(3, 15),
                        Description = "Evaluate the diagnosis received",
                        TenantId = tenantId,
                        IsUrgent = true
                    };
                    appointments.Add(appointment);

                    doctor = doctors[Randomize.Next(0, doctors.Count - 1)];
                    appointment = new ClinicAppointment
                    {
                        PatientId = patientId,
                        DoctorId = doctor.DoctorId,
                        DateTime = GetAppointmentDate(i),
                        Speciality = doctor.Speciality,
                        RoomNumber = Randomize.Next(3, 15),
                        Description = "Evaluate the effectiveness of treatment received",
                        TenantId = tenantId,
                        IsUrgent = false
                    };
                    appointments.Add(appointment);
                }
            }

            context.ClinicAppointments.AddRange(appointments);
            context.SaveChanges();
        }

        static void CreateHomeAppointments(MyHealthContext context, int tenantId)
        {
            var visits = new List<HomeAppointment>();

            var patients = context
                .Patients.OrderBy(p => p.PatientId).Select(p => p.PatientId)
                .Skip(1).Take(4).ToList();

            var doctors = context.Doctors.Select(p => p.DoctorId).ToList();

            foreach (int doctorId in doctors)
            {
                for (int i = 1; i <= AppointmentMonths; i++)
                {
                    var visit = new HomeAppointment
                    {
                        PatientId = patients[0],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "48 Wall St, New York, NY 10037",
                        Visited = false,
                        TenantId = tenantId,
                        IsUrgent = true,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[1],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "Madison Ave 10037, New York, NY 10037",
                        Visited = false,
                        IsUrgent = false,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[0],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "48 Wall St, New York, NY 10037",
                        Visited = true,
                        IsUrgent = false,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[1],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "Madison Ave 10037, New York, NY 10037",
                        Visited = true,
                        IsUrgent = true,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[2],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "48 Wall St, New York, NY 10037",
                        Visited = false,
                        IsUrgent = true,
                        TenantId = tenantId,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[3],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "Madison Ave 10037, New York, NY 10037",
                        IsUrgent = true,
                        Visited = false,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[2],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "48 Wall St, New York, NY 10037",
                        Visited = true,
                        IsUrgent = false,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);

                    visit = new HomeAppointment
                    {
                        PatientId = patients[3],
                        DoctorId = doctorId,
                        DateTime = GetAppointmentDate(i),
                        Latitude = 40.721847,
                        Longitude = -74.007326,
                        Address = "Madison Ave 10037, New York, NY 10037",
                        Visited = true,
                        IsUrgent = false,
                        Description = "Follow up in order to determine the effectiveness of treatment received",
                        TenantId = tenantId,
                        Id = Guid.NewGuid().ToString()
                    };
                    visits.Add(visit);
                }
            }

            context.HomeAppointments.AddRange(visits);
            context.SaveChanges();
        }

        static void CreateSummaryInfo(MyHealthContext context, int tenantId)
        {
            CreateClinicSummary(context, tenantId);

            CreatePatientsSummaries(context, tenantId);

            CreateExpensesSummaries(context, tenantId);
        }

        private static void CreateExpensesSummaries(MyHealthContext context, int tenantId)
        {
            var expensesSummaries = new List<ExpensesSummary>();

            for (int i = 0; i < 24; i++)
            {
                var expensesSummary = new ExpensesSummary
                {
                    Year = DateTime.UtcNow.AddMonths(-i).Year,
                    Month = DateTime.UtcNow.AddMonths(-i).Month,
                    Incomes = Randomize.Next(120000, 150000),
                    Expenses = Randomize.Next(70000, 80000),
                    TenantId = tenantId
                };
                expensesSummaries.Add(expensesSummary);
            }

            context.ExpensesSummaries.AddRange(expensesSummaries);
            context.SaveChanges();
        }

        private static void CreatePatientsSummaries(MyHealthContext context, int tenantId)
        {
            var patientsSummaries = new List<PatientsSummary>();

            for (int i = 0; i < 24; i++)
            {
                var patientsSummary = new PatientsSummary
                {
                    Year = DateTime.UtcNow.AddMonths(-i).Year,
                    Month = DateTime.UtcNow.AddMonths(-i).Month,
                    PatientsCount = Randomize.Next(500, 600),
                    TenantId = tenantId
                };
                patientsSummaries.Add(patientsSummary);
            }

            context.PatientsSummaries.AddRange(patientsSummaries);
            context.SaveChanges();
        }

        private static void CreateClinicSummary(MyHealthContext context, int tenantId)
        {
            var clinicSummary = new ClinicSummary
            {
                AnualProfit = Randomize.Next(50000, 60000),
                AnualProfitVariation = Randomize.Next(1, 5),
                MonthProfit = Randomize.Next(4000, 6000),
                MonthProfitVariation = Randomize.Next(1, 5),
                NewPatients = Randomize.Next(100, 500),
                NewPatientsVariation = Randomize.Next(1, 10),
                Date = DateTime.UtcNow,
                TenantId = tenantId
            };

            context.ClinicSummaries.Add(clinicSummary);
            context.SaveChanges();
        }


        private static DateTime GetAppointmentDate(int month = 0)
        {
            int startOfWorkingDay = 7;
            int endOfWorkingDay = 17;
            int slotMinutes = 15;
            int slotsPerHour = 4;
            int seconds = 0;

            var minutes = Randomize.Next(0, slotsPerHour - 1);
            var hour = Randomize.Next(startOfWorkingDay, endOfWorkingDay);

            var defaultDate = DateTime.UtcNow.AddMonths(month).AddDays(Randomize.Next(2, 20));

            // NOTE: This demo is not a real app, we use "Eastern Standard Time" as default Time Zone but in a real
            // application should be better to be able to manage different time zones

            //TimeSpan offset = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time").BaseUtcOffset;

            // The current implementation in Linux does not support the method TimeZoneInfo.FindSystemTimeZoneById
            TimeSpan offset = TimeSpan.FromHours(-5);

            return new DateTimeOffset(defaultDate.Year, defaultDate.Month, defaultDate.Day,
                hour, slotMinutes * minutes, seconds, offset).UtcDateTime;
        }

        private static byte[] GetDefaultUser()
        {
            // Scott Hanselman
            return Convert.FromBase64String(UsersFakeImages.Users.First());
        }

        private static byte[] GetPatientPicture(int index)
        {
            return Convert.FromBase64String(PatientsFakeImages.MsPatients[index - 1]);
        }

        private static byte[] GetDoctorPicture(int index)
        {
            return Convert.FromBase64String(DoctorsFakeImages.Doctors[index - 1]);
        }

    }
}
