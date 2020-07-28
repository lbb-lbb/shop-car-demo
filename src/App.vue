<!--  -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {setSessionStorage,getSessionStorage}from '../src/methods/methods.js'
import {mapMutations} from 'vuex'
export default {
    components: {},
    data() {
      return {};
      },
    computed: {},
    methods: {
       ...mapMutations(['setUser']),
       getuser(){                                    //获取vuex数据
         return this.$store.state.user
       }
    },
    mounted() {},
    created(){
      window.addEventListener('beforeunload',()=>{   //监听刷新前保存好vuex数据
       if(!this.$store.state.user.name) return
       setSessionStorage('user',this.getuser())
      })
      window.addEventListener('load',()=>{          //监听刷新后获取之前保存的vuex数据
        if(!getSessionStorage('user')) return
        this.setUser(getSessionStorage('user'));
         sessionStorage.clear('user')              //及时清除保存的数据
      })
    }
};
</script>
<style lang="scss" scoped>
</style>