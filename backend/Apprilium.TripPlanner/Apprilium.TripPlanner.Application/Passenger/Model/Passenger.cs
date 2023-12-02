

using Apprilium.TripPlanner.Domain.Common;

namespace Apprilium.TripPlanner.Application.Model
{
    public class Passenger : PagingParameter
    {
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public string LocalFirstName { get; set; }

        public string LocalMiddleName { get; set; }

        public string LocalLastName { get; set; }

        public DateTime BirthDay { get; set; }

        public string BirthPlace { get; set; }

        public string BirthCountry { get; set; }

        public string Nationality { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public int CountryId { get; set; }

        public int PhoneNumber1 { get; set; }

        public int PhoneNumber2 { get; set; }
    }
}
