using MyHealth.Client.Desktop.Infrastructure;

namespace MyHealth.Client.Desktop
{
    public class DesignHeaderViewModel
    {
        public RelayCommand NavCommand
        {
            get { return new RelayCommand(NavigationHelper.NavigateToMainPage); }            
        }
        public RelayCommand ActionCommand
        {
            get { return new RelayCommand(NavigationHelper.NavigateToPatientSelector); }            
        }
        public string HeaderText { get { return "DASHBOARD"; } }
        public string ActionImgPath { get { return @"..\Assets\btn_back.png"; }  }
        public string ActionText { get { return "Create Appointment"; } }
        public string InfoText { get { return "09/28/15 - 17:01 - Mike Wood (Neurology)"; } }
        public string NavImgPath { get { return @"..\assets\btn_back.png"; } }

        public System.Windows.Visibility NavImgVisible { get { return System.Windows.Visibility.Visible; } }
    }
}
