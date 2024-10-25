<template>
  <div class="w">
    <div class="home_banner">
        <span class="zh">易创</span>
        <span class="en">YICHUANG</span>
        <span class="pingpai">品牌理念</span>
        <span class="guanggao">消费者为中心<br>
            <p>提供一流定制</p>
        </span>
        <img src="../../../public/home/tp.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeBanner"
}
</script>

<style scoped>
.home_banner{
    position: relative;
    height: 522px;
    background-color: #fff;
}

.zh{
    position: absolute;
    left: 98px;
    top: 100px;
    width: 60px;
    height: 34px;
    font-size: 30px;
    font-weight: 800;
}
.en{
    position: absolute;
    left: 95px;
    top: 134px;
    width: 69px;
    height: 15px;
    font-size: 13px;
    font-weight: 800;
}
.pingpai {
    position: absolute;
    left: 193px;
    top: 103px;
    width: 100px;
    height: 29px;
    font-size: 25px;
    color: #ff0000;
    /* font-weight: 600; */
}

.guanggao{
    position: absolute;
    width: 381px;
    height: 96px;
    left: 102px;
    top: 216px;
    color: #07B5B5;
    font-size: 42px;
}

.guanggao p{
    margin-top: 0;
    margin-left: 125px;
}

.home_banner img{
    float: right;
    width: 450px;
}
</style>