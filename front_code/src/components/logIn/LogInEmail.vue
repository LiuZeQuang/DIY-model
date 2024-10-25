<!-- 邮件登录 -->
<template>
  <div>
    <router-link to="/LogIn"><span class="mima">密码登录</span></router-link>
    <span class="youjian">邮箱登录</span>
    <span class="xian"></span>
    <input class="zhanghao" type="text" placeholder="邮箱" v-model="mailBox">
    <div>
        <div class="captcha-slider" :class="{ 'is-dragging': isDragging }">
            <div class="captcha-slider-thumb" :style="{ left: thumbPosition + 'px' }" @mousedown="handleMouseDown"></div>
            请按住滑块，拖到最右边
        </div>
        <div v-if="isVerified" class="captcha-verified">验证成功!</div>
        <div v-if="!isVerified" class="tome" :style="{ width: thumbPosition + 5 + 'px' }"></div>
    </div>
    <input class="code" type="text" placeholder="验证码" v-model="code">
    <div class="sending" @click="sendCode">{{ yanzhang }}</div>
    <button @click="logIn">登&nbsp;录</button>
    <a href="#/ForgotPassword" class="forgot_password">忘记密码</a>
    <a href="#/LRegister" class="register">注册</a>
    <li>
        <input type="checkbox" v-model="c2" style="cursor: pointer;">
        我已阅读并接受
        <a href="#" class="xieyi">《易创用户协议》</a>
    </li>
    <div class="cuowu" v-show="c1">验证码错误！</div>
    <div class="cuowu1" v-show="c3">未勾选或未滑动!</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"LogInEmail",
    data() {
      return {
        isDragging: false,
        startX: 0,
        thumbPosition: 0,
        isVerified: false,
        sliderWidth: 0,
        yanzhang:"发送验证码",
        mailBox:"",
        code:"",
        c1:false,
        c2:false,
        c3:false
      };
    },
    methods: {
      logIn() {
        if (this.c2 && this.isVerified) {
          axios.post("http://localhost:8082/api/comsumer/login_before/login/mail_ProofCode", {
            code: this.code,
            to: this.mailBox
          }).then(ret => {
            if (ret.data.code == 200) {
              // console.log(ret.data.data);
              this.c1 = false;
              this.c3 = false;
              // this.$store.commit('userUP', ret.data.data);
              this.$router.push("/");
            } else{
              this.c1 = true;
              this.c3 = true;
            }
          })
        }else this.c3 = true;
      },
      sendCode(){
        axios.get("http://localhost:8082/api/comsumer/login_before/login/mail_ObtainCode",{
          params:{
            to:this.mailBox
          }
        }).then(ret=>{
          if(ret.data.code == 200){
            this.yanzhang = '发送成功'
            console.log(ret.data.data);
          } else this.yanzhang = '发送验证码'
        })
        
      },
      handleMouseDown(event) {
        this.isDragging = true;
        this.startX = event.clientX - this.thumbPosition;
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
      },
      handleMouseMove(event) {
        if (this.isDragging) {
          const distance = event.clientX - this.startX;
          this.thumbPosition = Math.min(Math.max(distance, 0), this.sliderWidth);
        }
      },
      handleMouseUp() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        // 验证滑块是否移动到最右侧
        this.isVerified = this.thumbPosition === this.sliderWidth;
        if(!this.isVerified) this.thumbPosition = 0;
      }
    },
    mounted() {
      this.sliderWidth = this.$el.querySelector('.captcha-slider').offsetWidth - this.$el.querySelector('.captcha-slider-thumb').offsetWidth;
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
  /* border-bottom: 2px solid #000;
  z-index: 1; */
  cursor: pointer;
}

.mima:hover{
  font-weight: 800;
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
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  border-bottom: 2px solid #000;
  z-index: 1;
  cursor: pointer;
}

.zhanghao{
  position: absolute;
  width: 299px;
  height: 33px;
  top: 101px;
  left: 13px;
  font-size: 14px;
  color: #000;
  background-color: #eee;
  border: 1px solid #797979;
  border-radius: 5px;
  padding: 2px 2px 2px 10px;
  outline: none;
}

.code{
  position: absolute;
  width: 122px;
  height: 33px;
  left: 13px;
  top: 215px;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #797979;
  padding: 2px 2px 2px 10px;
  font-size: 14px;
  color: #000;
  outline: none;
}

.sending{
  position: absolute;
  width: 111px;
  height: 37px;
  left: 213px;
  top: 215px;
  font-size: 14px;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #797979;
  color: #666;
  text-align: center;
  line-height: 37px;
  cursor: pointer;
}

.sending:hover{
  color: #000;
}

button{
  position: absolute;
  width: 311px;
  height: 37px;
  left: 13px;
  top: 271px;
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
  top: 335px;
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
  top: 335px;
}

.register:hover{
  color: #000;
  font-weight: 800;
}

li{
  position: absolute;
  left: 17px;
  top: 384px;
  font-size: 16px;
}

.cuowu,
.cuowu1{
  position: absolute;
  height: 15px;
  top: 254px;
  left: 24px;
  font-size: 13px;
  color: #FF0000;
}

.cuowu1{
  top: 405px;
}

/* 验证滑块 */
.captcha-slider {
    position: absolute;
    top: 158px;
    left: 13px;
    width: 311px;
    height: 37px;
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 37px;
    background-color: #eee;
    user-select: none;
    border: 1px solid #797979;
    border-radius: 5px;
}

.captcha-slider-thumb {
    position: absolute;
    width: 39px;
    height: 39px;
    background: url("../../../public/logIn/滑动.png") no-repeat 100% 100% / cover;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    margin-left: -1px;
    margin-top: -1px;
    z-index: 2;
}

.is-dragging .captcha-slider-thumb {
    transition: none;
}

.captcha-verified {
    position: absolute;
    top: 158px;
    left: 13px;
    width: 311px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    background-color: #00B1FF;
    border-radius: 5px;
    border: 1px solid #797979;
}

.tome{
  position: absolute;
  top: 158px;
  left: 13px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00B1FF;
  border-radius: 5px;
  border: 1px solid #797979;
  z-index: 1;
}
</style>