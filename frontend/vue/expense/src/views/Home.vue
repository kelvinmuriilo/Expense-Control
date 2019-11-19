<template>
  <div>
    <Crud
      :configs="crudConfig"
      :opcoes="opcoes"
      baseUrl="/Despesa"
      urlListar=""
	  urlAdicionar="/Despesa/Create"
    />
  </div>
</template>

<script>

import Crud from '../components/Crud'
import moment from 'moment'

export default {
  name: 'Home',
  components: {
    Crud
  },
  data: function() {
    return {
      crudConfig: {
        idDespesa: {
          label: 'ID Despesa',
          pesquisa: {
            ativo: false,
          },
          ordenar: false
        },
        dataCadastro: {
          label: 'Data Cadastro',
          pesquisa: {
            ativo: false,
          },
          ordenar: false,
          funcaoExec(valor) {
        	return moment(valor).format("DD/MM/YYYY")
          }
        },
        descricao: {
          label: 'Descrição',
          pesquisa: {
            ativo: false,
          },
          ordenar: false
        },
        valor: {
          label: 'Valor',
          pesquisa: {
            ativo: false,
          },
          ordenar: false
        },
        idTipo: {
          label: 'Tipo',
          pesquisa: {
            ativo: false,
          },
          ordenar: false
        },
        /*nome: {
          label: 'Nome',
          pesquisa: {
            tipoComparador: 'like'
          }
        },
        email: {
          label: 'E-mail',
          tipoCampo: 'email',
          pesquisa: {
            tipoComparador: 'like'
          }
        },
        senha: {
          label: 'Senha',
          tipoCampo: 'password'
        }*/
      },
      opcoes: {
        edicaoInline: true,
        //rotaParaEditar: '/teste/testar',
        chavePrimaria: 'idDespesa',
        semPesquisa: true
      }
    }
  },
  mounted() {
    
  },
}
</script>
