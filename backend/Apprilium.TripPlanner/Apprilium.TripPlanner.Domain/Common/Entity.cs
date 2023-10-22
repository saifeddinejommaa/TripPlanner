namespace Apprilium.TripPlanner.Domain.Common
{
    public abstract class Entity : IEquatable<Entity>
    {
        private readonly int _requestedHashCode;

        protected Entity() : this(0)
        {
        }

        protected Entity(int id)
        {
            Id = id;
            _requestedHashCode = Id.GetHashCode() ^ 31;
        }

        public virtual int Id { get; private set; }

        public virtual bool Equals(Entity other)
        {
            if (other == null)
                return false;
            if (ReferenceEquals(this, other))
                return true;
            if (other.IsTransient() || IsTransient())
                return false;
            return other.Id == Id;
        }
        public override bool Equals(object obj)
        {
            if (obj is not Entity other)
                return false;
            return Equals(other);
        }

        /// <summary>
        ///     Check for newly-created entities which are not yet persisted
        /// </summary>
        /// <returns></returns>
        public bool IsTransient()
        {
            return Id == default;
        }

        /// <summary>
        ///     Sets the Id for transient entities
        /// </summary>
        /// <param name="id"></param>
        public void SetId(int id)
        {
            if (IsTransient()) Id = id;
        }


        public override int GetHashCode()
        {
            return _requestedHashCode;
        }

        public static bool operator ==(Entity left, Entity right)
        {
            return left?.Equals(right) ?? Equals(right, null);
        }

        public static bool operator !=(Entity left, Entity right)
        {
            return !(left == right);
        }
    }
}
