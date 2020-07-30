import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name:null,
      goods: {
        name:'免烫高支棉条纹衬衣',
        price: 299,
        color: null,
        size: null,
        number: null,
        money: null,
        sale:0.7,
      }
    }
  },
  getters: {},
  mutations: {
    setName(state,user){
      state.user.name=user;
    },
    setUser(state,user){
      state.user=user
    },
    setNumber(state,number){
      state.user.goods.number=number
    },
    setSize(state,size){
      state.user.goods.size=size
    },
    setColor(state,color){
      state.user.goods.color=color
    },
    setMoney(state){
      state.user.goods.money= (Number(state.user.goods.price)*Number(state.user.goods.number)
                              *Number(state.user.goods.sale)).toFixed(2)
    },
    deleteUser(state){
      state.user.name=null
    }
  },
  actions: {},
  modules: {}
});