using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
