using System.Linq.Expressions;

namespace Apprilium.TripPlanner.Domain.Common
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IUnitOfWork UnitOfWork { get; }

        TEntity Get(int id);
        void Add(TEntity entity);
        void Remove(TEntity entity);
        bool Any<T>(Expression<Func<T, bool>> filter) where T : Entity;
        void NotNull<T>(int? id, string exceptionMessage) where T : Entity;
        void NotInactive<T>(int id, string exceptionMessage) where T : Entity, IUndeletable;
        void NotNullAndNotInactive<T>(int? id, string exceptionMessageWhenIsNull, string exceptionMessageWhenIsInactive) where T : Entity, IUndeletable;
        void NotNullAndNotInactive<T>(List<int> ids, string exceptionMessageWhenIsNull, string exceptionMessageWhenIsInactive) where T : Entity, IUndeletable;
    }
}
