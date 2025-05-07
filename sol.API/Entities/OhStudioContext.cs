using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace sol.API.Entities;

public partial class OhStudioContext : DbContext
{
    public OhStudioContext()
    {
    }

    public OhStudioContext(DbContextOptions<OhStudioContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Card> Cards { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=MOTAYAM;Database=oh-studio;User Id=sa;Password=mot.1692003;Trusted_Connection=False;Encrypt=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Card>(entity =>
        {
            entity.ToTable("card");

            entity.Property(e => e.Description)
                .HasMaxLength(50)
                .HasColumnName("description");
            entity.Property(e => e.Titel)
                .HasMaxLength(50)
                .HasColumnName("titel");
            entity.Property(e => e.UrlImage)
                .HasMaxLength(50)
                .HasColumnName("urlImage");
            entity.Property(e => e.UrlLogo)
                .HasMaxLength(50)
                .HasColumnName("urlLogo");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
