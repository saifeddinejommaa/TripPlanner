

namespace Apprilium.TripPlanner.Application.Model
{
    public class Hotel
    {
        public int HotelId { get; set; }
        public string Name { get; set; }

        public int Category { get; set; }

        public string Address { get; set; }

        public DateTime ApplicationDate { get; set; }

        public DateTime StatusDate { get; set; }

        public int VisaTypeId { get; set; }
    }
}
