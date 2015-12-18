using System;
using Windows.Foundation;
using Windows.UI;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Shapes;

namespace MyHealth.Client.W10.UWP.Controls
{
    public partial class CircularProgressBar : UserControl
    {
        public static readonly DependencyProperty PercentageProperty = DependencyProperty.Register("Percentage", typeof(int), typeof(CircularProgressBar), new PropertyMetadata(65, new PropertyChangedCallback(OnPercentageChanged)));

        public static readonly DependencyProperty StrokeThicknessProperty = DependencyProperty.Register("StrokeThickness", typeof(int), typeof(CircularProgressBar), new PropertyMetadata(5));

        public static readonly DependencyProperty SegmentColorProperty = DependencyProperty.Register("SegmentColor", typeof(GradientBrush), typeof(CircularProgressBar), new PropertyMetadata(GetDefaultSegmentColor()));

        public static readonly DependencyProperty RadiusProperty = DependencyProperty.Register("Radius", typeof(int), typeof(CircularProgressBar), new PropertyMetadata(25, new PropertyChangedCallback(OnPropertyChanged)));

        public static readonly DependencyProperty AngleProperty = DependencyProperty.Register("Angle", typeof(double), typeof(CircularProgressBar), new PropertyMetadata(120d, new PropertyChangedCallback(OnPropertyChanged)));

        public CircularProgressBar()
        {
            InitializeComponent();
        }

        public int Radius
        {
            get { return (int)GetValue(RadiusProperty); }
            set { SetValue(RadiusProperty, value); }
        }

        public GradientBrush SegmentColor
        {
            get { return (GradientBrush)GetValue(SegmentColorProperty); }
            set { SetValue(SegmentColorProperty, value); }
        }

        public int StrokeThickness
        {
            get { return (int)GetValue(StrokeThicknessProperty); }
            set { SetValue(StrokeThicknessProperty, value); }
        }

        public int Percentage
        {
            get
            {
                return (int)GetValue(PercentageProperty);
            }
            set
            {
                SetValue(PercentageProperty, value);
            }
        }

        public double Angle
        {
            get { return (double)GetValue(AngleProperty); }
            set { SetValue(AngleProperty, value); }
        }

        private static void OnPercentageChanged(DependencyObject sender, DependencyPropertyChangedEventArgs args)
        {
            CircularProgressBar circle = sender as CircularProgressBar;
            circle.Angle = (circle.Percentage * 360) / 100;
        }

        private static void OnPropertyChanged(DependencyObject sender, DependencyPropertyChangedEventArgs args)
        {
            CircularProgressBar circle = sender as CircularProgressBar;
            circle.RenderArc();
        }

        private void RenderArc()
        {
            RenderArc(360, fullPath, fullFigure, fullSegment);
            RenderArc(Angle, pathRoot, pathFigure, arcSegment);
        }

        private void RenderArc(double Angle, Path pathRoot, PathFigure pathFigure, ArcSegment arcSegment)
        {
            Point startPoint = new Point(Radius, 0);
            Point endPoint = ComputeCartesianCoordinate(Angle, Radius);
            endPoint.X += Radius;
            endPoint.Y += Radius;

            pathRoot.Width = Radius * 2 + StrokeThickness;
            pathRoot.Height = Radius * 2 + StrokeThickness;
            pathRoot.Margin = new Thickness(StrokeThickness, StrokeThickness, 0, 0);

            bool largeArc = Angle > 180.0;

            Size outerArcSize = new Size(Radius, Radius);

            pathFigure.StartPoint = startPoint;

            if (startPoint.X == Math.Round(endPoint.X) && startPoint.Y == Math.Round(endPoint.Y))
            {
                endPoint.X -= 0.01;
            }

            arcSegment.Point = endPoint;
            arcSegment.Size = outerArcSize;
            arcSegment.IsLargeArc = largeArc;
        }

        private Point ComputeCartesianCoordinate(double angle, double radius)
        {
            double angleRad = (Math.PI / 180.0) * (angle - 90);

            double x = radius * Math.Cos(angleRad);
            double y = radius * Math.Sin(angleRad);

            return new Point(x, y);
        }

        private void ControlLoaded(object sender, RoutedEventArgs e)
        {
            RenderArc();
        }

        private static LinearGradientBrush GetDefaultSegmentColor()
        {
            GradientStopCollection gsc = new GradientStopCollection()
            {
                new GradientStop
                {
                    Color = Colors.Red
                }
           };
           return new LinearGradientBrush(gsc, 0);
        }
    }
}
