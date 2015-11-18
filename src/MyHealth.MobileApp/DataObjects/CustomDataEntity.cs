using Microsoft.Azure.Mobile.Server.Tables;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace MyHealth.MobileApp.DataObjects
{
    public class CustomDataEntity : ITableData
    {
        [TableColumn(TableColumnType.CreatedAt)]
        public DateTimeOffset? CreatedAt { get; set; }

        [TableColumn(TableColumnType.Deleted)]
        public bool Deleted { get; set; }

        [TableColumn(TableColumnType.Id)]
        [DataMember]
        public string Id { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [TableColumn(TableColumnType.UpdatedAt)]
        public DateTimeOffset? UpdatedAt { get; set; }

        [TableColumn(TableColumnType.Version)]
        [DataMember]
        public byte[] Version { get; set; }
    }
}