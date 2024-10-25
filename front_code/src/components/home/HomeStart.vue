<template>
  <div class="w">
    <div class="home_start">
        <p>立即开始</p>
        <span>你的创新，你的创意，你的想象力，这里都可以实现。不管你是消费者、设计师还是厂家，都可以在这里找到你的位置。立即加入我们，发现更大的可能。</span>
        <router-link to="/LogIn"><button class="login">登录</button></router-link>
        <router-link to="/LRegister"><button class="register">注册</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeStart"
}
</script>

<style scoped>
.home_start{
    position: relative;
    height: 350px;
    background-color: #fff;
}

p{
    position: absolute;
    width: 160px;
    height: 46px;
    left: 402px;
    top: 77px;
    margin: 0;
    font-family: '楷体';
    font-size: 40px;
}

span{
    position: absolute;
    width: 475px;
    height: 66px;
    left: 245px;
    top: 143px;
    font-family: '楷体';
    font-size: 19px;
    text-align: center;
}

button{
    cursor: pointer;
    position: absolute;
    width: 140px;
    height: 47px;
    top: 236px;
    font-family: "楷体";
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    border: none;
    border-radius: 20px;
}

.login{
    left: 330px;
    background-color: #41B0FF;
}

.register{
    left: 495px;
    background-color: #FF4141;
}
</style>