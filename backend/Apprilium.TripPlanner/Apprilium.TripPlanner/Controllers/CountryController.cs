using Apprilium.TripPlanner.Application.Country.Model;
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
    public class CountryController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ICountryQueries _CountryQueries;

        public CountryController(ICountryQueries CountryQueries, IMediator mediator)
        {

            _CountryQueries = CountryQueries;
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Country>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            return Ok(await _CountryQueries.GetAllCountrys());
        }

        [HttpGet("CountryById")]
        [ProducesResponseType(typeof(IEnumerable<Country>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCountryById()
        {
            return Ok(await _CountryQueries.GetCountryById());
        }
    }

}
