<!-- 激活设计者 -->
<template>
  <div class="w">
    <div class="bgc">
      <div class="body_des_act">
        <div class="left_des_act">
          <span class="title">易创设计家</span>
          <p>易创设计家是易创为设计师打造的，集设计图纸、发布个人创作、接取定做订单等功能于一体的服务平台。</p>
          <li class="one"><img src="../../../public/designer/激活L.png" alt=""><span>设计师<br>独特作品创作</span></li>
          <li class="two"><img src="../../../public/designer/激活R.png" alt=""><span>个性化定制<br>满足客户需求</span></li>
        </div>
        <img class="logo" src="../../../public/designer/logo_白_.png" alt="">
        <label class="name" for="">真实姓名：</label><input class="name_int" type="text">
        <label class="id" for="">身份证号码：</label><input class="id_int" type="text">
        <button>成为设计家</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DesignerActivation',
}
</script>

<style scoped>
.bgc{
  position: relative;
  height: 600px;
  background-image: url('../../../public/designer/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%
}

.body_des_act{
  position: absolute;
  width: 764px;
  height: 436px;
  left: 130px;
  top: 82px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #797979;
}

.left_des_act{
  position: absolute;
  width: 382px;
  height: 436px;
  background-color: #f2f2f2;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.logo{
  position: absolute;
  width: 118px;
  height: 106px;
  left: 400px;
  top: 45px;
}

label{
  position: absolute;
  height: 19px;
  font-size: 16px;
  color: #333;
}

.name{
  width: 89px;
  left: 414px;
  top: 204px;
}

.id{
  width: 106px;
  left: 398px;
  top: 265px;
}

input{
  position: absolute;
  height: 31px;
  left: 507px;
  font-size: 14px;
  color: #000;
  border: 1px solid #797979;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
}

.name_int{
  width: 132px;
  top: 200px;
}

.id_int{
  width: 226px;
  top: 261px;
}

button{
  position: absolute;
  width: 142px;
  height: 43px;
  left: 507px;
  top: 328px;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  background-color: #00B1FF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.title{
  position: absolute;
  width: 200px;
  height: 50px;
  left: 39px;
  top: 59px;
  font-size: 28px;
  color: #333;
  border-bottom: 1px solid #797979;
}

p{
  position: absolute;
  width: 327px;
  height: 75px;
  left: 39px;
  top: 119px;
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  text-indent: 2em;
  letter-spacing: 2px;
  line-height: 1.6;
}

li{
  position: absolute;
  width: 155px;
  height: 178px;
  top: 232px;
  font-size: 14px;
  color: #333;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.35);
  background-color: #fff;
}

.one{
  left: 33px;
}

.two{
  left: 203px;
}

li img{
  position: absolute;
  width: 35px;
  left: 60px;
  top: 43px;
}

li span{
  position: absolute;
  width: 102px;
  height: 44px;
  left: 27px;
  top: 96px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  color: #333;
  letter-spacing:3px;
}
</style>