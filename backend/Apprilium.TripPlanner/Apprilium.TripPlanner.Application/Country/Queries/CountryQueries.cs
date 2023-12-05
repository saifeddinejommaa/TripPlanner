using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Application.Country.Queries
{
    public class CountryQueries : ICountryQueries
    {
        public Task<IEnumerable<Model.Country>> GetAllCountries()
        {
            throw new NotImplementedException();
        }

        public Task<Model.Country> GetPassengerById(int countryId)
        {
            throw new NotImplementedException();
        }
    }
}
