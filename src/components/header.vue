<!--  -->
<template>
     <div id="main">
         <div id="">
             <img src="../assets/logo.gif" alt="LOGO"/>
             <input placeholder="请输入搜索商品" name="seacher"/>
         </div>
         <slot name="login">hdposa;pjfafs</slot>
         <div id="menu">
             <ul>
                 <li v-for="item in this.items" :key="item">{{item}}</li>
             </ul>
         </div>
     </div>
</template>
<script>
export default {
        components: {},
        props:['items'],
        data() {
            return {

            };
          },
        computed: {},
        methods: {},
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
</style>