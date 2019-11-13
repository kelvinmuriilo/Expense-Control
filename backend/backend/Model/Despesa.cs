using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Model
{
    public class Despesa
    {
        [Key]
        public long idDespesa { get; set; }
        public string dataCadastro { get; set; }
        public string descricao { get; set; }
        public int idTipo {get; set;}

    }
}