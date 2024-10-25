<template>
  <div class="w">
    <div class="consumer_home">
        <ul>
            <li class="one">
                <img src="../../../public/home/消费者1.png" alt="">
                <span class="text1">全新用户体验</span>
                <span class="text2">AI设计</span>
            </li>
            <li class="two">
                <img src="../../../public/home/消费者2.png" alt="">
                <span class="text1">设计师独特视角</span>
                <span class="text2">创新设计</span>
            </li>
            <li class="three">
                <img src="../../../public/home/消费者3.png" alt="">
                <span class="text1">优质制造商</span>
                <span class="text2">精确制作</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeConsumer"
}
</script>

<style scoped>
.consumer_home{
    position: relative;
    height: 541px;
    /* background-color: #fff; */
    /* border-top: 1px solid #000; */
    background-image: linear-gradient(to right,#e1e1e1,#4c4a4a);
}

.consumer_home li{
    position: absolute;
    top: 120px;
    border-radius: 25px;
    width: 275px;
    height: 300px;
}

.consumer_home li img{
    position: absolute;
    left: 14px;
    top: 30px;
    width: 247px;
    height: 189px;
    border-radius: 20px;
}

.consumer_home li .text1{
    position: absolute;
    left: 38px;
    top: 232px;
    width: 150px;
    height: 23px;
    font-size: 20px;
    color: #fff;
}

.consumer_home li .text2{
    position: absolute;
    left: 38px;
    top: 265px;
    width: 90px;
    height: 21px;
    font-size: 18px;
    color: #fff;
}

.consumer_home .one{
    left: 65px;
    /* background-color: #FFF852; */
    background:-webkit-linear-gradient(0deg,rgba(201,201,201,1) 0%,rgba(118,118,118,1) 98%);
}

.consumer_home .two{
    left: 375px;
    /* background-color: #4FD5FF; */
    background:-webkit-linear-gradient(0deg, rgba(118, 118, 118, 1) 0%, rgba(62, 62, 62, 1) 100%);
}

.consumer_home .three{
    left: 685px;
    /* background-color: #FF2C2C; */
    background: -webkit-linear-gradient(0deg, rgba(62, 62, 62, 1) 0%, rgba(60, 60, 60, 1) 100%);
}
</style>