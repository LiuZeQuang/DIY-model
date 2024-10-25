<template>
  <div class="nav">
    <div class="source">
      <img src="../../../public/char/搜索.png" alt="">
      <input type="text" placeholder="搜索最近联系人">
    </div>
    <ul>
      <li>
        <img src="../../../public/char/Avatar.jpg" alt="">
        <span>辛地产商</span>
      </li>
      <li>
        <img src="../../../public/char/Avatar.jpg" alt="">
        <span>鹏鹏设计师</span>
      </li>
      <li>
        <img src="../../../public/char/Avatar.jpg" alt="">
        <span>私密马赛设计师</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'ChatWindowNav',
}
</script>

<style scoped>
.nav{
  position: absolute;
  width: 203px;
  height: 543px;
  border: 1px solid #797979;
  margin-top: -1px;
  margin-left: -1px;
}

.source{
  position: relative;
  width: 203px;
  height: 55px;
}

.source img{
  position: absolute;
  width: 20px;
  height: 20px;
  left: 13px;
  top: 17px;
  z-index: 1;
}

.source input{
  position: absolute;
  width: 184px;
  height: 25px;
  left: 9px;
  top: 14px;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  background-color: #fff;
  border: 1px solid #797979;
  border-radius: 10px;
}

ul{
  position: relative;
  width: 203px;
  height: 488px;
  overflow-y: auto;
  overflow-x: hidden;
}

ul li{
  position: relative;
  width: 202px;
  height: 46px;
  border: 1px solid #797979;
  border-radius: 3px;
}

ul li img {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 15px;
  top: 8px;
}

ul li span{
  position: absolute;
  left: 67px;
  top: 13px;
  font-size: 14px;
  color: #333;
}
</style>