<template>
  <div>
    <div class="body_top">个人资料</div>
    <div class="body_bottom">
      <div class="title">基本信息</div>
      <img src="../../../public/consumer/Avatar.jpg" alt="">
      <div class="toum">更&nbsp;&nbsp;换</div>
      <span class="id">用户ID</span><input class="id_i" type="text" value="543391" readonly>
      <span class="name">昵称</span><input class="name_i" type="text" value="Ma">
      <span class="gender">性别</span><input class="gender_i" type="text" value="男">
      <span class="address">收货地址</span><textarea class="address_i">广东省广州市广从南路548号（广州软件学院）</textarea>
      <div class="modify">保存修改</div>
      <div class="img_text">格式：支持JPG、PNG <br>大小：5M以内</div>
      <p class="one">*</p>
      <p class="two">*</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'PersonalCenterInformation',
}
</script>

<style scoped>
.body_top{
    position: absolute;
    width: 770px;
    height: 54px;
    left: 137px;
    top: -1px;
    padding-left: 30px;
    font-size: 17px;
    font-weight: 800;
    color: rgba(96, 94, 94, 0.7);
    line-height: 54px;
    border: 1px solid #797979;
    background-color: #fff;
}

.body_bottom{
    position: absolute;
    width: 800px;
    height: 480px;
    top: 54px;
    left: 137px;
    border: 1px solid #797979;
    background-color: rgba(255, 255, 255, 0.5);
}

.title{
  position: absolute;
  width: 64px;
  height: 18px;
  left: 34px;
  top: 26px;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  font-weight: 800;
  color: #6C6C6C;
}

img{
  position: absolute;
  width: 80px;
  height: 80px;
  left: 560px;
  top: 86px;
  border-radius: 50%;
}

.toum{
  position: absolute;
  width: 114px;
  height: 25px;
  left: 543px;
  top: 141px;
  text-align: center;
  line-height: 25px;
  font-size: 12px;
  font-weight: 800;
  color: #333;
  background-color: rgb(255, 255, 255, 0.8);
}

span{
  position: absolute;
  right: 670px;
  font-size: 14px;
  color: #333;
  letter-spacing: 2px;
}

.id{
  top: 104px;
}

.name{
  top: 177px;
}

.gender{
  top: 248px;
}

.address{
  top: 318px;
}

input{
  position: absolute;
  width: 238px;
  height: 22px;
  left: 163px;
  font-size: 14px;
  color: #333;
  letter-spacing: 2px;
  background-color: #E5E5E5;
  border-radius: 5px;
  border: none;
  padding: 2px 2px 2px 10px;
  outline: none;
}

.id_i{
  top: 102px;
}

.name_i{
  top: 174px;
}

.gender_i{
  top: 246px;
}

.address_i{
  position: absolute;
  width: 238px;
  height: 83px;
  left: 163px;
  top: 317px;
  font-size: 14px;
  color: #333;
  letter-spacing: 2px;
  background-color: #E5E5E5;
  border-radius: 5px;
  border: none;
  padding: 2px 2px 2px 10px;
  outline: none;
  resize: none;
}

.modify{
  position: absolute;
  width: 106px;
  height: 31px;
  left: 235px;
  top: 413px;
  font-size: 13px;
  text-align: center;
  line-height: 31px;
  color: #fff;
  background-color: #169BD5;
  border-radius: 5px;
}

.img_text{
  position: absolute;
  left: 527px;
  top: 181px;
  font-size: 14px;
  color: #909090;
  letter-spacing: 1px;
}

p{
  position: absolute;
  color: #FF0000;
  font-size: 20px;
}

.one{
  left: 58px;
  top: 103px;
}

.two{
  left: 75px;
  top: 175px;
}
</style>