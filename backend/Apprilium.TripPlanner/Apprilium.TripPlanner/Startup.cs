using Apprilium.TripPlanner.Api.AdIdentity.Filters;
using Apprilium.TripPlanner.Application.CustomMapper.TypeHandlers;
using Apprilium.TripPlanner.Application.Model;
using Apprilium.TripPlanner.Application.Trip.Models;
using Apprilium.TripPlanner.Domain.Middleware;
using Apprilium.TripPlanner.Infrastructure.Data;
using Apprilium.TripPlanner.Infrastructure.Settings;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Dapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Globalization;

namespace Apprilium.TripPlanner.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public ILifetimeScope AutofacContainer { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            //Dapper custom type handler
            AddDapperCustomTypeHandlers();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new List<CultureInfo>
            {
                new("fr-FR"),
                new("fr"),
                new("en-GB"),
                new("en-US"),
                new("en")
            };
                options.DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture("fr-FR");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
            });
            services.Configure<ApiSettings>(Configuration);
            services.AddCors(o => o.AddPolicy("AllowAnyOrigin",
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                                 .AllowAnyMethod()
                                 .AllowAnyHeader();
                      }));
            Configuration.Get<ApiSettings>();
            services.AddSingleton<IDbConnectionFactory, DbConnectionFactory>();

            services.AddDbContext<TripPlannerContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("TripPlannerDatabase"),
                    context => context.MigrationsAssembly("Apprilium.TripPlanner.Infrastructure")
                ));
            services.AddScoped<DbContext, TripPlannerContext>();

            var applicationAssembly = typeof(Application.LibraryEntrypoint).Assembly;
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(applicationAssembly));
            services.AddAutoMapper(applicationAssembly);
            services.AddApplicationInsightsTelemetry();
            services.AddHealthChecks();
            services.AddControllers()
           .AddNewtonsoftJson();
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            // Register your own things directly with Autofac here. Don't
            // call builder.Populate(), that happens in AutofacServiceProviderFactory
            // for you.

            var assemblies = new[]
            {
            typeof(Application.LibraryEntrypoint).Assembly,
            typeof(Domain.LibraryEntrypoint).Assembly,
            typeof(Infrastructure.LibraryEntrypoint).Assembly
        };

            builder.RegisterAssemblyTypes(assemblies).AsImplementedInterfaces();
          
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // If, for some reason, you need a reference to the built container, you
            // can use the convenience extension method GetAutofacRoot.
            AutofacContainer = app.ApplicationServices.GetAutofacRoot();

            app.UseHttpsRedirection();
            app.UseMiddleware<ExceptionHandlerMiddleware>();
            app.UseCors("AllowAnyOrigin");
            //app.UseAcceptLanguageSetCulture();
            app.UseRouting();
           // app.UseAuthorization();
            //app.UseAuthentication();
            app.UseRequestLocalization(app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>().Value);
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
           });
            
        }

        private static void AddDapperCustomTypeHandlers()
        {
            //SqlMapper.AddTypeHandler(typeof(List<DateTime>), new SemicolonListTypeHandler());
            SqlMapper.AddTypeHandler(new JsonObjectTypeHandler<Trip>());
            //SqlMapper.AddTypeHandler(new JsonObjectTypeHandler<Passenger>());
            SqlMapper.AddTypeHandler(new JsonObjectTypeHandler<Hotel>());
            SqlMapper.AddTypeHandler(new JsonObjectTypeHandler<Group>());
        }
    }
}
