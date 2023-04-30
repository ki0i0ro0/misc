using System;
using System.Collections.Generic;

namespace BlazorAppTest.Models
{
    public partial class Product
    {
        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int Price { get; set; }
    }
}
