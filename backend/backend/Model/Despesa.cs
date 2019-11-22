using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Model
{
  public class Despesa
  {
    [Key]
    public int idDespesa { get; set; }
    public DateTime dataCadastro { get; set; }
    public string descricao { get; set; }
    public decimal valor { get; set; }
    public int idTipo { get; set; }

  }
}