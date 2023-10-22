using Apprilium.TripPlanner.Application.Trip.Models;
using Apprilium.TripPlanner.Application.Trip.Queries;
using Apprilium.TripPlanner.Application.Trip.ResourceParameters;
using Apprilium.TripPlanner.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Apprilium.TripPlanner.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ITripQueries _tripQueries;

        public TripController(ITripQueries tripQueries, IMediator mediator)
        {

            _tripQueries = tripQueries;
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(PagedResult<Trip>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get([FromQuery] TripParameters parameters)
        {

            return Ok(await _tripQueries.GetAllTrips(parameters));
        }
    }
}
