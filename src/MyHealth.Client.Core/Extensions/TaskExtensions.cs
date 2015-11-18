using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System.Threading.Tasks
{
    static class TaskExtensions
    {
        /// <summary>
        /// This method is used to explicity set the intention of calling
        /// a method using a fire-and-forget call.
        /// It is used when you want to call an async method without
        /// awaiting for it. Using this method suppresses the warning CS4014.
        /// </summary>
        /// <param name="task">Task to be called using a fire-and-forget call</param>
        public static void Forget(this Task task)
        {
            task.ConfigureAwait(false);
        }
    }
}
