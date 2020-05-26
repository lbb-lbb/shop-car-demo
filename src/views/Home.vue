<!--  -->
<template>
<div id="main">
  <div id="header">
      <Header :items="this.add"/>
  </div> <!--头部导航-->
  <div id="menu">
        <Menu/>
  </div>   <!--右侧菜单栏-->
  <div id="conter">
       <Conter/>
  </div> <!--右侧主体栏-->
</div>
</template>
<script>
import Header from '../components/header'
import Menu from '../components/menu'
import Conter from '../components/conter'
export default {
    components: {
      Header,
      Menu,
      Conter,
    },
    data() {
      return {
        add:['首页','男鞋','女鞋','品牌','鞋包配饰'] //设置导航页的数据
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
   margin: auto;
}
#header{
  width: 990px;
  height: 105px;
  background: red;
}
#menu{
  width: 187px;
  height: 560px;
  background: green;
  margin-top: 13px;
}
#conter{
  width: 790px;
  height: 560px;
  margin-left: 13px;
  margin-top: 13px;
}
</style>