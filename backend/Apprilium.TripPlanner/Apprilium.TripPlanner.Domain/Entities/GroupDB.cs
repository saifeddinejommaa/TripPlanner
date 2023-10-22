using Apprilium.TripPlanner.Domain.Common;

namespace Apprilium.TripPlanner.Domain.Entities
{
    internal class GroupDB : Entity, IAggregateRoot, IUndeletable
    {
        public int GroupId { get; set; }

        public string Name { get; set; }

        public int TripId { get; set; }

        public string Description { get; set; }

        public string ShortName { get; set; }
        public bool IsActiv { get; set ; }
    }
}
