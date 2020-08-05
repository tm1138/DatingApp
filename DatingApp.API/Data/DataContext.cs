using System.Diagnostics.CodeAnalysis;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext([NotNullAttribute] DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
    }
}