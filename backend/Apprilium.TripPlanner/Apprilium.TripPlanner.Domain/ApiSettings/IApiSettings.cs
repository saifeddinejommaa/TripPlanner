namespace Apprilium.TripPlanner.Domain.ApiSettings
{
    public interface IApiSettings
    {
        static string ASPNETCORE_ENVIRONMENT { get; set; }
        static ConnectionStrings ConnectionStrings { get; set; }
    }

    public class ConnectionStrings
    {
        public string TripPlannerDatabase { get; set; }
    }
}
