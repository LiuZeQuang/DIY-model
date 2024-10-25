<template>
    <div class="bd">
        <a href="#/PersonalCenter/AccountManagement"><img class="icon" src="../../../../public/personalCenter/退出按钮.png" alt=""></a>
        <p class="title">修改邮箱信息</p>
        <input class="one" type="text" placeholder="请输入新邮箱">
        <p class="two">如果长时间未收到验证码，请检查垃圾箱</p>
        <input class="code" type="text" placeholder="验证码">
        <p class="three">获取验证码</p>
        <a href="#/PersonalCenter/AccountManagement/ChangEmailboxLL"><button class="last">下一步</button></a>
    </div>
</template>

<script>
export default {
    name: 'ChangEmailboxL'
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

.one,
.code{
    position: absolute;
    width: 219px;
    height: 28px;
    left: 29px;
    font-size: 13px;
    color: #9B9B9B;
    border: 1px solid #006EFF;
    padding-left: 10px;
    border-radius: 3px;
    outline: none;
}

.one{
    top: 49px;
}

.two{
    position: absolute;
    width: 234px;
    height: 15px;
    left: 29px;
    top: 82px;
    font-size: 13px;
    color: #878787;
}

.code{
    top: 106px;
}

.three{
    position: absolute;
    width: 70px;
    height: 16px;
    left: 180px;
    top: 111px;
    font-size: 14px;
    font-family: 'Arial';
    color: #0037FF;
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