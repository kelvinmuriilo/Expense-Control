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

interface AtualizarDespesa {
    idDespesa: number;
    dataCadastro: Date;
    descricao: string;
    valor: number;
    idTipo: number;
}

interface Paginacao {
    tamanho: number;
    lista: Array<any>
}

export {
    Despesa,
    Tipo,
    CadastrarDespesa,
    AtualizarDespesa,
    Paginacao
}