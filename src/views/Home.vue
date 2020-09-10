<template>
  <div class="review">
    Home Page
    {{ teste }}
    {{ user.photoURL }}
    <button @click="somar">Somar</button>
    <button @click="logout">Sair</button>
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    ...mapActions({
      // somar: "SOMAR",
    }),
    ...mapMutations({
      somar: "SET_SOMAR"
    }),
    async logout() {
      await firebase.auth().signOut();
      this.$router.push("/signin");
    },
    chooseFile(event) {
      console.log(event);
    }
  },
  computed: {
    teste() {
      return this.$store.state.teste;
    }
  },
  created: async function() {
    this.user = await firebase.auth().currentUser;
  }
};
</script>

<style></style>
