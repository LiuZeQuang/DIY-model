<template>
  <div class="w">
    <div class="chat_window">
      <ChatWindowNav></ChatWindowNav>
      <ChatWindowTop></ChatWindowTop>
      <ChatWindowMiddle></ChatWindowMiddle>
      <ChatWindowBottom></ChatWindowBottom>
    </div>
  </div>
</template>

<script>
import ChatWindowNav from './ChatWindowNav.vue'
import ChatWindowTop from './ChatWindowTop.vue'
import ChatWindowMiddle from './ChatWindowMiddle.vue'
import ChatWindowBottom from './ChatWindowBottom.vue'
export default {
    name: 'ChatWindow',
    components: {
        ChatWindowNav,
        ChatWindowTop,
        ChatWindowMiddle,
        ChatWindowBottom
    }
}
</script>

<style scoped>
.w{
    position: relative;
    height: 600px;
    background-image: url("../../../public/consumer/background.png");
}

.chat_window{
  position: relative;
  left: 44px;
  top: 36px;
  width: 937px;
  height: 543px;
  background-color: #fff;
  border: 1px solid #797979;
}
</style>