<!--  -->
<template>
  <div id="content">
    <div id="left-content">
      <div id="big-img">
        <div v-show="this.color==='蓝色'">
          <img v-show="this.num===0" src="../assets/pro_img/blue_one_small.jpg" />
          <img v-show="this.num===1" src="../assets/pro_img/blue_two_small.jpg" />
          <img v-show="this.num===2" src="../assets/pro_img/blue_three_small.jpg" />
        </div>
        <div v-show="this.color==='黄色'">
          <img v-show="this.num===0" src="../assets/pro_img/yellow_one_small.jpg" />
          <img v-show="this.num===1" src="../assets/pro_img/yellow_two_small.jpg" />
          <img v-show="this.num===2" src="../assets/pro_img/yellow_three_small.jpg" />
        </div>
        <div v-show="this.color==='绿色'">
          <img v-show="this.num===0" src="../assets/pro_img/green_one_small.jpg" />
          <img v-show="this.num===1" src="../assets/pro_img/green_two_small.jpg" />
          <img v-show="this.num===2" src="../assets/pro_img/blue_three_small.jpg" />
        </div>
      </div>
      <div>
        <div id="watch">
          <img src="../assets/look.gif" />
        </div>
      </div>
      <div id="select-img">
        <template>
          <div v-show="this.color==='蓝色'" @click="switchs">
            <img src="../assets/pro_img/blue_one.jpg" title="点击大图显示" alt="0" />
            <img src="../assets/pro_img/blue_two.jpg" title="点击大图显示" alt="1" />
            <img src="../assets/pro_img/blue_three.jpg" title="点击大图显示" alt="2" />
          </div>
        </template>
      <template>
          <div v-show="this.color==='黄色'"  @click="switchs">
            <img src="../assets/pro_img/yellow_one.jpg" title="点击大图显示" alt="0" />
            <img src="../assets/pro_img/yellow_two.jpg" title="点击大图显示" alt="1" />
            <img src="../assets/pro_img/yellow_three.jpg" title="点击大图显示" alt="2" />
          </div>
        </template>
        <template>
          <div v-show="this.color==='绿色'"  @click="switchs">
            <img src="../assets/pro_img/green_one.jpg" title="点击大图显示" alt="0" />
            <img src="../assets/pro_img/green_two.jpg" title="点击大图显示" alt="1" />
            <img src="../assets/pro_img/green_one.jpg" title="点击大图显示" alt="2" />
          </div>
        </template>
      </div>
      <div id="select-card" @click="switchs">
        <button  name="0">产品属性</button>
        <button  name="1">产品尺码表</button>
        <button  name="2">产品介绍</button>
        <p v-show="this.card===0" >
          沿用风靡百年的经典全棉牛津纺面料，通过领先的液氨整理技术，
          使面料的抗皱性能更上一层。延续简约、 舒适、健康设计理念，
          特推出免烫、易打理的精细免烫牛津纺长袖衬衫系列。
        </p>
        <p v-show="this.card===1" >产品尺码表</p>
        <p v-show="this.card===2" >产品介绍</p>
      </div>
    </div>
    <div id="right-content"> 
      <h2>免烫高支棉条纹衬衣</h2>
      <p>
        全新精品高支棉衬衫再次提升品质，精选100%新疆长绒棉织造而成，
        平整度好，短绒少； 80-100高支双股经纬交织，带来无与伦比的舒适享受；
        而且面料反光效果好，具有漂亮的光泽， 质感上佳，有利于免烫效果的维持！
      </p>
      <p>价 格：<span><strong><s></s></strong></span>元</p>
      <p>促 销：<span></span>元</p>
      <p>颜 色：<span>{{color}}</span></p>
      <div id="select-color">
        <img @click="alert()" src="../assets/pro_img/blue.jpg" alt="蓝色" />
        <img @click="alert()" src="../assets/pro_img/yellow.jpg" alt="黄色" />
        <img @click="alert()" src="../assets/pro_img/green.jpg" alt="绿色" />
      </div>
      <p>尺 寸：<span></span></p>
      <div id="select-size">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
      </div>
      <p>
        数 量：<span><input type="number" placeholder="请输入购买数量" /></span>
      </p>
      <p>总 计：<span></span>元</p>
      <p>给商品评分</p>
      <div id="select-sore">这是未编辑的打分页面</div>
      <img src="../assets/btn_cart.png" id="shop-car" />
    </div>
  </div>
</template>
<script>
export default {
        components: {},
        data() {
            return {
              num:0,//大图的切换数据
              color:'蓝色', //大图之间颜色的切换
              card:0, //切换产品表格的
            };
          },
        computed: {},
        methods: {
          alert(e){   
            e=event.target;
            this.color=e.alt;
            this.num=0;
          },
          switchs(e){
            e=e.target;
            if(e.tagName.toLocaleLowerCase()==='img'){
              this.num=parseInt(e.alt)
            }
            if(e.tagName.toLocaleLowerCase()==="button"){
              this.card=parseInt(e.name)
            }
          }
        },
        mounted() {}
};
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #content {
    display: flex;
    width: 790px;
  }

  #left-content {
    width: 312px;
    margin-left: 5px;
  }

  #big-img {
    width: 310px;
    height: 314px;
    border: 1px solid gray;
  }

  #big-img>img {
    margin-top: 17px;
    width: 250px;
    height: 280px;
  }

  #watch>img {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 10px auto;
    margin-left: 100px;
  }

  #select-img img {
    margin-right: 10px;
  }

  #select-card button {
    margin: 10px 2px;
    border: 1px solid gray;
    width: 80px;
    height: 30px;
  }

  #select-card p {
    width: 312px;
    height: 55px;
    overflow: scroll;
    background-color: crimson;
  }

  /********************************
********************************/
  #right-content {
    width: 468px;
    margin-left: 5px;
  }

  #right-content h2 {
    text-align: left;
  }

  #right-content p {
    text-align: left;
    margin: 10px 0;
  }

  #select-color {
    margin-left: 1px;
  }

  #select-color img {
    margin-left: 15px;
    width: 30px;
    height: 30px;
  }

  .border {
    border: 1px red solid;
  }

  #select-size {
      margin-left: 1px;
  }

  #select-size button {
    margin-left: 15px;
    width: 30px;
    height: 30px;
    border: 1px solid gray;
  }

  span>input {
    border: 1px solid gray;
    width: 120px;
    height: 25px;
  }

  #select-sore {
    background-color: green; //打分设置页面，未想好
    height: 70px;
  }

  #shop-car {
    margin-left: 10px;
    margin-top: 20px;
  }

  span {
    font-weight: bold;
  }

  .none {
    display: none;
  }
</style>