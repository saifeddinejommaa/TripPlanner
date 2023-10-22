

namespace Apprilium.TripPlanner.Domain.Common
{
    public class PagingParameter : ResourceParameters
    {
        private int? _pageSize { get; set; }
        public int PageNumber { get; set; } = 1;
        public string SortColumn { get; set; }
        public string SortOrder { get; set; } //"DESC" vs "ASC"
        public int Table { get; set; }
        public int Dropdown { get; set; }
        public bool All { get; set; }
        public int? PageSize
        {
            get => _pageSize;
            set => _pageSize = value != null && value <= 0 ? 10 : value;
        }
    }
}
