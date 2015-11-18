using System;
using MyHealth.Client.Core.ViewModels;
using Cirrious.CrossCore.Converters;

namespace MyHealth.Client.Droid.Converters
{
    public class MenuOptionToIconAssetNameConverter : MvxValueConverter<MenuOption, int>
    {
        protected override int Convert(MenuOption value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            switch (value)
            {
                case MenuOption.Home:
                    return Resource.Drawable.ic_home_normal;
                case MenuOption.Appointment:
                    return Resource.Drawable.ic_appointment_normal;
                case MenuOption.Settings:
                    return Resource.Drawable.ic_setting_normal;
                case MenuOption.Treatment:
                    return Resource.Drawable.ic_treatment_normal;
                case MenuOption.User:
                    return Resource.Drawable.ic_user_normal;
                default:
                    return Resource.Drawable.ic_home_normal;
            }
        }
    }
}