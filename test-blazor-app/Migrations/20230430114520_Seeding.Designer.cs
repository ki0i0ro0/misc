﻿// <auto-generated />
using BlazorAppTest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BlazorAppTest.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230430114520_Seeding")]
    partial class Seeding
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BlazorAppTest.Shared.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = "0000000001",
                            Name = "Book",
                            Price = 1000
                        },
                        new
                        {
                            Id = "0000000002",
                            Name = "Pen",
                            Price = 500
                        },
                        new
                        {
                            Id = "0000000003",
                            Name = "Laptop",
                            Price = 30000
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
