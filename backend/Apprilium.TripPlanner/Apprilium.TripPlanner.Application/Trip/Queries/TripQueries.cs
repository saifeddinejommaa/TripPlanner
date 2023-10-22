using Apprilium.TripPlanner.Infrastructure.Data;
using Apprilium.TripPlanner.Application.Trip.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Application.Trip.Queries
{
    public class TripQueries : ITripQueries
    {
        private readonly IDbConnection _dbConnection;

        public TripQueries(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnection = dbConnectionFactory.GiDbConnection();
        }
        public async Task<PagedResult<Models.Trip>> GetAllTrips(TripParameters parameters)
        {
            const string select = $@"
			SELECT * FROM Trip";
            var filterParams = parameters.ToDynamicParameters();
            var pagedResult = await _dbConnection.QueryAsync<Models.Trip>(select, filterParams);
            return new PagedResult<Models.Trip>(pagedResult, parameters.PageSize, pagedResult.Count());
        }
    }
}
