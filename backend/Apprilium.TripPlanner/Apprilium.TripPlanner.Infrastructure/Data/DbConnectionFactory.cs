using Apprilium.TripPlanner.Infrastructure.Settings;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Apprilium.TripPlanner.Infrastructure.Data
{
    public interface IDbConnectionFactory
    {
        IDbConnection GiDbConnection();
    }

    public class DbConnectionFactory : IDbConnectionFactory
    {
        public IDbConnection GiDbConnection()
        {
            return new SqlConnection(ApiSettings.ConnectionStrings.TripPlannerDatabase);
        }
    }
}
