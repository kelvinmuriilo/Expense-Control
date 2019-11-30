<template>
  <div>
    <Crud
      :configs="crudConfig"
      :opcoes="opcoes"
      baseUrl="/Despesa"
      urlListar
      urlAdicionar="/Despesa"
      urlAtualizar="/Despesa/{id}"
      urlDeletar="/Despesa/{id}"
    />
  </div>
</template>

<script>
import Crud from "../components/Crud";
import moment from "moment";

export default {
  name: "Home",
  components: {
    Crud
  },
  data: function() {
    return {
      crudConfig: {
        idDespesa: {
          label: "ID Despesa",
          pesquisa: {
            ativo: false
          },
          ordenar: false
        },
        dataCadastro: {
          label: "Data Cadastro",
          //tipoCampo: "datepicker",
          pesquisa: {
            ativo: false
          },
          ordenar: false,
          funcaoExecField(valor) {
            return moment(valor).format("DD/MM/YYYY");
          },
          funcaoExec(valor) {
            return moment(valor).format("DD/MM/YYYY");
          }
        },
        descricao: {
          label: "Descrição",
          pesquisa: {
            ativo: false
          },
          ordenar: false
        },
        valor: {
          label: "Valor",
          pesquisa: {
            ativo: false
          },
          ordenar: false
        },
        idTipo: {
          label: "Tipo",
          tipoCampo: "select",
          options: [
            { id: 1, name: "Alimentação" },
            { id: 2, name: "Lazer" },
            { id: 3, name: "Transporte" },
            { id: 4, name: "Saúde" },
            { id: 5, name: "Educação" },
            { id: 6, name: "Outros" }
          ],
          pesquisa: {
            ativo: false
          },
          ordenar: false,
          funcaoExec(valor) {
            let tipos = {
              1: "Alimentação",
              2: "Lazer",
              3: "Transporte",
              4: "Saúde",
              5: "Educação",
              6: "Outros"
            };

            return tipos[valor];
          }
        }
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
        chavePrimaria: "idDespesa"
        //semPesquisa: true
      }
    };
  },
  mounted() {}
};
</script>
