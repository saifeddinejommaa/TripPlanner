using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;

namespace Apprilium.TripPlanner.Application.Hotel.Queries
{
    public interface IHotelQueries
    {
        Task<PagedResult<Model.Hotel>> GetAllPassengers(HotelParameters parameters);

    }
}
