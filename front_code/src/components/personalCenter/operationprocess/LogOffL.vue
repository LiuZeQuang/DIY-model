<template>
    <div class="bd">
        <a href="#/PersonalCenter/AccountManagement"><img class="icon" src="../../../../public/personalCenter/退出按钮.png" alt=""></a>
        <p class="title">账号注销</p>
        <p class="one">账号注销后，您将无法登录易创账号，且不支持找回任何个人资料。</p>
        <input class="code" type="text" placeholder="请输入“我已确认注销账号”">
        <a href="#/PersonalCenter/AccountManagement/LogOffLL"><button class="last">注销账号</button></a>
    </div>
</template>

<script>
export default {
    name: 'LogOffL'
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
    width: 238px;
    height: 32px;
    left: 29px;
    top: 50px;
    font-family: 'Arial';
    font-size: 14px;
    color: #333;
}

.code{
    position: absolute;
    width: 219px;
    height: 28px;
    left: 29px;
    top: 106px;
    font-size: 13px;
    color: #9B9B9B;
    border: 1px solid #006EFF;
    padding-left: 10px;
    border-radius: 3px;
    outline: none;
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