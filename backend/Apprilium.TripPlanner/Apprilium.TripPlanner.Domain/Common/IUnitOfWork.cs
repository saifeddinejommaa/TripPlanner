

using Microsoft.EntityFrameworkCore.Storage;

namespace Apprilium.TripPlanner.Domain.Common
{
    public interface IUnitOfWork
    {
        void SaveChanges();
        void SaveAnonymousChanges();
        Task SaveChangesAsync();
        IDbContextTransaction BeginTransaction();
    }
}
