using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("products")]
public class Product
{
  // by convention will be used by EntityFramework as a PK 
  // because it's called 'Id'
  public Guid Id { get; set; }
  public required string Name { get; set; }
  public required string Description { get; set; }
  // use long, not decimal - due to Stripe API specifics
  // hence have to divide by 100 to display correctly
  public long Price { get; set; }
  public required string PictureUrl { get; set; }
  public required string Type { get; set; }
  public required string Brand { get; set; }
  public int QuantityInStock { get; set; }
}
