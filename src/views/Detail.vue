<!--  -->
<template>
<div id="detail">
  <div id="header">
      <Header/>
  </div> <!--头部导航-->
  <div id="menu">
      <Menu/>
  </div>   <!--右侧菜单栏-->
  <div id="conter">
      <Body/>
  </div> <!--右侧商品详细栏-->
</div>
</template>
<script>
import Header from '../components/header'
import Menu from '../components/menu'
import Body from '../components/detail-body'
export default {
        components: {
           Header,
           Menu,
           Body
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
#detail{
        width: 990px;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
  background: palegreen;
}
</style>