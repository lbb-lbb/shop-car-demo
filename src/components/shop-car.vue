<!--  -->
<template>
    <div id="mains">
        <div>
            <ul>
                <li class="setHeight">商品名称</li>
                <li>颜色</li>
                <li>尺寸</li>
                <li>原价</li>
                <li>优惠价</li>
                <li>数量</li>
                <li>合计</li>
            </ul>
            <ul v-for="item in this.goods" :key="item">
                <li class="setHeight">{{item.name}}</li>
                <li>{{item.color}}</li>
                <li>{{item.size}}</li>
                <li>{{item.price}}</li>
                <li>{{(item.sale*item.price).toFixed(2)}}</li>
                <li>{{item.number}}</li>
                <li>{{item.money}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {getStorage} from '../methods/methods'
import {mapState} from 'vuex'
    export default {
        components: {},
        data() {return{
            goods:null,
            name:null,
        }},
        computed: {
            ...mapState(['user']),
        },
        methods: {
            getGoods(){
               this.goods= getStorage(this.user.name+'-data')
               console.log(this.user.name)
               console.log(this.goods)
            }
        },
        mounted:function(){
            setTimeout(()=>{
            this.getGoods()
            },500)
        },
    };
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    li{
        display: inline-block;
        width: 100px;
        height: 50px;
        text-align: center;
    }
    #mains {
        display: flex;
        flex-wrap: wrap;
        width: 790px;
        height: 560px;
        background: red;
        overflow: scroll;
    }
    .setHeight{
        width: 150px;
    }
</style>