using System;
using MyHealth.Client.Desktop.Infrastructure;


namespace MyHealth.Client.Desktop.ViewModels
{
    public class HeaderViewModel : ObservableViewModel
    {
        private string _infoText = String.Empty;

        private string actionText;
        public RelayCommand NavCommand { get; set; }

        public RelayCommand ActionCommand { get; set; }

        public string ActionText
        {
            get
            {
                return actionText;
            }
            set
            {
                actionText = value;
                RaisePropertyChanged();
            }
        }
        public string ActionImgPath { get; set; }
        public string ActionImgPath_Hover { get; set; }
        public string ActionImgPath_Press { get; set; }
        public string HeaderText { get; set; }

        public string InfoText
        {
            get
            {
                return _infoText;
            }
            set
            {
                if (_infoText != value)
                {
                    _infoText = value;
                }
                RaisePropertyChanged();
            }
        }

        private string _navImgPath = String.Empty;
        public string NavImgPath
        {
            get
            {
                return _navImgPath;
            }
            set
            {
                if (_navImgPath != value)
                {
                    _navImgPath = value;
                    RaisePropertyChanged();
                    RaisePropertyChanged("NavImgVisible");
                }
               
            }
        }

        private string _navImgPath_Hover = String.Empty;
        public string NavImgPath_Hover
        {
            get
            {
                return _navImgPath_Hover;
            }
            set
            {
                if (_navImgPath_Hover != value)
                {
                    _navImgPath_Hover = value;
                    RaisePropertyChanged();
                }

            }
        }


        private string _navImgPath_Press = String.Empty;
        public string NavImgPath_Press
        {
            get
            {
                return _navImgPath_Press;
            }
            set
            {
                if (_navImgPath_Press != value)
                {
                    _navImgPath_Press = value;
                    RaisePropertyChanged();
                }

            }
        }

        public System.Windows.Visibility NavImgVisible
        {
            get
            {
                return String.IsNullOrEmpty(NavImgPath) ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
            }
        }

        public HeaderViewModel()
        { }
    }
}
