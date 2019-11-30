<template>
  <div>
    <b-field v-for="(campo, indexCampo) in formularioCriar" :key="indexCampo" :label="campo.label">
      <b-input
        v-model="$store.state[stateVar][indexCampo]"
        :type="campo.type"
        :placeholder="campo.placeholder"
        :required="campo.required"
        v-if="campo.type.toLowerCase() != 'datepicker' && campo.type.toLowerCase() != 'select'"
      ></b-input>

      <b-select
        v-model="$store.state[stateVar][indexCampo]"
        :placeholder="campo.placeholder"
        v-if="campo.type.toLowerCase() == 'select'"
      >
        {{ console.log(campo) }}
        <option
          v-for="option in campo.options"
          :value="option.id"
          :key="option.id"
        >{{ option.name }}</option>
      </b-select>

      <datepicker
        calendar-class="setPositionCalendar"
        input-class="input"
        format="dd/MM/yyyy"
        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        v-if="campo.type.toLowerCase() == 'datepicker'"
        :placeholder="campo.placeholder"
        :value="$store.state[stateVar][indexCampo]"
        v-model="$store.state[stateVar][indexCampo]"
      ></datepicker>
    </b-field>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "GerarCampos",
  components: {
    Datepicker
  },
  data: function() {
    return {
      console: console
    };
  },
  props: {
    formularioCriar: {
      type: Array,
      required: true,
      default: []
    },
    stateVar: {
      type: String,
      required: true,
      default: "not"
    }
  },
  mounted() {
    console.log("teste");
  }
};
</script>

<style>
.setPositionCalendar {
  position: fixed !important;
}
</style>