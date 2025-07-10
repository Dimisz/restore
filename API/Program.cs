using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// add Product DbContext to the Container
builder.Services.AddDbContext<StoreContext>(opt =>
{
  // config string in appsettings.Development.json
  opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


var app = builder.Build();

// Configure the HTTP request pipeline
app.MapControllers();
DbInitializer.InitDb(app);

app.Run();
