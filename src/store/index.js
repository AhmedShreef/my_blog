import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://flattern.test/api/"
  },
  getters: {
    getApiUrl(state) {
      return state.apiUrl;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
