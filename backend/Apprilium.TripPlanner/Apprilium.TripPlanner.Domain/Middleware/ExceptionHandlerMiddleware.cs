using Apprilium.TripPlanner.Domain.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Text.Json;

namespace Apprilium.TripPlanner.Domain.Middleware
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlerMiddleware> _logger;
        public ExceptionHandlerMiddleware(RequestDelegate next, ILogger<ExceptionHandlerMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }
        private async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            var response = context.Response;

            IExceptionDetailsResponse exceptionResponse = new ExceptionDetailsResponse()
            {
                Details = exception.StackTrace
            };

            string result;
            switch (exception)
            {
                case MessageException ex:
                    response.StatusCode = (int)HttpStatusCode.Accepted;
                    exceptionResponse.Message = ex.Message;
                    result = JsonSerializer.Serialize((ExceptionResponse)exceptionResponse);
                    break;
                case UnauthorizedException:
                    response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    exceptionResponse.Message = "Unauthenticated";
                    result = JsonSerializer.Serialize((ExceptionResponse)exceptionResponse);
                    break;
                case DomainException ex:
                    response.StatusCode = (int)HttpStatusCode.BadRequest;
                    exceptionResponse.Message = ex.Message;
                    result = JsonSerializer.Serialize((ExceptionResponse)exceptionResponse);
                    break;
                default:
                    response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    exceptionResponse.Message = "Une erreur est survenue, veuillez réessayer ultérieurement.";
                    result = JsonSerializer.Serialize((ExceptionResponse)exceptionResponse);
                    break;
            }
            _logger.LogError(exception, "{message}", exception.InnerException?.Message ?? exception.Message);
            await context.Response.WriteAsync(result);
        }
    }
}



