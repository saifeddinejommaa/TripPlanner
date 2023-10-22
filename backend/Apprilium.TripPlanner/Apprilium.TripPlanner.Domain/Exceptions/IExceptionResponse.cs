using System;


namespace Apprilium.TripPlanner.Domain.Exceptions
{
    public interface IExceptionResponse
    {
        string Message { get; set; }
    }
}
