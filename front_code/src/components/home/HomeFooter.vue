<template>
  <div class="w">
    <div class="home_footer">
        <span class="head">常见问题</span>
        <ul>
            <li class="tt1">
                <span class="text1">定制流程是怎样的？</span>
                <span class="text2">消费者通过平台提出定制要求，再根据需求选择相匹配的设计师和厂商，设计师和厂商在根据需求完成定制</span>
            </li>
            <li class="tt2">
                <span class="text1">如何保证定制质量？</span>
                <span class="text2">我们的设计师和厂商都是经过严格筛选的，同时，我们也会对定制的结果进行质量把控，确保消费者的高质量体验</span>
            </li>
        </ul>
        <img src="../../../public/home/logo__black.png" alt="">
        <div>
            <span>联系我们：</span>
            <div class="phone">
                <img src="../../../public/home/手机.png" alt="">
                <span>+86 19120365706</span>
            </div>
            <div class="email">
                <img src="../../../public/home/邮箱.png" alt="">
                <span>1098323942@qq.com</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'HomeFooter'
}
</script>

<style scoped>
.home_footer{
    position: relative;
    height: 597px;
    background-image: linear-gradient(#d7d7d7, #060606);
}
/* 1713px */
.home_footer .head{
    position: absolute;
    width: 184px;
    height: 51px;
    left: 53px;
    top: 54px;
    font-size: 45px;
    color: #373457;
    font-weight: 800;
    font-family: '黑体';
}

.home_footer ul li .text1{
    position: absolute;
    width: 230px;
    height: 29px;
    left: 53px;
    top: 195px;
    font-size: 25px;
    color: #302D52;
    font-family: '黑体';
    font-weight: 800;
}

.home_footer ul li .text2{
    position: absolute;
    width: 350px;
    height: 69px;
    left: 53px;
    top: 264px;
    font-size: 20px;
    color: #F3F4EC;
}

.home_footer ul .tt2{
    position: absolute;
    left: 483px;
}

.home_footer img{
    position: absolute;
    left: 67px;
    top: 449px;
    width: 87px;
    border-radius: 27px;
}

.home_footer span{
    position: absolute;
    width: 85px;
    height: 19px;
    left: 227px;
    top: 449px;
    font-size: 17px;
    font-family: '黑体';
    color: #E3E3E3;
}

.home_footer div div img{
    position: absolute;
    width: 33px;
    top: 483px;
}

.phone img{
    left: 227px;
}

.email img{
    left: 453px;
}

.home_footer div div span{
    position: absolute;
    width: 128px;
    height: 19px;
    top: 490px;
    font-size: 17px;
    color: #D9D9D9;
    font-family: '黑体';
}
.phone span{
    left: 270px;
}

.email span{
    left: 497px;
}
</style>