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


    [HttpGet("grupo/{idTipo}", Name = "GetDespesasTipo")]
    public IEnumerable<Despesa> GetDespesasTipo(int idTipo)
    {
      return _expenseRepositorio.GetDespesasTipo(idTipo);
    }

    [HttpGet("{id}", Name = "GetDespesa")]
    public IActionResult GetById(int id)
    {
      var despesa = _expenseRepositorio.Find(id);
      if (despesa == null)
        return NotFound();

      return new ObjectResult(despesa);

    }

    [HttpPost]
    public string Create([FromBody]Despesa despesa)
    {

      if (despesa == null)
        throw new System.Exception("Nulo");

      _expenseRepositorio.Add(despesa);
      return "Cadastrado com sucesso!";
    }

    [HttpPut("{id}")]
    public string Update(int id, [FromBody] Despesa despesa)
    {
      var desp = _expenseRepositorio.Find(id);

      if (desp == null)
        throw new System.Exception("Nulo");

      desp.dataCadastro = despesa.dataCadastro;
      desp.descricao = despesa.descricao;
      desp.idTipo = despesa.idTipo;
      desp.valor = despesa.valor;

      _expenseRepositorio.Update(desp);
      return "Atualizado com sucesso!";
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
      var despesa = _expenseRepositorio.Find(id);

      if (despesa == null)
        throw new System.Exception("Nulo");

      _expenseRepositorio.Remove(id);
      return "Excluído com sucesso!";
    }
  }
}