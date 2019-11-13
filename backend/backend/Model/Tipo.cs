using System.ComponentModel.DataAnnotations;

namespace backend.Model
{
    public class Tipo
    {
        [Key]
        public int idTipo { get; set; }
        public string descricao { get; set; }
    }
}