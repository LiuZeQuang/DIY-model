<template>
  <div class="w">
    <div class="manufacturer_home">
      <li>
        <img src="../../../public/home/厂家.png" alt="">
        <p>厂家</p>
        <span>优质服务，只为顾客</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeManufacturer"
}
</script>

<style scoped>
.manufacturer_home{
  position: relative;
  height: 540px;
  background-image: linear-gradient(to right,#e1e1e1,#4c4a4a);
}

li{
  position: absolute;
  width: 698px;
  height: 485px;
  left: 162px;
  top: 28px;
  background-image: linear-gradient(to right,#a5a5a5,#777);
  border-radius: 50px;
}

img{
  position: absolute;
  width: 638px;
  height: 316px;
  left: 30px;
  top: 35px;
  border-radius: 30px;
}

p{
  position: absolute;
  width: 60px;
  height: 34px;
  left: 60px;
  top: 368px;
  margin: 0;
  font-family: "黑体";
  font-size: 30px;
  color: #fff;
}

span{
  position: absolute;
  width: 180px;
  height: 23px;
  left: 60px;
  top: 427px;
  font-family: "黑体";
  font-size: 20px;
  color: #fff;
}
</style>