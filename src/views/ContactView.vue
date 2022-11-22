<template>
  <div>
    <h1>Contacto</h1>
    <div>
        <p v-if="sentForm">Formulario enviado correctamente</p>
        <input type="text" name="name" placeholder="Nombre" v-model="name" />
        <input type="email" name="email" placeholder="Email" v-model="email" />
        <textarea name="message" placeholder="Mensaje" v-model="message"></textarea>
        <base-button :disabled="buttonDisabled" @click="submitForm()">Enviar</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
    name: 'ContactView',
    components: { BaseButton },
    data() {
        return {
            sentForm: false
        };
    },
    computed: {
        name: {
          get() {
            return this.$store.state.contactModule.name;
          },
          set(value) {
            this.$store.commit('setName',value)
          }
        },
        email: {
          get() {
            return this.$store.state.contactModule.email;
          },
          set(value) {
            this.$store.commit('setEmail',value)
          }
        },
        message: {
          get() {
            return this.$store.state.contactModule.message;
          },
          set(value) {
            this.$store.commit('setMessage',value)
          }
        },
        buttonDisabled: function() {
          return this.name=='' || this.email=='' || this.message=='';
        }
    },
    methods: {
        submitForm(){
            this.sentForm = true;
        }
    }
    
}
</script>
