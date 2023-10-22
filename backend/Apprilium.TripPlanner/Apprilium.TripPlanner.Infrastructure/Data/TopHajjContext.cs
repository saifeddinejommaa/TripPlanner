using Apprilium.TripPlanner.Domain.Entities;
using Apprilium.TripPlanner.Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Apprilium.TripPlanner.Infrastructure.Data
{
    public class TripPlannerContext : DbContext
    {
        public TripPlannerContext(DbContextOptions<TripPlannerContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfiguration(new TripConfiguration());

            base.OnModelCreating(modelBuilder);
        }


        public DbSet<TripDb> Brands { get; set; }

    }
}
