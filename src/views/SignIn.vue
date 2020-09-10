<template>
  <div class="sign-in">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="password" />
    <br />
    <div class="btn-login">
      <button @click="signin">Login</button>
    </div>
    <p>
      Não tem conta?
      <router-link to="signup">crie uma conta</router-link>
    </p>
    <hr />
    <p>
      Esqueceu a senha?
      <router-link to="forgot">resetar senha</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseErrors from "../util/firebaseErrors";

export default {
  data() {
    return {
      email: "brunorossini@live.com",
      password: "123Mudar",
    };
  },
  methods: {
    async signin() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/home");
      } catch (error) {
        throw firebaseErrors[error.code];
      }
    },
  },
};
</script>

<style></style>
