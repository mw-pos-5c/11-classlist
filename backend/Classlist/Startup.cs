#region usings

using Classlist.Services;

using ClasslistDb;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

#endregion

namespace Classlist
{
    public class Startup
    {
        #region Constants and Fields

        private readonly string myAllowSpecificOrigins = "_myAllowSpecificOrigins";

        #endregion

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(myAllowSpecificOrigins);

            app.UseMvc();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ClasslistContext>(options => options.UseSqlite(Configuration.GetConnectionString("sqlite")));

            services.AddScoped<StudentsService>();
            services.AddScoped<ClazzesService>();

            services.AddControllers();

            services.AddCors(options => { options.AddPolicy(myAllowSpecificOrigins, x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); });
            services.AddMvc(options => options.EnableEndpointRouting = false);
        }
    }
}
