import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teste: 0,
  },
  actions: {
    SOMAR(context) {
      console.log(context);
      context.state.teste += 1;
    },
  },
  mutations: {
    SET_SOMAR(state) {
      state.teste += 1;
      console.log("to aqui mano");
    },
  },
});
