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
        public IActionResult GetById(int id)
        {
            var despesa = _expenseRepositorio.Find(id);
            if(despesa == null)
            return NotFound();

            return new ObjectResult(despesa);
            
        }

        [HttpPost]
        public IActionResult Create([FromBody ]Despesa despesa)
        {
            
            if(despesa == null)
            return BadRequest();

            _expenseRepositorio.Add(despesa);
            return CreatedAtRoute ("GetDespesa", new {id = despesa.idDespesa}, despesa);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Despesa despesa)
        {
           

            var desp = _expenseRepositorio.Find(id);

            if(desp == null)
            return NotFound();

            desp.dataCadastro = despesa.dataCadastro;
            desp.descricao = despesa.descricao;
            desp.idTipo = despesa.idTipo;
            desp.valor = despesa.valor;

            _expenseRepositorio.Update(desp);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
        var despesa = _expenseRepositorio.Find(id);

        if(despesa == null)
            return NotFound();
        
        _expenseRepositorio.Remove(id);
        return new NoContentResult();
        }
    }
}