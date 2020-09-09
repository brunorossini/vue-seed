<template>
  <div class="sign-in">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <div class="btn-login">
      <button @click="requestLink">Resetar</button>
    </div>
    <p>
      Lembrou a senha?
      <router-link to="signin">fazer login</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async requestLink() {
      await firebase.auth().sendPasswordResetEmail(this.email);

      alert("Um e-mail para reset de senha foi enviado.");
      this.$router.push("/signin");
    },
  },
};
</script>

<style>
</style>