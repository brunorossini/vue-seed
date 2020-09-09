import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyASavDE4bIBnqOHuZVe7sgay2v66ma4z7g",
  authDomain: "hobbies-41119.firebaseapp.com",
  databaseURL: "https://hobbies-41119.firebaseio.com",
  projectId: "hobbies-41119",
  storageBucket: "hobbies-41119.appspot.com",
  messagingSenderId: "446399255752",
  appId: "1:446399255752:web:f5b8fffd6644bab9bc01fd",
  measurementId: "G-W31SH88RNW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
