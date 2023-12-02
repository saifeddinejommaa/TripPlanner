using System.Data;
using Apprilium.TripPlanner.Domain.Common;
using Dapper;

namespace Apprilium.TripPlanner.Infrastructure.Queries.Extensions;

public static class SqlMapperExtension
{
    public static async Task<int> ExperimentalCount(this IDbConnection cnn, string sql, object param = null)
    {
        const string select = "SELECT";
        const string from = "FROM";
        var firstSelect = sql.IndexOf(select);
        var lastFrom = 0;

        var i = firstSelect + select.Length;
        while (i < sql.Length && lastFrom == 0)
        {
            var nextSelect = sql.IndexOf(select, i);
            var nextFrom = sql.IndexOf(from, i);

            if (nextSelect == -1 || nextFrom < nextSelect)
                lastFrom = nextFrom;
            else
                i = nextFrom + from.Length;
        }

        var strToReplace = sql.Substring(firstSelect, lastFrom - firstSelect);

        var countQuery = sql.Replace(strToReplace, "SELECT COUNT(*) ");

        return await cnn.ExecuteScalarAsync<int>(countQuery, param);
    }

    public static async Task<IEnumerable<T>> QueryDirectPagedResult<T>(
        this IDbConnection cnn,
        string sql,
        PagingParameter pageParams,
        object parameters = null,
        string[] allowedColumnsNameForSort = null)
    {
        if (pageParams.PageSize == null || pageParams.PageSize <= 0) //Don't allow all results for now.
            pageParams.PageSize = 10;

        string orderByQuery;
        var offSetQuery = string.Empty;

        if (string.IsNullOrWhiteSpace(pageParams.SortColumn) || allowedColumnsNameForSort == null || allowedColumnsNameForSort.All(x => x.ToUpper() != pageParams.SortColumn.ToUpper()))
        {
            orderByQuery = $"ORDER BY (SELECT NULL)";
        }
        else
        {
            pageParams.SortOrder = pageParams.SortOrder != null && pageParams.SortOrder.Trim().ToUpper() == "DESC" ? "DESC" : "ASC";
            orderByQuery = $"ORDER BY {pageParams.SortColumn} {pageParams.SortOrder}";
        }

        if (pageParams.PageSize != null)
        {
            var offSet = pageParams.PageSize * (pageParams.PageNumber - 1);
            offSet = offSet < 0 ? 0 : offSet;
            offSetQuery = !string.IsNullOrWhiteSpace(orderByQuery) ? $" OFFSET {offSet} ROWS FETCH NEXT {pageParams.PageSize} ROWS ONLY" : string.Empty;
        }

        var pagedQuery = $@"{sql}
                            {orderByQuery}
                            {offSetQuery};";

        return await cnn.QueryAsync<T>(pagedQuery, parameters);
    }
}