import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    count:25
  },
  mutations: {},
  actions: {},
  getters: {
      getCount: state => state.count
  }
});