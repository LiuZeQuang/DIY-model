<!-- 登录 -->
<template>
  <div class="w">
    <div class="logIn">
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LogIn"
}
</script>

<style scoped>
.w{
  height: 571px;
  background-image: url("../../../public/logIn/background.png");
}

.logIn{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.body{
  position: relative;
  width: 336px;
  height: 472px;
  left: 344px;
  top: 49px;
  background-color: #c5c5c5;
  border-radius: 10px;
}
</style>