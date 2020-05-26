<!--  -->
<template>
<div id="main">
    <div id="switch-img">
        <img src="../assets/ads/1.jpg" alt="轮播图片">
        <img src="../assets/ads/2.jpg" alt="轮播图片">
        <img src="../assets/ads/3.jpg" alt="轮播图片">
        <img src="../assets/ads/4.jpg" alt="轮播图片">
        <img src="../assets/ads/5.jpg" alt="轮播图片">
        <ul>
            <li v-for="item in this.items" :key="item">{{item}}</li>
        </ul>
    </div>
    <div id="right">
        <div id="top-ads">
            <img src="../assets/upload/20120216.jpg">
        </div>
        <div id="foot-ads">
            <h3>最新动态</h3>
            <ul>
                <li v-for="item in this.list" :key="item">[活动] {{item}}</li>
            </ul>
        </div>
    </div>
    <div id="foot">
         <div id="list">
              <p>品牌活动</p>
            <ul>
                <li>运动</li>
                <li>男鞋</li>
                <li>女鞋</li>
                <li>童鞋</li>
            </ul>    
        </div>
        <div id="card">
             <ul>
                <li><img src="../assets/upload/20120217.jpg" alt="耐克"><p>耐克</p></li>
                <li><img src="../assets/upload/20120218.jpg" alt="耐克"><p>阿迪达斯</p></li>
                <li><img src="../assets/upload/20120219.png" alt="耐克"><p>安踏</p></li>
                <li><img src="../assets/upload/20120220.png" alt="耐克"><p>李宁 </p></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
        components: {},
        data() {
            return {
                  items:['相约情人节全场119元起','新款上线全场357元起','愤怒的小鸟全场89元',
                          '男鞋促销第一全场3.1折起','春季新品发布全场4.1折起'],
                  list:['伊伴春鞋迎春大促','千百度冬靴新品火热让利','COEY秋冬新品全场2.3折起',
                          '伊伴春鞋迎春大促a','千百度冬靴新品火热让']       
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
   width: 790px;
   height: 560px;
}
#switch-img{
   width: 550px;
   height: 320px;
   background: red;
   overflow: hidden;
   position: relative;
   ul{
       position: absolute;
       top:278px;
       left: 14px;
   }
   ul li{
       display: inline-block;
       height: 42px;
       width: 102px;
       margin: 0 1px;
       background: red;
       text-align: center;
   }
   ul li:hover{
       background: blue;
   }
}
#right{
    width: 230px;
    height: 320px;
    background:palegoldenrod;
    margin-left: 10px;
    #foot-ads{
        height: 133px;
        font-size: 15px;
        ul li{
            display: inline-block;
            margin-top: 3px;
        }
    }
}
#foot{
    width: 790px;
    height: 230px;
    background: hotpink;
    margin-top: 13px;
    #list{
        width: 790px;
        height: 29px;
        display: flex;
        p{
            width: 570px;
            height: 29px;
        }
        ul{
            width: 220px;
        }
        li{
             display: inline-block;
             margin-left: 20px;
        }
        ul li:hover{
            color: blue;
        }
    }
    #card ul li{
        display: inline-block;
        margin-left: 11px;
        p{
            text-align: center;
            margin-top: 5px;
        }
    }
}
</style>