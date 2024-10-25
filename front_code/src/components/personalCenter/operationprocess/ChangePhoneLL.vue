<template>
    <div class="bd">
        <a href="#/PersonalCenter/AccountManagement"><img class="icon" src="../../../../public/personalCenter/退出按钮.png" alt=""></a>
        <p class="title">修改手机号码</p>
        <p class="one">手机号码修改成功！</p>
        <p class="two">已成功修改为<span>130***2151</span></p>
        <a href="#/PersonalCenter/AccountManagement"><button class="last">完成</button></a>
    </div>
</template>

<script>
export default {
    name: 'ChangePhoneLL'
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
    width: 144px;
    height: 16px;
    left: 72px;
    top: 67px;
    font-family: 'Arial';
    font-size: 14px;
    color: #000;
    letter-spacing: 2px;
}

.two{
    position: absolute;
    height: 16px;
    left: 67px;
    top: 102px;
    font-family: 'Arial';
    font-size: 14px;
    color: #333;
}

.two span{
    color: #FF0000;
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