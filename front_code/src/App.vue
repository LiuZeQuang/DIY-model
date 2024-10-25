<template>
  <div class="external">
    <!-- 头部 -->
    <HomeHeader></HomeHeader>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue';
import hh from './hh.vue'
export default {
  name: 'App',
  components: {
    HomeHeader,
    hh
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.external{
    background-color: rgba(192,192,192,64);
}
.w{
    width: 1024px;
    margin: 0 auto;
}
.HeaderIndex_todoList{
    height: 80px;
}
li{
    list-style-type: none;
}
a{
    text-decoration: none;
}
</style>
