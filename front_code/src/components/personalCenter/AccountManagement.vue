<template>
    <div class="big">
        <div class="body_top">账号管理</div>
        <div class="body_bottom">
            <ul>
                <li class="one">
                    <span>修改手机号码</span>
                    <p>认证信息与你的账号安全相关，请谨慎修改</p>
                    <router-link to="/PersonalCenter/AccountManagement/ChangePhone"><button>修改</button></router-link>
                </li>
                <li class="two">
                    <span>修改邮箱信息</span>
                    <p>邮箱信息与你的账号安全相关，请谨慎修改</p>
                    <router-link to="/PersonalCenter/AccountManagement/ChangEmailbox"><button>修改</button></router-link>
                </li>
                <li class="three">
                    <span>修改密码</span>
                    <p>设置复杂密码更能保护您的账号安全</p>
                    <router-link to="/PersonalCenter/AccountManagement/ChangePassword"><button>重置</button></router-link>
                </li>
                <li class="four">
                    <span>账号注销</span>
                    <p>为保证您的账号安全，需要满足相应的条件，才能提交申请</p>
                    <router-link to="/PersonalCenter/AccountManagement/LogOff"><button>注销</button></router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccountManagement',
}
</script>

<style scoped>
.big{
    background-color: red;
}

.body_top {
    position: absolute;
    width: 770px;
    height: 54px;
    left: 137px;
    top: -1px;
    padding-left: 30px;
    font-size: 17px;
    font-weight: 800;
    color: rgba(96, 94, 94, 0.7);
    line-height: 54px;
    border: 1px solid #797979;
    background-color: #fff;
}

.body_bottom {
    position: absolute;
    width: 800px;
    height: 480px;
    top: 54px;
    left: 137px;
    border: 1px solid #797979;
    background-color: rgba(255, 255, 255, 0.5);
}

ul{
    position: absolute;
    margin: 10px 56px;
}

li{
    position: absolute;
    width: 688px;
    height: 109px;
    /* background-color: gray; */
    border-bottom: 1px solid #797979;
}

span{
    position: absolute;
    /* width: 80px; */
    height: 16px;
    left: 9px;
    top: 41px;
    font-size: 20px;
    color: #333;
    font-weight: 800;
}

p{
    position: absolute;
    height: 16px;
    left: 9px;
    top: 72px;
    font-size: 14px;
    color: #333;
}

button{
    position: absolute;
    cursor: pointer;
    width: 36px;
    height: 21px;
    left: 642px;
    top: 67px;
    font-size: 18px;
    font-weight: 800;
    color: #0071FF;
    background-color: transparent;
    border: none;
    border-radius: 5px;
}

.two{
    top: 109px;
}

.three{
    top: 218px;
}

.four{
    top: 327px;
}
</style>