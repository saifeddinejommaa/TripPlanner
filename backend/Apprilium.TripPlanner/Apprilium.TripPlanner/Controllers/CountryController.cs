using Apprilium.TripPlanner.Application.Model;
using Apprilium.TripPlanner.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Apprilium.TripPlanner.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ICountryQueries _CountryQueries;

        public CountryController(ICountryQueries CountryQueries, IMediator mediator)
        {

            _CountryQueries = CountryQueries;
            _mediator = mediator;
        }

        [HttpGet("AllCountries")]
        [ProducesResponseType(typeof(IEnumerable<Country>), (int)HttpStatusCode.OK)]
        public IActionResult Get()
        {
            return Ok(_CountryQueries.GetAllCountries());
        }

        [HttpGet("CountryById/{id}")]
        [ProducesResponseType(typeof(IEnumerable<Country>), (int)HttpStatusCode.OK)]
        public IActionResult GetCountryById(int id)
        {
            return Ok( _CountryQueries.GetCountryById(id));
        }
    }

}
