using Microsoft.EntityFrameworkCore;

namespace BlazorAppTest.Shared
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = "0000000001", Name = "Book", Price = 1000 },
                new Product { Id = "0000000002", Name = "Pen", Price = 500 },
                new Product { Id = "0000000003", Name = "Laptop", Price = 30000 }
            );
        }
    }
}