<template>
  <div class="middle">
    <div class="wu">
      <span class="one">没有聊天记录了</span>
      <span class="two">上次聊到这里</span>
      <span class="three"></span>
      <span class="four"></span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ChatWindowMiddle',
}
</script>

<style scoped>
.middle{
  position: absolute;
  width: 733px;
  height: 361px;
  border: 1px solid #797979;
  margin-top: 48px;
  margin-left: 203px;
}

.one{
  position: absolute;
  width: 98px;
  height: 16px;
  left: 333px;
  top: 14px;
  font-size: 14px;
  color: #555;
}

.two{
  position: absolute;
  width: 60px;
  height: 11px;
  left: 352px;
  top: 40px;
  font-size: 10px;
  color: #aaa;
}

.three{
  position: absolute;
  width: 94px;
  height: 2px;
  top: 45px;
  left: 243px;
  border-bottom: 1px solid #aaa;
}

.four{
  position: absolute;
  width: 94px;
  height: 2px;
  top: 45px;
  left: 427px;
  border-bottom: 1px solid #aaa;
}
</style>