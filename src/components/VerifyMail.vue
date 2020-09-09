<template>
  <div v-show="!loading">
    <div v-if="!error">E-mail verificado com sucesso!</div>
    <div v-else>Erro, link expirado ou inválido!</div>
    <router-link to="/signin">Voltar</router-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["code"],
  data() {
    return {
      loading: true,
      error: false,
    };
  },
  created: async function () {
    try {
      await firebase.auth().applyActionCode(this.code);
      this.loading = false;
    } catch (error) {
      this.error = true;
      this.loading = false;
    }

    const currentUser = await firebase.auth().currentUser;
    if (currentUser) currentUser.reload();
  },
};
</script>

<style>
</style>