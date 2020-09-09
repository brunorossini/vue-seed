<template>
  <div class="sign-up">
    <h1>Alterar Senha</h1>
    {{email}}
    <br />
    <input type="password" placeholder="Senha" v-model="password" />
    <br />
    <div class="btn-login">
      <button @click="resetPassword">Alterar Senha</button>
    </div>
    <p>
      Já tem conta?
      <router-link to="signin">retorne ao login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["code"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created: async function () {
    this.email = await firebase.auth().verifyPasswordResetCode(this.code);
  },
  methods: {
    async resetPassword() {
      await firebase.auth().confirmPasswordReset(this.code, this.password);

      alert("Senha alterada com sucesso.");
      this.$router.push("/signin");
    },
  },
};
</script>

<style>
</style>