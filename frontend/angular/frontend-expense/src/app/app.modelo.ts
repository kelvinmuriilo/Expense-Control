interface Despesa{
    idDespesa: number;
    dataCadastro: Date;
    descricao: string;
    valor: number;
    idTipo: number;
}

interface Tipo{
    idTipo: number;
    descricao: string;
}

export {
    Despesa,
    Tipo
}