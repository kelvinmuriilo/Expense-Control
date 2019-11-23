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


    [HttpGet("{paginaAtual}")]
    public Paginacao GetAll(int paginaAtual)
    {
      return _expenseRepositorio.GetAll(paginaAtual);
    }

    [HttpGet("GetById/{id}", Name = "GetDespesa")]
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
        return "Erro ao cadastrar despesa!";

      _expenseRepositorio.Add(despesa);
      return "Despesa cadastrada com sucesso!";
    }

    [HttpPut("{id}")]
    public string Update(int id, [FromBody] Despesa despesa)
    {
      var desp = _expenseRepositorio.Find(id);

      if (desp == null)
        return "Erro ao atualizar despesa!";

      desp.dataCadastro = despesa.dataCadastro;
      desp.descricao = despesa.descricao;
      desp.idTipo = despesa.idTipo;
      desp.valor = despesa.valor;

      _expenseRepositorio.Update(desp);
      return "Despesa atualizada com sucesso!";
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
      var despesa = _expenseRepositorio.Find(id);

      if (despesa == null)
        return "Erro ao excluir despesa!";

      _expenseRepositorio.Remove(id);
      return "Despesa excluída com sucesso!";
    }
  }
}