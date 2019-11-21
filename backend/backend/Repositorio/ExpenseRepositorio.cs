using System.Collections.Generic;
using backend.Model;
using System.Linq;


namespace backend.Repositorio
{
  public class ExpenseRepositorio : IExpenseRepositorio
  {
    private readonly ExpenseDbContext _contexto;
    public ExpenseRepositorio(ExpenseDbContext ctx)
    {
      _contexto = ctx;
    }

    public void Add(Despesa despesa)
    {
      _contexto.Despesas.Add(despesa);
      _contexto.SaveChanges();

    }

    public Despesa Find(int id)
    {
      return _contexto.Despesas.FirstOrDefault(des => des.idDespesa == id);
    }

    public IEnumerable<Despesa> GetAll()
    {
      return _contexto.Despesas.OrderBy(des => des.dataCadastro);

    }

    public IEnumerable<Tipo> GetTipos()
    {
      return _contexto.Tipos.ToList();
    }

    public void Remove(int id)
    {
      var despesa = _contexto.Despesas.Find(id);
      _contexto.Despesas.Remove(despesa);
      _contexto.SaveChanges();

    }

    public void Update(Despesa despesa)
    {
      _contexto.Despesas.Update(despesa);
      _contexto.SaveChanges();

    }
  }
}