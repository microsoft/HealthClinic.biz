using MyHealth.Client.Desktop.ViewModels;
using System.Collections.ObjectModel;

namespace MyHealth.Client.Desktop
{
    class DesignAppointmentSuggestions
    {
        public DesignAppointmentSuggestionViewModel CurrentViewModel { get; private set; }
        public DesignAppointmentSuggestions()
        {
            CurrentViewModel = new DesignAppointmentSuggestionViewModel();
        }

        public class DesignAppointmentSuggestionViewModel
        {
            public AppointmentSuggestion SelectedAppointment { get; set; }

            public ObservableCollection<AppointmentSuggestion> PossibleAppointments { get; private set; }

            public DesignAppointmentSuggestionViewModel()
            {
                PossibleAppointments = new ObservableCollection<AppointmentSuggestion>(DesignData.PossibleAppointmentTimes);
                SelectedAppointment = PossibleAppointments[0];
            }
        }
    }
}
