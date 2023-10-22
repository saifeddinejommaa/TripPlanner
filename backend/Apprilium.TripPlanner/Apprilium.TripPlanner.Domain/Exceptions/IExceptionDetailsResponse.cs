

namespace Apprilium.TripPlanner.Domain.Exceptions
{
    public interface IExceptionDetailsResponse : IExceptionResponse
    {
        string Details { get; set; }
    }
}
