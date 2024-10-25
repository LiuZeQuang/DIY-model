<template>
    <div>
        <ul class="itt">
            <li></li>
            <router-link to="/PersonalCenter"><li class="it"><img class="one" src="../../../public/consumer/堆积 (1).png" alt=""><span>个人资料</span> </li></router-link>
            <router-link to="/PersonalCenter/CustomizedRecords"><li><img src="../../../public/personalCenter/厂商.png" alt=""><span>定制记录</span> </li></router-link>
            <router-link to="/PersonalCenter/PurchaseRecord"><li><img src="../../../public/personalCenter/订单.png" alt=""><span>购买记录</span> </li></router-link>
            <router-link to="/PersonalCenter/AccountManagement"><li><img src="../../../public/personalCenter/点击头像（设置）.png" alt=""><span>账号管理</span> </li></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'PersonalCenterNav',
    methods: {
        GALL(lis) {
            lis.forEach(item => {
                item.classList.remove('it');
            });
            lis[1].querySelector('img').src = require('../../../public/personalCenter/写作素材.png');
            lis[2].querySelector('img').src = require('../../../public/personalCenter/厂商.png');
            lis[3].querySelector('img').src = require('../../../public/personalCenter/订单.png');
            lis[4].querySelector('img').src = require('../../../public/personalCenter/点击头像（设置）.png');
        }
    },
    mounted() {
        this.$router.beforeEach((to, from, next) => {
            this.$nextTick(() => {
                var lis = document.querySelectorAll('.itt li');
                if (to.path === '/PersonalCenter' && lis[1]) {
                    this.GALL(lis);
                    lis[1].classList.add('it');
                    lis[1].querySelector('img').src = require('../../../public/consumer/堆积 (1).png');
                }
                else if (to.path === '/PersonalCenter/CustomizedRecords') {
                    this.GALL(lis);
                    lis[2].classList.add('it');
                    lis[2].querySelector('img').src = require('../../../public/consumer/厂房 (1).png');
                }
                else if (to.path === '/PersonalCenter/PurchaseRecord') {
                    this.GALL(lis);
                    lis[3].classList.add('it');
                    lis[3].querySelector('img').src = require('../../../public/consumer/订单 (1).png');
                }
                else if (to.path === '/PersonalCenter/AccountManagement') {
                    this.GALL(lis);
                    lis[4].classList.add('it');
                    lis[4].querySelector('img').src = require('../../../public/consumer/点击头像设置 (2).png');
                }
            });
            next();
        })
    }
}
</script>

<style scoped>
.it{
    background-color: #ddd;
}

.it span{
    color: #1296DB;
}

div{
    position: absolute;
    left: -1px;
    top: -1px;
}
ul{
    position: absolute;
    width: 137px;
    height: 535px;
    border: 1px solid #797979;
    background-color: #fff;
}

li{
    display: block;
    width: 137px;
    height: 54px;
    margin-left: -1px;
    margin-top: -1px;
    border: 1px solid #797979;
}

img{
    width: 28px;
    height: 28px;
    margin-left: 25px;
    margin-top: -3px;
    opacity: 0.7;
    vertical-align: middle;
}

.one{
    margin-left: 28px;
    margin-right: 2px;
    width: 23px;
    height: 23px;
}

span{
    display: inline-block;
    width: 60px;
    height: 17px;
    margin-left: 8px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 800;
    opacity: 0.7;
    color: #605E5E;
}
</style>