

using Apprilium.TripPlanner.Application.Model;

namespace Apprilium.TripPlanner.Application.Queries
{
    public interface ICountryQueries
    {
        IEnumerable<Country> GetAllCountries();
        Country GetCountryById(int countryId);
    }
}
