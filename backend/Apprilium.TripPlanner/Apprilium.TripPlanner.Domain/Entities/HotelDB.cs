using Apprilium.TripPlanner.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Domain.Entities
{
    internal class HotelDB : Entity, IAggregateRoot, IUndeletable
    {
        public int HotelId { get; set; }
        public string Name { get; set; }

        public int Category { get; set; }

        public string Address { get; set; }

        public DateTime ApplicationDate { get; set; }

        public DateTime StatusDate { get; set; }

        public int VisaTypeId { get; set; }
        public bool IsActiv { get ; set ; }
    }
}
