<template>
    <div class="bd">
        <a href="#/PersonalCenter/AccountManagement"><img class="icon" src="../../../../public/personalCenter/退出按钮.png" alt=""></a>
        <p class="title">账号注销</p>
        <p class="one">账号已成功<span>注销！</span></p>
        <p class="two">感谢您曾使用易创！</p>
        <a href="#/PersonalCenter/AccountManagement"><button class="last">完成</button></a>
    </div>
</template>

<script>
export default {
    name: 'LogOffLL'
}
</script>

<style scoped>
.bd{
    position: absolute;
    width: 288px;
    height: 193px;
    top: 90px;
    left: 216px;
    background-color: #fff;
    z-index: 2;
    border-radius: 5px;
}

.icon{
    position: absolute;
    width: 22px;
    height: 22px;
    left: 252px;
    top: 11px;
}

.title{
    position: absolute;
    height: 18px;
    left: 29px;
    top: 22px;
    font-size: 16px;
    font-weight: 800;
    color: #333;
}

.one{
    position: absolute;
    width: 128px;
    height: 16px;
    left: 80px;
    top: 67px;
    font-family: 'Arial';
    font-size: 14px;
    color: #000;
    letter-spacing: 2px;
}

.one span{
    color: #FF0000;
}

.two{
    position: absolute;
    width: 144px;
    height: 16px;
    left: 72px;
    top: 102px;
    font-family: 'Arial';
    font-size: 14px;
    color: #333;
    letter-spacing: 2px;
}

.last{
    position: absolute;
    width: 229px;
    height: 26px;
    left: 29px;
    top: 145px;
    font-size: 13px;
    color: #fff;
    background-color: #169BD5;
    border: none;
    border-radius: 5px;
    outline: none;
}
</style>