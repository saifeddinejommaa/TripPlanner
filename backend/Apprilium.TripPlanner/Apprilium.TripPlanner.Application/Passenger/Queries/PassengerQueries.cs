using Apprilium.TripPlanner.Application.Queries;
using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using Apprilium.TripPlanner.Infrastructure.Data;
using Apprilium.TripPlanner.Infrastructure.Queries.Extensions;
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
        public async Task<PagedResult<Model.Passenger>> GetAllPassengers(PassengerParameters parameters)
        {
            
            const string select = $@"
			  SELECT T_Passenger.Id {nameof(Model.Passenger.Id)}, 
                T_Passenger.FirstName  {nameof(Model.Passenger.FirstName)}, 
                T_Passenger.MiddleName  {nameof(Model.Passenger.MiddleName)},
                T_Passenger.LastName  {nameof(Model.Passenger.LastName)},
                T_Passenger.LocalFirstName  {nameof(Model.Passenger.LocalFirstName)},
                T_Passenger.LocalMiddleName  {nameof(Model.Passenger.LocalMiddleName)},
                T_Passenger.LocalLastName  {nameof(Model.Passenger.LocalLastName)},
                T_Passenger.BirthDate  {nameof(Model.Passenger.BirthDay)},
                T_Passenger.BirthPlace  {nameof(Model.Passenger.BirthPlace)},
                T_Passenger.BirthCountry  {nameof(Model.Passenger.BirthCountry)},
                T_Passenger.Nationality  {nameof(Model.Passenger.Nationality)},
                T_Passenger.Adress1  {nameof(Model.Passenger.Address1)},
                T_Passenger.Adress2  {nameof(Model.Passenger.Address2)},
                T_Passenger.ZipCode  {nameof(Model.Passenger.ZipCode)},
                T_Passenger.City  {nameof(Model.Passenger.City)},
                T_Passenger.CountryId  {nameof(Model.Passenger.CountryId)},
                T_Passenger.PhoneNumber1  {nameof(Model.Passenger.PhoneNumber1)},
                T_Passenger.PhoneNumber2  {nameof(Model.Passenger.PhoneNumber2)}
                from T_Passenger";
            
            
            
            var pagedResult = await _dbConnection.QueryDirectPagedResult<Model.Passenger>(select, parameters);
            return new PagedResult<Model.Passenger>(pagedResult, 25, pagedResult.Count());
        }

        public async Task<Model.Passenger> GetPassengerById()
        {
            const string select = $@"
			  SELECT T_Passenger.Id {nameof(Model.Passenger.Id)}, 
                T_Passenger.FirstName  {nameof(Model.Passenger.FirstName)}, 
                T_Passenger.MiddleName  {nameof(Model.Passenger.MiddleName)},
                T_Passenger.LastName  {nameof(Model.Passenger.LastName)},
                T_Passenger.LocalFirstName  {nameof(Model.Passenger.LocalFirstName)},
                T_Passenger.LocalMiddleName  {nameof(Model.Passenger.LocalMiddleName)},
                T_Passenger.LocalLastName  {nameof(Model.Passenger.LocalLastName)},
                T_Passenger.BirthDate  {nameof(Model.Passenger.BirthDay)},
                T_Passenger.BirthPlace  {nameof(Model.Passenger.BirthPlace)},
                T_Passenger.BirthCountry  {nameof(Model.Passenger.BirthCountry)},
                T_Passenger.Nationality  {nameof(Model.Passenger.Nationality)},
                T_Passenger.Adress1  {nameof(Model.Passenger.Address1)},
                T_Passenger.Adress2  {nameof(Model.Passenger.Address2)},
                T_Passenger.ZipCode  {nameof(Model.Passenger.ZipCode)},
                T_Passenger.City  {nameof(Model.Passenger.City)},
                T_Passenger.CountryId  {nameof(Model.Passenger.CountryId)},
                T_Passenger.PhoneNumber1  {nameof(Model.Passenger.PhoneNumber1)},
                T_Passenger.PhoneNumber2  {nameof(Model.Passenger.PhoneNumber2)}
                from T_Passenger Where T_Passenger.Id=7";

            var result = await _dbConnection.QueryAsync<Model.Passenger>(select);
            return result.FirstOrDefault() ;
        }
    }
}
