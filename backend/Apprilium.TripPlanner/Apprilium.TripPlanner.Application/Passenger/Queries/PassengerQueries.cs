using Apprilium.TripPlanner.Application.Queries;
using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using Apprilium.TripPlanner.Infrastructure.Data;
using Dapper;
using System.Data;

namespace Apprilium.TripPlanner.Application.Passenger.Queries
{
    public class PassengerQueries : IPassengerQueries
    {
        private readonly IDbConnection _dbConnection;

        public PassengerQueries(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnection = dbConnectionFactory.GiDbConnection();
        }
        public async Task<PagedResult<Model.Passenger>> GetAllPassengers()
        {
            const string select = $@"
			SELECT * FROM T_Passenger";
            var pagedResult = await _dbConnection.QueryAsync<Model.Passenger>(select);
            return new PagedResult<Model.Passenger>(pagedResult, 25, pagedResult.Count());
        }
    }
}
