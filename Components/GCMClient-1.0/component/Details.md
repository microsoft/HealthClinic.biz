Google Cloud Messaging Client
=============================

GCM (Google Cloud Messaging) is a component that makes getting your Xamarin.Android app setup to receive Push Notifications quickly and easily!



Registering for GCM Push Notifications
--------------------------------------

```csharp
//Check to see that GCM is supported and that the manifest has the correct information
GcmClient.CheckDevice(this);
GcmClient.CheckManifest(this);

//Call to Register the device for Push Notifications
GcmClient.Register(this, GcmBroadcastReceiver.SENDER_IDS);
```

Service Implementation
----------------------
Add these classes to your own project, and be sure to update the SENDER_IDS with your own Sender ID(s) from your Google API Console Project(s):

```csharp
[BroadcastReceiver(Permission=Constants.PERMISSION_GCM_INTENTS)]
[IntentFilter(new string[] { Constants.INTENT_FROM_GCM_MESSAGE }, 
	Categories = new string[] { "@PACKAGE_NAME@" })]
[IntentFilter(new string[] { Constants.INTENT_FROM_GCM_REGISTRATION_CALLBACK }, 
	Categories = new string[] { "@PACKAGE_NAME@" })]
[IntentFilter(new string[] { Constants.INTENT_FROM_GCM_LIBRARY_RETRY }, 
	Categories = new string[] { "@PACKAGE_NAME@" })]
public class GcmBroadcastReceiver : GcmBroadcastReceiverBase<GcmService>
{
	//IMPORTANT: Change this to your own Sender ID!
	//The SENDER_ID is your Google API Console App Project Number
	public static string[] SENDER_IDS = new string[] {"697360970929"};
}

[Service] //Must use the service tag
public class GcmService : GcmServiceBase
{
	public GcmService() : base(GcmBroadcastReceiver.SENDER_IDS) { }

	protected override void OnRegistered (Context context, string registrationId)
	{
		//Receive registration Id for sending GCM Push Notifications to
	}

	protected override void OnUnRegistered (Context context, string registrationId)
	{
		//Receive notice that the app no longer wants notifications
	}

	protected override void OnMessage (Context context, Intent intent)
	{
		//Push Notification arrived - print out the keys/values
		if (intent == null || intent.Extras == null)
			foreach (var key in intent.Extras.KeySet())
				Console.WriteLine("Key: {0}, Value: {1}");
	}

	protected override bool OnRecoverableError (Context context, string errorId)
	{
		//Some recoverable error happened
	}

	protected override void OnError (Context context, string errorId)
	{
		//Some more serious error happened
	}
}
```

Changes
-------
v1.0
  - First release

