using System.ComponentModel.DataAnnotations.Schema;

namespace BlazorAppTest.Shared
{
    public class Product
    {
        [Column(TypeName = "nvarchar(10)")]
        public string Id { get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string Name { get; set; }
        [Column(TypeName = "int")]
        public int Price { get; set; }
    }
}
