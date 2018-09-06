using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinalSplitWise.Data;
using FinalSplitWise.Repositories;
using FinalSplitWise.SystemHub;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace FinalSplitWise
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<SystemDBContext>(options => options.UseSqlServer(
               Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc().AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling =
                    Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });
            services.AddScoped<UserData, UserDataSQL>();
            services.AddScoped<FriendData, FriendDataSQL>();
            services.AddScoped<GroupData, GroupDataSQL>();
            services.AddScoped<GroupMemberData, GroupMemberDataSQL>();
            services.AddScoped<BillData, BillDataSQL>();
            services.AddScoped<TransactionData, TransactionDataSQL>();
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
      });
      services.AddSignalR();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseDefaultFiles();
            app.UseStaticFiles();
      app.UseCors("CorsPolicy");
      app.UseSignalR(routes =>
      {
        routes.MapHub<MySystemHub>("/serve");
      });
      app.UseHttpsRedirection();

            app.UseMvc();
        }
    }
}
