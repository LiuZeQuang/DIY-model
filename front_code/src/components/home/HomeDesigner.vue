<template>
  <div class="w">
    <div class="designer_home">
        <ul>
            <li class="one">
                <img src="../../../public/home/设计师1.png" alt="">
                <p>发挥专长</p>
                <span>根据消费者需求私人定制设计方案</span>
            </li>
            <li class="two">
                <img src="../../../public/home/设计师2.png" alt="">
                <p>设计流畅</p>
                <span>发布设计师个人的优质图纸，挂件售出</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeDesigner"
}
</script>

<style scoped>
.designer_home{
    position: relative;
    height: 540px;
    background-color: #fff;
}

img{
    position: absolute;
    top: 59px;
    width: 266px;
    border-radius: 30px;
}

p{
    position: absolute;
    width: 120px;
    height: 34px;
    margin: 0;
    top: 369px;
    font-family: "黑体";
    font-size: 30px;
}
span{
    position: absolute;
    width: 238px;
    height: 16px;
    top: 435px;
    font-family: "黑体";
    font-size: 14px;
}

.one{
    position: absolute;
    left: 192px;
}

.two{
    position: absolute;
    left: 565px;
}
</style>