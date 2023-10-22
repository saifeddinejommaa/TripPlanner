using Dapper;
using Newtonsoft.Json;
using System.Data;

namespace Apprilium.TripPlanner.Application.CustomMapper.TypeHandlers
{
    public class JsonObjectTypeHandler<T> : SqlMapper.TypeHandler<T> where T : class
    {
        public override void SetValue(IDbDataParameter parameter, T value)
        {
            parameter.Value = value == null
                ? DBNull.Value
                : JsonConvert.SerializeObject(value);
            parameter.DbType = DbType.String;
        }

        public override T Parse(object value)
        {
            return JsonConvert.DeserializeObject<T>(value.ToString() ?? string.Empty);
        }
    }
}
