using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Apprilium.TripPlanner.Domain.Exceptions
{
    internal class ExceptionDetailsResponse : ExceptionResponse, IExceptionDetailsResponse
    {
        public string Details { get; set; }
    }
}
