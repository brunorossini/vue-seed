<template>
  <div class="review">
    Home Page
    {{ teste }}
    <button @click="somar">Somar</button>
    <button @click="logout">Sair</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    ...mapActions({
      // somar: "SOMAR",
    }),
    ...mapMutations({
      somar: "SET_SOMAR",
    }),
    async logout() {
      await firebase.auth().signOut();
      this.$router.push("/signin");
    },
  },
  computed: {
    teste() {
      return this.$store.state.teste;
    },
  },
  created: async function () {
    this.user = await firebase.auth().currentUser;
  },
};
</script>

<style>
</style>
