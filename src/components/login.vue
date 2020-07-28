<!-- 登陆与注册模块 -->
<template>
<div id="main">
    <div id="login" v-if="type==='login'" @click="switchs">
        <p>请输入您的账户密码以便登陆</p>
        <input name="id" placeholder="请输入用户名" type="text"/>
        <input name="password" placeholder="请输入密码" type="password"/>
        <button name="sign">注册   </button>
        <button name="login" class="bth">登陆   </button>
        <p>没有账号？点击注册去注册一个账号吧</p>
    </div>
    <div id="sign" v-else-if="type==='sign'" @click="switchs">
    <p>请输入以下信息以便注册</p>
       <input name="id" placeholder="请输入用户名" type="text"/>
       <input name="password" placeholder="请输入密码" type="password"/>
       <input name="password2" placeholder="请输入密码" type="password"/>
       <input name="password" placeholder="请输入邮箱" type="email"/>
        <button name="login">登陆   </button>
        <button name="sign" class="bth">注册   </button>
        <p>已有账号？点击登陆去登陆账号吧</p>
    </div>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
        components: {},
        data() {
            return {
                type:'login'
            };
          },
        computed: {},
        methods: {
            ...mapMutations(['setName']),
            switchs(e){
                e=e.target;
                if(e.tagName.toLocaleLowerCase()==="button"&&this.type!==e.name){ //登陆和注册的切换逻辑
                    this.type=e.name;
                    return
                }
                if(e.tagName.toLocaleLowerCase()==="button"&&this.type===e.name){//提交登陆注册信息的逻辑
                    var user = {};
                    var inputs=document.querySelectorAll('input')
                    if(this.type==='sign'){
                       user.name=inputs[0].value;
                       user.password=inputs[1].value;
                       user.email=inputs[3].value;
                       if(localStorage.getItem(user.name)){
                           alert("该账户已经存在")
                       }
                       else{
                           localStorage.setItem(user.name,JSON.stringify(user));
                           alert("注册成功，将为您跳至登陆页面");
                           this.type='login'
                       }
                    }
                    else{
                        if(!localStorage.getItem(inputs[0].value)){
                            alert("该账户不存在")
                        }
                        else{
                            var account=JSON.parse(localStorage.getItem(inputs[0].value));
                            if(account.password==inputs[1].value){
                                this.setName(inputs[0].value)
                                this.$router.push('/')
                            }
                            else{
                                alert("密码错误")
                            }
                        }
                    }
                }
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
p{
    text-align: center;
}
#main{
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
}
input{
    border: none;
    width: 300px;
    height: 40px;
    margin: 0 50px;
    margin-top: 20px;
    background: rgba(68, 125, 199, 0.411);
}
button{
    border: none;
    width: 150px;
    height: 40px;
    margin: 0 20px;
    margin-top: 20px;
    background: rgba(68, 125, 199, 0.411);
}
</style>