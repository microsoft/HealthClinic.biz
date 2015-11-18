using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace MyHealth.Client.Desktop
{
    public class DesignPatientSelectorViewModel
    {
        public ObservableCollection<Patient> FilteredPatients { get; private set; }

        public DesignPatientSelectorViewModel()
        {
            FilteredPatients = new ObservableCollection<Patient>();
            List<string> knownPatients = new List<string>();

            foreach (Appointment appt in DesignData.StandardAppointments)
            {
                string patientName = appt.Patient.Name;
                if(!knownPatients.Contains(patientName))
                {
                    FilteredPatients.Add(appt.Patient);
                    knownPatients.Add(patientName);
                }
            }

        }
    }
}
