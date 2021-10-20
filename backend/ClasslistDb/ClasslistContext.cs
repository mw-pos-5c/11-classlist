using System;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ClasslistDb
{
    public partial class ClasslistContext : DbContext
    {
        public ClasslistContext()
        {
        }

        public ClasslistContext(DbContextOptions<ClasslistContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Clazz> Clazzs { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clazz>(entity => { entity.Property(e => e.Id).ValueGeneratedOnAdd(); });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.ClazzId).HasColumnName("Clazz_Id");
            });
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
