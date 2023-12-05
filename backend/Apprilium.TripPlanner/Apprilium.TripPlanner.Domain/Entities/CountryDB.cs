using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Domain.Entities
{
    public class CountryDB
    {
        public int Id { get; set; }
        public string CountryIso { get; set; }
        public string CountryName { get; set; }
        public string CountryIso3 { get; set; }
        public string CountryNumCode { get; set; }

        public string CountryPhoneCode { get; set; }
    }
}
