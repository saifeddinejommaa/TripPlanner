using Dapper;
using System.Reflection;

namespace Apprilium.TripPlanner.Domain.Common
{
    public class ResourceParameters
    {
        public virtual DynamicParameters ToDynamicParameters()
        {

            var dynamicParameters = new DynamicParameters();
            var myType = GetType();
            IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());

            foreach (var prop in props)
            {
                var value = prop.GetValue(this, null);
                switch (value)
                {
                    case IEnumerable<int> list:
                        for (var i = 1; i <= list.Count(); ++i)
                        {
                            dynamicParameters.Add($"@{prop.Name}#{i}#", list.ElementAt(i - 1));
                        }
                        break;
                    case IEnumerable<string> list:
                        for (var i = 1; i <= list.Count(); ++i)
                        {
                            dynamicParameters.Add($"@{prop.Name}#{i}#", list.ElementAt(i - 1).Replace("'", "''"));
                        }
                        break;
                    default:
                        dynamicParameters.Add($"@{prop.Name}", value);
                        break;
                }
            }

            return dynamicParameters;
        }

        public virtual string ToSqlQueryFilter()
        {
            throw new NotImplementedException();
        }

        public virtual string CteFilterStatement()
        {
            throw new NotImplementedException();
        }
    }
}