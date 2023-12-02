
using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;

namespace Apprilium.TripPlanner.Application.Queries
{
    public interface IPassengerQueries
    {
        Task<PagedResult<Model.Passenger>> GetAllPassengers(PassengerParameters param);
        Task<Model.Passenger> GetPassengerById();
    }
}
