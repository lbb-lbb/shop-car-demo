import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name:null,
      carGoods: {
        price: null,
        color: null,
        size: null,
        number: null,
        money: null,
        grade: null
      },
      goods: null
    }
  },
  getters: {
    user
  },
  mutations: {},
  actions: {},
  modules: {}
});