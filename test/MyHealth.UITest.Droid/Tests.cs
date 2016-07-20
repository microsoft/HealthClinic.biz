using System;
using System.IO;
using System.Linq;
using NUnit.Framework;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace MyHealth.UITest.Droid
{
    [TestFixture(Platform.Android)]

    public class Tests
    {
        IApp app;
        Platform platform;

        public Tests(Platform platform)
        {
            this.platform = platform;
        }

        [SetUp]
        public void BeforeEachTest()
        {
            app = AppInitializer.StartApp(platform);
        }

        [Test]
        public void CancelNewAppointmentReturnsToHomeScreen()
        {
            //// Tap on "New Appointment"
            app.Tap(c => c.Id("action_new_appointment"));

            //// Wait for "New Appointment" to be opened
            app.WaitForElement(c => c.Text("Average wait time"));

            app.Screenshot("New appointment window");

            //// Do a scroll down
            app.ScrollDown();

            //// Wait to see the "CANCEL" button
            app.WaitForElement(c => c.Text("CANCEL"));

            //// Tap on "CANCEL" button
            app.Tap(c => c.Text("CANCEL"));

            app.Screenshot("New appointment canceled");
            //// Wait for Home screen to appear
            app.WaitForElement(c => c.Text("Home"));

        }

        [Test]
        public void AddNewAppointment()
        {
            //// Tap on "New Appointment"
            app.Tap(c => c.Id("action_new_appointment"));          

            //// Wait for "New Appointment" to be opened
            app.WaitForElement(c => c.Text("Average wait time"));

            app.Screenshot("New appointment window");

            //// Do a scroll down
            app.ScrollDown();

            //// Wait to see the "CANCEL" button
            app.WaitForElement(c => c.Text("ACCEPT"));

            //// Tap on "ACCEPT" button
            app.Tap(c => c.Text("ACCEPT"));

            //// Wait for the succes message appears 
            app.WaitForElement(c => c.Text("The appointment was created successfully."));

            app.Screenshot("New appointment created");
            //// Tap on ok
            app.Tap(c => c.Text("OK"));

            //// Wait for Home screen to appear
            app.WaitForElement(c => c.Text("Home"));
        }

        [Test]
        public void Login()
        {            
            //// Open menu
            app.Tap(c => c.Marked("Open"));

            //// Wait the menu to be opened
            app.WaitForElement(c => c.Marked("Settings"));
            app.Screenshot("Menu opened");

            //// Tap on settings
            app.Tap(c => c.Marked("Settings"));

            app.WaitForElement(c => c.Text("Accept"));
            app.Tap(c => c.Text("Accept"));
        }
    }
}

