<!-- 用户注册-下一步 -->
<template>
  <div>
    <img class="back" src="../../../public/logIn/logF.png" alt="" @click="$router.go(-1)">
    <span class="title">注&nbsp;册</span>
    <span class="xian"></span>
    <input class="zhanghao" type="text" v-model="user.mailBox" readonly>
    <input class="miman" type="text" placeholder="密 码" v-model="user.password">
    <input class="mimanA" type="text" placeholder="确认密码" v-model="user.passwordA">
    <input class="phone" type="text" placeholder="手机号" v-model="user.phone">
    <input class="address" type="text" placeholder="地 址" v-model="user.address">
    <button @click="register">注&nbsp;册&nbsp;账&nbsp;号</button>
    <li>
        <input type="checkbox" v-model="c1" style="cursor: pointer;">
        我已阅读并接受
        <a href="#" class="xieyi">《易创用户协议》</a>
    </li>
    <div class="cuowu1" v-show="!c1">未勾选协议！</div>
    <div class="cuowu2" v-show="c2">两次密码不一致！</div>
    <div class="cuowu3" v-show="c3">请输入正确手机号码！</div>
    <div class="cuowu4" v-show="c4">密码不能为空</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"LRegisterA",
    data(){
      return{
        user:{
          mailBox: this.$store.state.user.mailBox,
          password: "",
          passwordA: "",
          phone: "",
          address: ""
        },
        c1: false,
        c2: false,
        c3: false,
        c4: false
      }
    },
    methods:{
      register(){
        if(this.user.passwordA == this.user.password && this.user.password != "" && (/^\d{11}$/).test(this.user.phone) && this.c1){
          this.$store.commit("userUP", this.user)
          axios.post("http://localhost:8082/api/comsumer/login_before/register/mail",{
            mailBox:this.user.mailBox,
            password:this.user.password,
            phone:this.user.phone,
            address:this.user.address
          }).then(res=>{
            if(res.data.code == 200){
              this.$store.commit("userUP", this.user)
              this.$router.push("/LogIn")
            }else alert("账号已注册！！！")
          })
        }else{
          if (this.user.passwordA !== this.user.password) this.c2 = true;
          else this.c2 = false;
          if (this.user.password == "") this.c4 = true;
          else this.c4 = false;
          if ((/^\d{11}$/).test(this.user.phone)) this.c3 = false;
          else this.c3 = true;
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
.miman,
.mimanA,
.phone,
.address{
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
  top: 88px;
}

.miman{
  top: 145px;
}

.mimanA{
  top: 202px;
}

.phone{
  top: 259px;
}

.address{
  top: 316px;
}

button{
  position: absolute;
  width: 311px;
  height: 37px;
  left: 13px;
  top: 373px;
  font-size: 14px;
  color: #fff;
  background-color: #00B1FF;
  border: none;
  border-radius: 5px;
  padding: 2px 2px 2px 10px;
}

li{
  position: absolute;
  left: 30px;
  top: 428px;
  font-size: 16px;
}

.cuowu1,
.cuowu2,
.cuowu3,
.cuowu4{
  position: absolute;
  width: 143px;
  height: 15px;
  left: 24px;
  font-size: 13px;
  color: #FF0000;
}

.cuowu1{
  top: 448px;
}

.cuowu2{
  top: 242px;
}

.cuowu3{
  top: 298px;
}

.cuowu4{
  top: 184px;
}
</style>