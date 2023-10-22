using Apprilium.TopHajj.Application.Brands.Models;
using Apprilium.TopHajj.Application.CustomMapper.TypeHandlers;
using Apprilium.TopHajj.Infrastructure.Data;
using Apprilium.TopHajj.Infrastructure.Settings;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Dapper;
using MediatR;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Globalization;

namespace Apprilium.TopHajj.Api
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
            Configuration.Get<ApiSettings>();
            services.AddSingleton<IDbConnectionFactory, DbConnectionFactory>();

            services.AddDbContext<TopHajjContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("GlobeIntelligenceDatabase"),
                    context => context.MigrationsAssembly("Apprilium.TopHajj.Infrastructure")
                ));
            services.AddScoped<DbContext, TopHajjContext>();

            var applicationAssembly = typeof(Application.LibraryEntrypoint).Assembly;
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(applicationAssembly));
            services.AddAutoMapper(applicationAssembly);
            services.AddApplicationInsightsTelemetry();
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
            //app.UseAcceptLanguageSetCulture();
            app.UseRouting();
            app.UseRequestLocalization(app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>().Value);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private static void AddDapperCustomTypeHandlers()
        {
            //SqlMapper.AddTypeHandler(typeof(List<DateTime>), new SemicolonListTypeHandler());
            SqlMapper.AddTypeHandler(new JsonObjectTypeHandler<Brand>());
        }
    }
}
