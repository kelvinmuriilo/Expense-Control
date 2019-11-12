namespace Expense_Control.Model
{
    public class DespesaDbContext : DbContext
    {
      public ExpenseControlDbContext(DbContextOptions<ExpenseControlDbContext> options)
      : base(options)   
      { }

      public DbSet<Despesa> Despesas {get; set;}
      public DbSet<Tipo> Tipos {get; set;}
    }
}