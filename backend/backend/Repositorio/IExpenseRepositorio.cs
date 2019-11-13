using backend.Model;
using System.Linq;
using System.Collections.Generic;

namespace backend.Repositorio
{
    public interface IExpenseRepositorio
    {
         void Add(Despesa despesa);
         IEnumerable<Despesa> GetAll();
         Despesa Find(long id);
         void Remove(long id);
         void Update(Despesa despesa); 
    }
}