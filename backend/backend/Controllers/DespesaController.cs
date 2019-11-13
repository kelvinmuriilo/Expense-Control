using Microsoft.AspNetCore.Mvc;
using backend.Repositorio;
using System.Collections.Generic;
using backend.Model;

namespace backend.Controllers
{
    [Route("api/[Controller]")]
    public class DespesaController : Controller
    {
        private readonly IExpenseRepositorio _expenseRepositorio;
        public DespesaController(IExpenseRepositorio _expenseRepo)
        {
            _expenseRepositorio = _expenseRepo;
        }

        [HttpGet]
        public IEnumerable<Despesa> GetAll()
        {
            return _expenseRepositorio.GetAll();
        }

        [HttpGet("{id}", Name="GetDespesa")]
        public IActionResult GetById(long id)
        {
            var despesa = _expenseRepositorio.Find(id);
            if(despesa == null)
            return NotFound();

            return new ObjectResult(despesa);
            
        }


    }
}