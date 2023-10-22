using Apprilium.TripPlanner.Api.AdIdentity.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Apprilium.TripPlanner.Api.AdIdentity.Filters
{
    public class CacheIdentityFilter : IAuthorizationFilter
    {
        private const string ApiKeyHeaderName = "X-API-Key";
    private readonly ICacheIdentityService _cacheIdentityService;
  //  private readonly IQueries _promoterQueries;


    public CacheIdentityFilter(ICacheIdentityService cacheService)
    {
        _cacheIdentityService = cacheService;
      //  _promoterQueries = promoterQueries;
    }

    public void OnAuthorization(AuthorizationFilterContext context)
    {
        // Checks if the request comes from a method that has the [AllowAnonymous] attribute
        if (context.ActionDescriptor.EndpointMetadata
            .Any(em => em.GetType() == typeof(AllowAnonymousAttribute)))
            return;

        //If there is an api key we do not cache user
        if (context.HttpContext.Request.Headers.TryGetValue(ApiKeyHeaderName, out _))
            return;

        //If calling user has no name identifier (oid)
}
}


}
