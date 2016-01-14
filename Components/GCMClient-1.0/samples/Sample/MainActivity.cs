using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Android.Util;
using Gcm.Client;

namespace Sample
{
	[Activity(Label = "GCM Client Sample", MainLauncher = true, 
		LaunchMode= Android.Content.PM.LaunchMode.SingleTask)]
	public class MainActivity : Activity
	{
		//NOTE: You need to put your own email here!
		// Whichever one you registered as the 'Role' email with google
		const string TAG = "GCM-CLIENT";

		TextView textRegistrationStatus = null;
		TextView textRegistrationId = null;
		TextView textLastMsg = null;
		Button buttonRegister = null;
		bool registered = false;

		protected override void OnCreate(Bundle bundle)
		{
			base.OnCreate(bundle);

			// Set our view from the "main" layout resource
			SetContentView(Resource.Layout.Main);

			textRegistrationStatus = FindViewById<TextView>(Resource.Id.textRegistrationStatus);
			textRegistrationId = FindViewById<TextView>(Resource.Id.textRegistrationId);
			textLastMsg = FindViewById<TextView>(Resource.Id.textLastMessage);
			buttonRegister = FindViewById<Button>(Resource.Id.buttonRegister);

			Log.Info(TAG, "Hello World");

			//Check to ensure everything's setup right
			GcmClient.CheckDevice(this);
			GcmClient.CheckManifest(this);


			this.buttonRegister.Click += delegate
			{
				if (!registered)
				{
					Log.Info(TAG, "Registering...");

					//Call to register
					GcmClient.Register(this, GcmBroadcastReceiver.SENDER_IDS);
				}
				else
				{
					Log.Info(TAG, "Unregistering...");

					//Call to unregister
					GcmClient.UnRegister(this);
				}

				//Disable the button so multiple register requests don't happen
				RunOnUiThread(() =>	this.buttonRegister.Enabled = false);
			};			
		}

		protected override void OnResume()
		{
			base.OnResume();

			updateView();
		}

		void updateView()
		{
			//Get the stored latest registration id
			var registrationId = GcmClient.GetRegistrationId(this);

			//If it's empty, we need to register
			if (string.IsNullOrEmpty(registrationId))
			{
				registered = false;
				this.textRegistrationStatus.Text = "Registered: No";
				this.textRegistrationId.Text = "Id: N/A";
				this.buttonRegister.Text = "Register...";

				Log.Info(TAG, "Not registered...");
			}
			else
			{
				registered = true;
				this.textRegistrationStatus.Text = "Registered: Yes";
				this.textRegistrationId.Text = "Id: " + registrationId;
				this.buttonRegister.Text = "Unregister...";

				Log.Info(TAG, "Already Registered: " + registrationId);
			}

			var prefs = GetSharedPreferences(this.PackageName, FileCreationMode.Private);
			this.textLastMsg.Text = "Last Msg: " + prefs.GetString("last_msg", "N/A");

			//Enable the button as it was normally disabled
			this.buttonRegister.Enabled = true;
		}
	}
}


