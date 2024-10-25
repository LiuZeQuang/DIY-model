<!-- 激活厂家 -->
<template>
  <div class="w">
    <div class="bgc">
      <div class="body_des_act">
        <div class="left_des_act">
          <span class="title">易创厂家中心</span>
          <p>易创厂家中心是易创为厂家打造的，集厂家成品销售、与客户交流创作、私人定做等功能于一体的服务平台。</p>
          <li class="one"><img src="../../../public/manufacturer/厂家中心2.png" alt=""><span>成品展示<br>挂售厂家作品</span></li>
          <li class="two"><img src="../../../public/manufacturer//厂家中心.png" alt=""><span>私人定做生产<br>满足客户需求</span></li>
        </div>
        <img class="logo" src="../../../public/designer/logo_白_.png" alt="">
        <label class="faname" for="">法人姓名：</label><input class="faname_int" type="text">
        <label class="faid" for="">法人身份证：</label><input class="faid_int" type="text">
        <label class="uscc" for="">统一社会<br>信用代码：</label><input class="uscc_int" type="text">
        <label class="cjphone" for="">厂家电话：</label><input class="cjphone_int" type="text">
        <label class="cjaddress" for="">厂家地址：</label><input class="cjaddress_int" type="text">
        <button>入驻平台</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ManufacturerActivation',
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
  top: 15px;
}

label{
  position: absolute;
  height: 19px;
  width: 89px;
  left: 414px;
  font-size: 16px;
  color: #333;
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

.faname{
  top: 142px;
}

.faname_int{
  width: 132px;
  top: 137px;
}

.faid{
  width: 106px;
  left: 398px;
  top: 184px;
}

.faid_int{
  width: 226px;
  top: 181px;
}

.uscc{
  width: 95px;
  height: 39px;
  top: 232px;
}

.uscc_int{
  width: 226px;
  height: 39px;
  top: 232px;
}

.cjphone{
  top: 296px;
}

.cjphone_int{
  width: 132px;
  top: 290px;
}

.cjaddress{
  top: 341px;
}

.cjaddress_int{
  width: 226px;
  top: 335px;
}

button{
  position: absolute;
  width: 142px;
  height: 43px;
  left: 507px;
  top: 381px;
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

.one img{
  width: 40px;
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