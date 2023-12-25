using Apprilium.TripPlanner.Application.Model;
using Apprilium.TripPlanner.Infrastructure.Data;
using Dapper;
using System.Data;

namespace Apprilium.TripPlanner.Application.Queries
{
    public class CountryQueries : ICountryQueries
    {
        private readonly IDbConnection _dbConnection;

        public CountryQueries(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnection = dbConnectionFactory.GiDbConnection();
        }
       

        public Country GetCountryById(int countryId)
        {
             string select = $@"
        SELECT T_Country.Id {nameof(Country.Id)},
             T_Country.CountryIso {nameof(Country.CountryIso)},
             T_Country.CountryName {nameof(Country.CountryName)},
             T_Country.CountryIso3 {nameof(Country.CountryIso3)},
             T_Country.CountryNumCode {nameof(Country.CountryNumCode)},
             T_Country.CountryPhoneCode {nameof(Country.CountryPhoneCode)}
             FROM T_Country Where T_Country.Id= @{countryId}";

            return _dbConnection.Query<Country>(select).FirstOrDefault();
        }


        IEnumerable<Country> ICountryQueries.GetAllCountries()
        {
            const string select = $@"

        SELECT T_Country.Id {nameof(Country.Id)},
             T_Country.CountryIso {nameof(Country.CountryIso)},
             T_Country.CountryName {nameof(Country.CountryName)},
             T_Country.CountryIso3 {nameof(Country.CountryIso3)},
             T_Country.CountryNumCode {nameof(Country.CountryNumCode)},
             T_Country.CountryPhoneCode {nameof(Country.CountryPhoneCode)}
             FROM T_Country";


            return _dbConnection.Query<Country>(select);

        }
    }
}
