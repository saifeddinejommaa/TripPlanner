using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Application.Model
{
    public class Group
    {
        public int GroupId { get; set; }

        public string Name { get; set; }

        public int TripId { get; set; }

        public string Description { get; set; }

        public string ShortName { get; set; }
    }
}
