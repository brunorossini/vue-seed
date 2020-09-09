<template>
  <div class="sign-up">
    <h1>Registrar</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="password" />
    <br />
    <div class="btn-login">
      <button @click="signup">Registrar</button>
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
  data() {
    return {
      email: "brunorossini@live.com",
      password: "123Mudar",
    };
  },
  methods: {
    async signup() {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);

      await user.sendEmailVerification();

      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
