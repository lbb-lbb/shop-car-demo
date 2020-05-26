<!--  -->
<template>
<div id="mains">
    <h3>商品分类</h3>
    <ul><p>推荐品牌</p>
        <li v-for="item in this.items" :key="item">{{item}}</li>
    </ul>
    <ul><p>推荐品牌</p>
        <li v-for="item in this.items" :key="item">{{item}}</li>
    </ul>
    <ul><p>推荐品牌</p>
        <li v-for="item in this.items" :key="item">{{item}}</li>
    </ul>
    <ul><p>推荐品牌</p>
        <li v-for="item in this.items" :key="item">{{item}}</li>
    </ul>
</div>
</template>
<script>
export default {
        components: {},
       // props:['title','items'],
        data() {
            return {
                items:['耐克','阿迪达斯','达芙妮','李宁','安踏','奥康','骆驼','特步']
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
#mains{
    display: flex;
    flex-wrap: wrap;
    width: 187px;
    height: 560px;
    padding-left: 15px;
    h3{
        width:187px;
        height: 20px;
    }
    ul{
        width:187px;
        height: 115px;
        p{
            width: 187px;
            height: 30px;
        
        }
        li{
            display: inline-block;
            width: 93px;
        }
    }
}
</style>