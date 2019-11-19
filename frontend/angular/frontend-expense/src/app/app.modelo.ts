interface Despesa {
    idDespesa: number;
    dataCadastro: Date;
    descricao: string;
    valor: number;
    idTipo: number;
}

interface Tipo {
    idTipo: number;
    descricao: string;
}

interface CadastrarDespesa {
    dataCadastro: Date;
    descricao: string;
    valor: number;
    idTipo: number;
}

export {
    Despesa,
    Tipo,
    CadastrarDespesa
}