namespace Apprilium.TripPlanner.Api.AdIdentity.Services
{
    public interface ICacheIdentityService
    {
       
        void RemoveUser(string adUserId);
        void RemoveAll();
       
       
    }

    public class CacheIdentityService : ICacheIdentityService
    {
        private static readonly object UserLock = new();

        public void RemoveAll()
        {
          //  throw new NotImplementedException();
        }

        public void RemoveUser(string adUserId)
        {
          //  throw new NotImplementedException();
        }
    }

}
