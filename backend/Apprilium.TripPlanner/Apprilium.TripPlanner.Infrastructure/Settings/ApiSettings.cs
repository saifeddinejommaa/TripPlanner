
using Apprilium.TripPlanner.Domain.ApiSettings;

namespace Apprilium.TripPlanner.Infrastructure.Settings
{
    public class ApiSettings :IApiSettings
    {
        public static string ASPNETCORE_ENVIRONMENT { get; set; }
        public static ConnectionStrings ConnectionStrings { get; set; }
    }
}
