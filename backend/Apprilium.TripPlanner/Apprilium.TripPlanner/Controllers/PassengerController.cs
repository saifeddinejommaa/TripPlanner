using Apprilium.TripPlanner.Application.Queries;
using Apprilium.TripPlanner.Application.ResourceParameters;
using Apprilium.TripPlanner.Application.Trip.Models;
using Apprilium.TripPlanner.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Apprilium.TripPlanner.Api.Controllers
{
    [Authorize]
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
        [ProducesResponseType(typeof(PagedResult<Trip>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get([FromQuery] PassengerParameters parameters)
        {
            return Ok(await _passengerQueries.GetAllPassengers(parameters));
        }
    }

}
