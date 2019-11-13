using System.Collections.Generic;
using backend.Model;
using System.Linq;

namespace backend.Repositorio
{
    public class ExpenseRepositorio : IExpenseRepositorio
    {
        private readonly ExpenseDbContext _contexto;
        public List<Despesa> desp;
        public ExpenseRepositorio(ExpenseDbContext ctx)
        {
            _contexto = ctx;
        }

        public void Add(Despesa despesa)
        {
            _contexto.Despesas.Add(despesa);
        }

        public Despesa Find(long id)
        {
            return _contexto.Despesas.FirstOrDefault(des => des.idDespesa == id);
        }

        public IEnumerable<Despesa> GetAll()
        {   
            desp = _contexto.Despesas.ToList();
            return desp;
        }
        public void Remove(long id)
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