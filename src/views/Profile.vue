<template>
  <div>
    <div v-if="uri">
      <img :src="uri" />
    </div>

    <input type="file" @change="chooseImage" />
    <button @click="upload">Upload Image</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      uri: "",
      file: "",
      user: ""
    };
  },
  methods: {
    chooseImage(e) {
      this.file = e.target.files[0];
    },
    async upload() {
      await firebase
        .storage()
        .ref(`users/${this.user.uid}/profile.jpg`)
        .put(this.file);

      this.loadURI();
    },
    async loadURI() {
      this.uri = await firebase
        .storage()
        .ref(`users/${this.user.uid}/profile.jpg`)
        .getDownloadURL();
    }
  },
  created: async function() {
    this.user = await firebase.auth().currentUser;

    this.loadURI();
  }
};
</script>

<style></style>
