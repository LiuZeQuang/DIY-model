<template>
    <div class="bd">
        <a href="#/PersonalCenter/AccountManagement"><img class="icon" src="../../../../public/personalCenter/退出按钮.png" alt=""></a>
        <p class="title">修改密码</p>
        <input class="code1" type="text" placeholder="请输入新密码">
        <p class="cuowu1">两次密码不一致！</p>
        <p class="cuowu2">两次密码不一致！</p>
        <input class="code2" type="text" placeholder="确认密码">
        <a href="#/PersonalCenter/AccountManagement/ChangePasswordLL"><button class="last">下一步</button></a>
    </div>
</template>

<script>
export default {
    name: 'ChangePasswordL'
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

.code1,
.code2{
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

.code1{
    top: 49px;
}

.code2{
    top: 96px;
}

.cuowu1,
.cuowu2{
    position: absolute;
    width: 104px;
    height: 15px;
    left: 29px;
    font-size: 13px;
    color: #FF0000;
}

.cuowu1{
    top: 79px;
}

.cuowu2{
    top: 126px;
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