<!-- 密码登录 -->
<template>
  <div>
    <span class="mima">密码登录</span>
    <router-link to="/LogInEmail"><span class="youjian">邮箱登录</span></router-link>
    <span class="xian"></span>
    <input class="zhanghao" type="text" placeholder="手机号 / 邮箱" v-model="account">
    <input class="miman" type="text" placeholder="密码" v-model="password">
    <button @click="logIn" >登&nbsp;录</button>
    <a href="#/ForgotPassword" class="forgot_password">忘记密码</a>
    <a href="#/LRegister" class="register">注册</a>
    <li>
        <input type="checkbox" v-model="c3" style="cursor: pointer;">
        我已阅读并接受
        <a href="#" class="xieyi">《易创用户协议》</a>
    </li>
    <div class="cuowu1" v-show="c1">手机号或者邮箱未注册！</div>
    <div class="cuowu2" v-show="c2">帐号或密码错误！</div>
    <div class="cuowu3" v-show="!c3">未勾选协议！</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"LogInPassword",
    data() {
      return {
        account: '',
        password: '',
        c1: false,
        c2: false,
        c3: false
      }
    },
    methods:{
      logIn(){
        if(this.c3){
          axios.post("http://localhost:8082/api/comsumer/login_before/login/mail_password", {
            account: this.account,
            password: this.password
          }).then(ret => {
            if (ret.data.code == 200) {
              console.log(ret.data.data);
              this.c2 = false;
              // this.$store.commit('userUP', ret.data.data);
              this.$router.push("/");
            } else this.c2 = true;
          })
        }
      }
    }
}
</script>

<style scoped>
.mima{
  position: absolute;
  width: 94px;
  height: 32px;
  left: 7px;
  top: 36px;
  color: #333;
  font-size: 18px;
  text-align: center;
  border-bottom: 2px solid #000;
  font-weight: 800;
  z-index: 1;
}

.xian{
  position: absolute;
  width: 316px;
  height: 2px;
  top: 68px;
  left: 7px;
  border-top: 2px solid #aaa;
}

.youjian{
  position: absolute;
  width: 94px;
  height: 32px;
  left: 101px;
  top: 36px;
  color: #333;
  font-size: 18px;
  text-align: center;
  /* border-bottom: 1px solid #000; */
}

.youjian:hover{
  font-weight: 800;
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
  cursor: pointer;
}

.forgot_password{
  position: absolute;
  width: 60px;
  height: 17px;
  left: 17px;
  top: 278px;
  font-size: 15px;
  color: #333;
}

.forgot_password:hover{
  color: #000;
  font-weight: 800;
}

.register{
  position: absolute;
  width: 30px;
  height: 17px;
  font-size: 15px;
  color: #333;
  left: 289px;
  top: 278px;
}

.register:hover{
  color: #000;
  font-weight: 800;
}

li{
  position: absolute;
  left: 17px;
  top: 327px;
  font-size: 16px;
}

.cuowu1,
.cuowu2,
.cuowu3{
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

.cuowu3{
  top: 350px;
}
</style>