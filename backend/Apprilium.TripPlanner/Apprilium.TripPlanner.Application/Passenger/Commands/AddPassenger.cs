using MediatR;
using Apprilium.TripPlanner.Domain.Entities;
using Apprilium.TripPlanner.Domain.Repositories;

namespace Apprilium.TripPlanner.Application.Passenger.Commands
{
    public class AddPassengerRequest : IRequest<bool>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public string LocalFirstName { get; set; }

        public string LocalMiddleName { get; set; }

        public string LocalLastName { get; set; }

        public DateTime BirthDay { get; set; }

        public string BirthPlace { get; set; }

        public string BirthCountry { get; set; }

        public string Nationality { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public int CountryId { get; set; }

        public int PhoneNumber1 { get; set; }

        public int PhoneNumber2 { get; set; }

    }

    public class RequestAddPassengerHandler : IRequestHandler<AddPassengerRequest, bool>
    {

        private readonly IPassengerRepostiory _passengerRepository;


        public RequestAddPassengerHandler(IPassengerRepostiory passengerRepository)
        {

            _passengerRepository = passengerRepository;
        }

        public async Task<bool> Handle(AddPassengerRequest request, CancellationToken cancellationToken)
        {
            await using var transaction = _passengerRepository.UnitOfWork.BeginTransaction();
            var newPassenger = new PassengerDB
            {
                IsActiv = true,
                Address1 = request.Address1,
                Address2 = request.Address2,
                BirthCountry = request.BirthCountry,
                Nationality = request.Nationality,
                BirthDay = request.BirthDay,
                BirthPlace = request.BirthPlace,
                City = request.City,
                CountryId = request.CountryId,
                FirstName = request.FirstName,
                LastName = request.LastName,
                LocalFirstName = request.LocalFirstName,
                LocalLastName = request.LocalLastName,
                LocalMiddleName = request.LocalMiddleName,
                MiddleName = request.MiddleName,
                PhoneNumber1 = request.PhoneNumber1,
                PhoneNumber2 = request.PhoneNumber2,
                ZipCode = request.ZipCode,
            };
            _passengerRepository.Add(newPassenger);

            await _passengerRepository.UnitOfWork.SaveChangesAsync();

            return await Task.FromResult(true);

            // }

        }
    }
}
