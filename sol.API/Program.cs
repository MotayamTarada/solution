using Microsoft.EntityFrameworkCore;
using sol.API.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Register OhStudioContext for Dependency Injection
builder.Services.AddDbContext<OhStudioContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Server=MOTAYAM;Database=oh-studio;User Id=sa;Password=mot.1692003;Trusted_Connection=False;Encrypt=True;TrustServerCertificate=True\"")));

// Swagger setup
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();

app.Run();
