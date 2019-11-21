<template>
    <div>
        <b-field 
        v-for="(campo, indexCampo) in formularioCriar" 
        :key="indexCampo"
        :label="campo.label">
            <b-input
                v-model="$store.state[stateVar][indexCampo]"
                :type="campo.type"
                :placeholder="campo.placeholder"
                :required="campo.required"
                v-if="campo.type.toLowerCase() != 'datepicker'"
            >
            </b-input>
            <datepicker 
            calendar-class="setPositionCalendar"
            input-class="input"
            format="dd/MM/yyyy"
            v-if="campo.type.toLowerCase() == 'datepicker'" 
            :placeholder="campo.placeholder"
            :value="$store.state[stateVar][indexCampo]"
            v-model="$store.state[stateVar][indexCampo]"></datepicker>
            
        </b-field>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';

export default {
    name: 'GerarCampos',
    components: {
        Datepicker
    },
    data: function() {
        return {
            console: console
        }
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
            default: 'not'
        }
    },
}
</script>

<style>
.setPositionCalendar {
    position: fixed !important;
}
</style>