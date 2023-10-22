namespace Apprilium.TripPlanner.Domain.Common
{
    public class PagedResult<T> where T : class
    {
        public PagedResult()
        {
        }
        public PagedResult(IEnumerable<T> results, int? pageSize, int totalRows)
        {
            PageSize = pageSize;
            Results = results;
            TotalRows = totalRows;
            PageCount = pageSize != 0 && pageSize != null ? (int)Math.Ceiling((decimal)totalRows / (int)pageSize) : 1;

        }
        public int TotalRows { get; set; }
        public int PageCount { get; set; }
        public int? PageSize { get; set; }
        public IEnumerable<T> Results { get; set; } = new List<T>();
    }
}
