<!--  -->
<template>
     <div id="main">
         <div id="first">
             <img src="../assets/logo.gif" alt="LOGO"/>
             <input placeholder="请输入搜索商品" name="seacher"/>
         </div>
         <slot>
             <div id="slot">
                 <img src="../assets/face/face1.png" alt="头像"/>
                 <div>
                     <p v-if="user.name">{{user.name}}</p>
                     <router-link v-else to='login' class="router-link">登陆</router-link>
                 </div>
                 <div v-if="user.name" @click="outSign">注销</div>
                 <div><router-link to="car">购物车</router-link></div>
             </div>
         </slot>
         <div id="menu">
             <ul>
                 <li v-for="item in this.items" :key="item">{{item}}</li>
             </ul>
         </div>
     </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
        components: {},
        props:['items'],
        data() {
            return {};
          },
        computed: {
          ...mapState(['user']),
        },
        methods: {
            ...mapMutations(['deleteUser']),
            outSign(){
               this.deleteUser()
            }
        },
        mounted() {}
};
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
#main{
   display: flex;
   flex-wrap: wrap;
   width: 990px;
}
input{
    width: 250px;
    height: 30px;
    border: none;
    margin: 0 50px;
    position: relative;
    bottom:20px;
}
#menu{
    width: 990px;

    ul{
        padding-top: 10px;
        margin-left: -15px;
    }
    ul li{
          display: inline;
          margin-left: 30px;
          padding-bottom:0px;
    }
}
#slot{
    width: 400px;
    margin-left: 60px;
    height:70px;
    img,div, .router-link{
      display: inline-block;
      margin:10px 0 20px 30px;
    }
    img{
        vertical-align: middle;
    }
}
</style>