<template>
  <div>
    Você precisa confirmar seu e-mail.
    Para isso acesso o link que foi enviado para {{user.email}}.
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: "",
    };
  },
  created: function () {
    this.user = firebase.auth().currentUser;
  },
};
</script>

<style>
</style>