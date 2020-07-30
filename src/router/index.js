import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from '../views/Detail.vue'
import Login from '../components/login.vue'
import Car from '../views/Car.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:'/detail',
    name:'Detail',
    component:Detail
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/car',
    name:'Car',
    component:Car
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
