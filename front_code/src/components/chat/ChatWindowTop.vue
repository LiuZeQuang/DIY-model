<template>
  <div class="top">
    <img src="../../../public/char/Avatar.jpg" alt="">
    <span>私密马赛设计师</span>
  </div>
</template>

<script>
export default {
    name: 'ChatWindowTop',
}
</script>

<style scoped>
.top{
  position: absolute;
  width: 733px;
  height: 48px;
  border: 1px solid #797979;
  margin-top: -1px;
  margin-left: 203px;
}

img{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 15px;
  top: 8px;
}

span{
  position: absolute;
  left: 67px;
  top: 13px;
  font-size: 14px;
  color: #333;
}
</style>