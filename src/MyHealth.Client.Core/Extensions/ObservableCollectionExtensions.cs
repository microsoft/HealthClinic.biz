using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Collections.ObjectModel
{
    static class ObservableCollectionExtensions
    {
        public static void AddRange<T>(this ObservableCollection<T> col, IEnumerable<T> source)
        {
            foreach (var item in source)
            {
                col.Add(item);
            }
        }
    }
}
