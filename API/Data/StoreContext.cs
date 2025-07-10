using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

// options contain conncetion string
public class StoreContext(DbContextOptions options) : DbContext(options)
{
  public required DbSet<Product> Products { get; set; }
}
