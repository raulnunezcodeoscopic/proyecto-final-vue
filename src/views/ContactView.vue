<template>
  <div>
    <h1>Contacto</h1>
    <br />
    <section class="w-100 p-4 d-flex justify-content-center pb-4">
      <div class="custom-width">
          <p v-if="sentForm">Formulario enviado correctamente</p>
          <div class="form-outline mb-4">
            <input type="text" name="name" v-model="name" class="form-control" placeholder="Nombre" />
          </div>
          <div class="form-outline mb-4">
            <input type="email" name="email" v-model="email" class="form-control" placeholder="Email" />
          </div>
          <div class="form-outline mb-4">
            <textarea name="message" placeholder="Mensaje" class="form-control" v-model="message"></textarea>
          </div>
          <base-button :disabled="buttonDisabled" @click="submitForm()">Enviar</base-button>
      </div>
    </section>
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
<style scoped>
    
    .custom-width {
        width: 26rem;
    }

</style>