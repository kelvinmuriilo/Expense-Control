using backend.Model;
using System.Collections.Generic;


namespace backend.Model
{
  public class Paginacao
  {
    public int tamanho { get; set; }
    public IEnumerable<Despesa> lista { get; set; }
  }
}