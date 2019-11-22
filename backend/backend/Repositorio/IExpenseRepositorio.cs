using backend.Model;
using System.Linq;
using System.Collections.Generic;

namespace backend.Repositorio
{
  public interface IExpenseRepositorio
  {
    void Add(Despesa despesa);
    Paginacao GetAll(int pagina);
    IEnumerable<Tipo> GetTipos();
    Despesa Find(int id);
    void Remove(int id);
    void Update(Despesa despesa);
  }
}