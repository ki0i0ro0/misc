using BlazorAppTest.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace BlazorAppTest.Services
{
    public interface IProductService
    {
        Task<List<Product>> GetAllProducts();
    }
    public class ProductService : IProductService
    {

        private DataContext _context;

        public ProductService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetAllProducts()
        {
            return await _context.Products.ToListAsync();
        }
    }
}
