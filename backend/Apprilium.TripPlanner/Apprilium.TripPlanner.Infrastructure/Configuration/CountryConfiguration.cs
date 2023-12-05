using Apprilium.TripPlanner.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Apprilium.TripPlanner.Infrastructure.Configuration
{
    public class CountryConfiguration : IEntityTypeConfiguration<PassengerDB>
    {
        public void Configure(EntityTypeBuilder<CountryDB> builder)
        {
            builder.HasKey(x => x.Id);
            builder.ToTable("T_Country");
        }
    }
}
