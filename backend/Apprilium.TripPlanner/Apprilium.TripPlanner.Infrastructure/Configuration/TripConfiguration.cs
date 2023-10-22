using Apprilium.TripPlanner.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Apprilium.TripPlanner.Infrastructure.Configuration
{
    public class TripConfiguration : IEntityTypeConfiguration<TripDb>
    {
        public void Configure(EntityTypeBuilder<TripDb> builder)
        {
            builder.HasKey(x => x.Id);
            builder.ToTable("Trip");
        }
    }
}
