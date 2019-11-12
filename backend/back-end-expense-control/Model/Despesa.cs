namespace Expense_Control.Model
{
    public class Despesa
    {
        public long id { get; set; }
        public DateTime data { get; set; }
        public string descricao { get; set; }
        public ICollection<Tipo> tipos {get; set;}

    }
}