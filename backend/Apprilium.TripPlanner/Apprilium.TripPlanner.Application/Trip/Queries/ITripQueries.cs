
using Apprilium.TripPlanner.Application.Trip.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
namespace Apprilium.TripPlanner.Application.Trip.Queries
{
    public interface ITripQueries
    {
        Task<PagedResult<Models.Trip>> GetAllTrips(TripParameters parameters);
    }
}
