
namespace Apprilium.TripPlanner.Domain.Exceptions
{
    [Serializable]
    public class UnauthorizedException : Exception
    {
        public UnauthorizedException()
        {
        }

        public UnauthorizedException(string message) : base(message)
        {
        }
    }
}
