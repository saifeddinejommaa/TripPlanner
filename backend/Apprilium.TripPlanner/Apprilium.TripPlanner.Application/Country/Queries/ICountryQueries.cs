using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Application.Country.Queries
{
    public interface ICountryQueries
    {
        Task<IEnumerable<Model.Country>> GetAllCountries();
        Task<Model.Country> GetPassengerById(int countryId);
    }
}
