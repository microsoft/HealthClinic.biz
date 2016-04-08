
namespace MyHealth.Client.Core.ServiceAgents
{
	public interface IMyHealthClient
	{
		ClinicAppointmentsService AppointmentsService { get; }

		HomeAppointmentsService VisitsService { get; }

		ReportsService ReportsService { get; }

		PatientsService PatientsService { get; }

		MedicinesService MedicinesService { get; }

		DoctorsService DoctorsService { get; }

		TipsService TipsService { get; }

		TenantsService TenantsService { get; }

        HomeAppointmentsService HomeAppointmentsService { get; }

        DoctorCalendarService DoctorCalendarService { get; }

		AuthenticationService AuthenticationService { get; }
    }
}
