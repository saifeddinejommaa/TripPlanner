using Apprilium.TripPlanner.Domain.Common;


namespace Apprilium.TripPlanner.Domain.Entities
{
    public class PassengerDB : Entity, IAggregateRoot, IUndeletable
    {
        public bool IsActiv { get ; set ; }

        public int PassengerId { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public DateTime BirthDay { get; set; }

        public string BirthPlace { get; set; }

        public string BirthCountry { get; set; }

        public string Nationality { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public int CountryId { get; set; }
    }
}
