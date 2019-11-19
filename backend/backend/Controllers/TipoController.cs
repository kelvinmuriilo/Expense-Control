using Microsoft.AspNetCore.Mvc;
using backend.Repositorio;
using System.Collections.Generic;
using backend.Model;

namespace backend.Controllers
{
    [Route("api/[Controller]")]
    public class TipoController : Controller
    {
        private readonly IExpenseRepositorio _expenseRepositorio;
        public TipoController(IExpenseRepositorio _expenseRepo)
        {
            _expenseRepositorio = _expenseRepo;
        }

        [HttpGet]
        public IEnumerable<Tipo> GetTipos()
        {
            return _expenseRepositorio.GetTipos();
        }
    }
}