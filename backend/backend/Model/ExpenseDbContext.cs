using Microsoft.EntityFrameworkCore;


namespace backend.Model
{
  public class ExpenseDbContext : DbContext
  {
    public ExpenseDbContext(DbContextOptions<ExpenseDbContext> options)
    : base(options)
    { }

    public DbSet<Despesa> Despesas { get; set; }
    public DbSet<Tipo> Tipos { get; set; }

  }
}