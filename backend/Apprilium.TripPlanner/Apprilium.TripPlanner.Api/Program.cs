using Apprilium.TopHajj.Api;
using Autofac;
using Autofac.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

var appSettingsEnv = builder.Configuration.GetSection("APPSETTINGS_ENVIRONMENT").Value ?? "Dev";
builder.Configuration.AddJsonFile($"appsettings.{appSettingsEnv}.json", optional: true);

var startup = new Startup(builder.Configuration);
startup.ConfigureServices(builder.Services);

// Using a custom DI container.
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());


builder.Host.ConfigureContainer<ContainerBuilder>(startup.ConfigureContainer);

var app = builder.Build();

startup.Configure(app, app.Environment);

try
{
    app.Logger.LogInformation("{@Name} Api Starting ...", nameof(Program));
    app.Run();
}
catch (Exception ex)
{
    app.Logger.LogCritical(ex, "{@Name} Api terminated unexpectedly - Error at {@DateTime}, {@Message}",
        nameof(Program),
        DateTime.UtcNow,
        ex.InnerException?.Message ?? ex.Message);
}
