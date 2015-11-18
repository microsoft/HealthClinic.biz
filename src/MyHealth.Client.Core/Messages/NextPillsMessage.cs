using System;

namespace MyHealth.Client.Core.Messages
{
    public class NextPillsMessage
    {
        public static string MessageType = "nextPillsMessage";

        public string Name { get; set; }

        public string LeftTime { get; set; }

        public int Percentage { get; set; }
    }
}

