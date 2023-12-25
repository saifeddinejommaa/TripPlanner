using Apprilium.TripPlanner.Application.Model;
using Apprilium.TripPlanner.Application.Queries;
using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Apprilium.TripPlanner.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PassengerController: ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IPassengerQueries _passengerQueries;

        public PassengerController(IPassengerQueries passengerQueries, IMediator mediator)
        {

            _passengerQueries = passengerQueries;
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(PagedResult<Passenger>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get([FromQuery] PassengerParameters param)
        {
            return Ok(await _passengerQueries.GetAllPassengers(param));
        }

        [HttpGet("passengerById")]
        [ProducesResponseType(typeof(PagedResult<Passenger>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetPassengerById()
        {
            return Ok(await _passengerQueries.GetPassengerById());
        }

        [HttpPost("new")]
        public async Task<IActionResult> AddNewPassenger([FromBody] Passenger newPassenger)
        {
            var newCandidate = await _mediator.Send(newPassenger);
            return Ok(newCandidate);
        }
    }

}
