

//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.FileProviders;
//using sol.API.Entities;

//var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.
//builder.Services.AddControllers();

//// Register OhStudioContext for Dependency Injection
//builder.Services.AddDbContext<OhStudioContext>(options =>
//    options.UseSqlServer(builder.Configuration.GetConnectionString("Server=MOTAYAM;Database=oh-studio;User Id=sa;Password=mot.1692003;Trusted_Connection=False;Encrypt=True;TrustServerCertificate=True")));

//// Swagger setup
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//// CORS setup
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll", builder =>
//    {
//        builder.AllowAnyOrigin()
//               .AllowAnyMethod()
//               .AllowAnyHeader();
//    });

//    app.UseStaticFiles(new StaticFileOptions
//    {
//        FileProvider = new PhysicalFileProvider(
//        Path.Combine(@"D:\solution\solution-project\solution\sol.API\images")),
//        RequestPath = "/images"
//    });

//});

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseStaticFiles(); // <-- this serves files from wwwroot

//// Apply CORS middleware
//app.UseCors("AllowAll");

//app.UseAuthorization();
//app.MapControllers();

//app.Run();

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using sol.API.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Register OhStudioContext for Dependency Injection
builder.Services.AddDbContext<OhStudioContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Server=MOTAYAM;Database=oh-studio;User Id=sa;Password=mot.1692003;Trusted_Connection=False;Encrypt=True;TrustServerCertificate=True")));

// Swagger setup
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS setup
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Custom Static File Setup for External Folder
builder.Services.AddSingleton<IFileProvider>(
    new PhysicalFileProvider(Path.Combine(@"D:\solution\solution-project\solution\sol.API\images"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Static files setup (this serves files from wwwroot)
app.UseStaticFiles();

// Custom Static file middleware for serving files from the external directory
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = app.Services.GetRequiredService<IFileProvider>(),  // Use the FileProvider registered above
    RequestPath = "/images"
});

// Apply CORS middleware
app.UseCors("AllowAll");

app.UseAuthorization();
app.MapControllers();

app.Run();
