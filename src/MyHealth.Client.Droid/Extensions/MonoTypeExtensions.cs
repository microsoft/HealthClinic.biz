using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

namespace MyHealth.Client.Droid.Extensions
{
    static class MonoTypeExtensions
    {
        public static string TagName(this Type type)
        {
            var tokens = type.FullName.Split('.');
            var convertedTokens = new List<string>(tokens.Length);
            for (int idx = 0; idx < tokens.Length - 2; idx++)
            {
                convertedTokens.Add(tokens[idx].ToLowerInvariant());
            }

            convertedTokens.Add(tokens[tokens.Length -1]);
            return string.Join(".", convertedTokens);
        } 
    }
}