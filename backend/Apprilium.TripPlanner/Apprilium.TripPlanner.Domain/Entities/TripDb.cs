using Apprilium.TripPlanner.Domain.Common;

namespace Apprilium.TripPlanner.Domain.Entities
{
    public class TripDb : Entity, IAggregateRoot, IUndeletable
    {
        public int Id { get; set; }
        public bool IsActiv { get; set; }

        public string Code { get; set; }

        public string Desc { get; set; }

        public string ShortName { get; set; }

        public string DepartureFrom { get; set; }

        public string ArrivalTo { get; set; }

        public string QuitFrom { get; set; }

        public DateTime DepartureDate { get; set; }

        public DateTime ArrivalDate { get; set; }

        public DateTime QuitDate { get; set; }
    }
}
