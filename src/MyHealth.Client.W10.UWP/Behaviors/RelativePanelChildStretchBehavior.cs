using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace MyHealth.Client.W10.UWP.Behaviors
{
    public static class RelativePanelChildStretchBehavior
    {
        public static readonly DependencyProperty StrechAvalaibleSpaceProperty =
            DependencyProperty.RegisterAttached("StrechAvalaibleSpace", typeof(bool),
            typeof(RelativePanelChildStretchBehavior), new PropertyMetadata(null, OnStrechAvalaibleSpacePropertyChanged));

        public static void SetStrechAvalaibleSpace(DependencyObject d, bool value)
        {
            d.SetValue(StrechAvalaibleSpaceProperty, value);
        }

        public static bool GetStrechAvalaibleSpace(DependencyObject d)
        {
            return (bool)d.GetValue(StrechAvalaibleSpaceProperty);
        }

        private static void OnStrechAvalaibleSpacePropertyChanged(DependencyObject d,
            DependencyPropertyChangedEventArgs e)
        {
            var relativePanel = d as RelativePanel;
            double childCount = relativePanel.Children.Count;
            for (int i = 0; i < childCount; i++)
            {
                FrameworkElement child = relativePanel.Children[i] as FrameworkElement;
                child.Width = relativePanel.ActualWidth - child.Margin.Right * 2;
            }
        }
    }
}
