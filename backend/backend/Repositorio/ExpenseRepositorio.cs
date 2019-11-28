using System.Collections.Generic;
using backend.Model;
using System.Linq;
using System;
using X.PagedList;


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

    public Paginacao GetAll(int pagina)
    {
      var paginacao = new Paginacao();

      paginacao.lista = _contexto.Despesas
        .OrderByDescending(d => d.dataCadastro)
        .ThenByDescending(d => d.idDespesa)
        .ToPagedList(pagina, 5);

      var lista = _contexto.Despesas.ToList();
      paginacao.tamanho = lista.Count();

      return paginacao;
    }

    public IEnumerable<Despesa> GetDespesasTipo(int idTipo)
    {
      return _contexto.Despesas
        .Where(d => d.idTipo == idTipo)
        .OrderByDescending(d => d.dataCadastro)
        .ToList();
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