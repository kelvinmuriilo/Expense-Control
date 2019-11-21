const URLS_NAMES = {
    cadastroDespesa: 'cadastro-despesa',
    consultaDespesa: 'consulta-despesa'
}

const REGEX = {
    nome: "/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/",
    numero: "^[0-9]*",
    real: "^[\d,.?!]+$"
}

export {
    URLS_NAMES,
    REGEX
}