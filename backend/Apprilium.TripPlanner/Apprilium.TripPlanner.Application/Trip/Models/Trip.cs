namespace Apprilium.TripPlanner.Application.Trip.Models
{
    public class Trip
    {
        public int Id { get; set; }

        public int Code { get; set; }

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
