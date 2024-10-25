<template>
  <div class="w">
    <div class="home_body">
        <span>专业定制个性选择</span>
        <router-link to="/LogIn"><button>开始易创</button></router-link>
        <!-- 轮播图 -->
        <HomeCarousel></HomeCarousel>
    </div>
    
  </div>
</template>

<script>
import HomeCarousel from "./HomeCarousel.vue"
export default {
    name: 'HomeBody',
    components: {
        HomeCarousel
    }
}
</script>

<style scoped>
.home_body{
    position: relative;;
    height: 570px;
    background-image: linear-gradient(to right, #000 , #d7d7d7);
}
.home_body span{
    position: absolute;
    left: 123px;
    top: 140px;
    font-family: '华文楷体';
    color: #fff;
    font-size: 60px;
    width: 240px;
    height: 158px;
}
.home_body button{
    cursor: pointer;
    position: absolute;
    width: 172px;
    height: 49px;
    left: 165px;
    top: 332px;
    background-color: #169BD5;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 35px;
    font-weight: 800;
}
</style>