<template>
  <div class="bottom">
    <div class="t">
      <img class="one" src="../../../public/char/表情包.png" alt="">
      <img class="two" src="../../../public/char/文件夹 (1).png" alt="">
      <img class="three" src="../../../public/char/爱心.png" alt="">
    </div>
    <div class="m"></div>
    <div class="b">
      <button class="btn">发送</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ChatWindowBottom',
}
</script>

<style scoped>
.bottom{
  position: absolute;
  width: 733px;
  height: 132px;
  border: 1px solid #797979;
  margin-top: 410px;
  margin-left: 203px;
}

.t{
  position: relative;
  width: 733px;
  height: 32px;
  /* border: 1px solid #000; */
}

.m{
  position: relative;
  width: 733px;
  height: 51px;
  /* border: 1px solid #000; */
}

.b{
  position: relative;
  width: 733px;
  height: 50px;
  /* border: 1px solid #000; */
}

.one{
  position: absolute;
  width: 54px;
  height: 29px;
  top: 2px;
  left: 7px;
}

.two{
  position: absolute;
  width: 27px;
  height: 24px;
  top: 5px;
  left: 65px;
}

.three{
  position: absolute;
  width: 27px;
  height: 24px;
  top: 5px;
  left: 107px;
}

.btn{
  position: absolute;
  width: 73px;
  height: 26px;
  left: 643px;
  top: 8px;
  font-size: 13px;
  color: #333;
  background-color: #fff;
  border: 1px solid #797979;
  border-radius: 6px;
}
</style>