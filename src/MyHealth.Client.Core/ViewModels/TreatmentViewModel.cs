using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ViewModels
{
    public class TreatmentViewModel : BaseViewModel
    {
        static readonly int AmountOfMedicines = 5;

        readonly IMyHealthClient _myHealthClient;

        private ObservableCollection<MedicineWithDoses> _treatment;
        private int countdown;
        private MedicineWithDoses treatmentSelectedItem;

        public ObservableCollection<MedicineWithDoses> Treatment
        {
            get { return _treatment; }
            set
            {
                _treatment = value;
                RaisePropertyChanged(() => Treatment);
            }
        }

        public MedicineWithDoses TreatmentSelectedItem
        {
            get
            {
                return treatmentSelectedItem;
            }
            set
            {
                if (treatmentSelectedItem == value) return;
                treatmentSelectedItem = value;
                RaisePropertyChanged(() => TreatmentSelectedItem);
                CountDown = CountdownHelper.CalcCountDownValue(treatmentSelectedItem);
            }
        }

        public int CountDown
        {
            get { return countdown; }
            set { countdown = value; RaisePropertyChanged(() => CountDown); }
        }

        public TreatmentViewModel(IMyHealthClient client, IMvxMessenger messenger) 
            : base(messenger)
        {
            _myHealthClient = client;
        }

        public override void Start()
        {
            base.Start();

            ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync()
        {
            await InitializeTreatments();
        }

        private async Task InitializeTreatments()
        {
            var medicines = await _myHealthClient.MedicinesService.GetMedicinesWithDosesAsync(AppSettings.CurrentPatientId, AmountOfMedicines);

            Treatment = new ObservableCollection<MedicineWithDoses>(medicines);

            TreatmentSelectedItem = Treatment.FirstOrDefault();
        }
    }
}
