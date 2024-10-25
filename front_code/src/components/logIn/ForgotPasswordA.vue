<!-- 忘记密码-下一步 -->
<template>
  <div>
    <img class="back" src="../../../public/logIn/logF.png" alt="" @click="$router.go(-1)">
    <span class="title">找&nbsp;回&nbsp;密&nbsp;码</span>
    <span class="xian"></span>
    <input class="zhanghao" type="text" placeholder="修改密码" v-model="password">
    <input class="miman" type="text" placeholder="确认密码" v-model="passwordA">
    <button @click="forgotPassword">修&nbsp;改&nbsp;密&nbsp;码</button>
    <li>
        <input type="checkbox" v-model="imtrue">
        我已阅读并接受
        <a href="#" class="xieyi">《易创用户协议》</a>
    </li>
    <div class="cuowu1" v-show="c1">密码不能为空</div>
    <div class="cuowu2" v-show="c2">两次密码不一致！</div>
    <div class="cuowu3" v-show="!imtrue">未勾选协议！</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"ForgotPasswordA",
    data(){
        return{
            password:"",
            passwordA:"",
            c1:false,
            c2:false,
            imtrue:false
        }
    },
    methods:{
        forgotPassword(){
          
          if(this.password != "" && this.password == this.passwordA && this.imtrue){
            this.c1 = false
            this.c2 = false
            axios.post('http://localhost:8082/api/comsumer/login_before/forget_pass/change_password', {
              mailBox: this.$route.query.mailBox,
              newPassword: this.password
            }).then((res=>{
              this.$router.push("/logIn")
            }))
          }else{
            if (this.password == "") this.c1 = true
            else this.c1 = false
            if (this.password != this.passwordA) this.c2 = true
            else this.c2 = false
          }
        }
    }
}
</script>

<style scoped>
.back {
    position: absolute;
    width: 28px;
    height: 28px;
    left: 14px;
    top: 28px;
    cursor: pointer;
}

.xian{
  position: absolute;
  width: 316px;
  height: 2px;
  top: 68px;
  left: 7px;
  border-top: 2px solid #aaa;
}

.title {
    position: absolute;
    width: 94px;
    height: 32px;
    left: 115px;
    top: 30px;
    color: #333;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
}

.zhanghao,
.miman{
  position: absolute;
  width: 299px;
  height: 33px;
  left: 13px;
  font-size: 14px;
  color: #000;
  background-color: #eee;
  border: 1px solid #797979;
  border-radius: 5px;
  padding: 2px 2px 2px 10px;
  outline: none;
}

.zhanghao{
  top: 101px;
}

.miman{
  top: 158px;
}

button{
  position: absolute;
  width: 311px;
  height: 37px;
  left: 13px;
  top: 215px;
  font-size: 14px;
  color: #fff;
  background-color: #00B1FF;
  border: none;
  border-radius: 5px;
  padding: 2px 2px 2px 10px;
}

li{
  position: absolute;
  left: 17px;
  top: 275px;
  font-size: 16px;
}

.cuowu1,
.cuowu2{
  position: absolute;
  width: 143px;
  height: 15px;
  left: 24px;
  font-size: 13px;
  color: #FF0000;
}

.cuowu1{
  top: 140px;
}

.cuowu2{
  top: 198px;
}
</style>