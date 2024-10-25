<template>
    <div>
        <ul class="itt">
            <li></li>
            <router-link to="/Avatar"><li class="it"><img src="../../../../public/consumer/icon_喇叭_2 (1).png" alt=""><span>全部通知</span> </li></router-link>
            <router-link to="/AvatarBuy"><li><img src="../../../../public/consumer/写作素材.png" alt=""><span>购买通知</span> </li></router-link>
            <router-link to="/AvatarDemand"><li><img src="../../../../public/consumer/订单.png" alt=""><span>需求通知</span> </li></router-link>
            <router-link to="/AvatarManufacturer"><li><img src="../../../../public/consumer/厂商.png" alt=""><span>厂商通知</span> </li></router-link>
            <router-link to="/DesignerAvatarDrawing"><li v-show="this.$store.state.user.shengfeng == 'designer'"><img src="../../../../public/consumer/图纸通知.png" alt=""><span>图纸通知</span> </li></router-link>
            <router-link to="/DesignerAvatarDesigner"><li v-show="this.$store.state.user.shengfeng == 'designer'"><img src="../../../../public/consumer/订单.png" alt=""><span>订单通知</span> </li></router-link>
            <router-link to="/ManufacturerAvatarDesigner"><li v-show="this.$store.state.user.shengfeng == 'manufacturer'"><img src="../../../../public/consumer/订单.png" alt=""><span>订单通知</span> </li></router-link>
            <router-link to="/ManufacturerAvatarFinish"><li v-show="this.$store.state.user.shengfeng == 'manufacturer'"><img src="../../../../public/consumer/成品.png" alt=""><span>成品通知</span> </li></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ConsumerNav',
    methods:{
        GALL(lis){
            lis.forEach(item => {
                item.classList.remove('it');
            });
            lis[1].querySelector('img').src = require('../../../../public/consumer/喇叭.png');
            lis[2].querySelector('img').src = require('../../../../public/consumer/写作素材.png');
            lis[3].querySelector('img').src = require('../../../../public/consumer/订单.png');
            lis[4].querySelector('img').src = require('../../../../public/consumer/厂商.png');
            lis[5].querySelector('img').src = require('../../../../public/consumer/图纸通知.png');
            lis[6].querySelector('img').src = require('../../../../public/consumer/订单.png');
            lis[7].querySelector('img').src = require('../../../../public/consumer/订单.png');
            lis[8].querySelector('img').src = require('../../../../public/consumer/成品.png');
        }
    },
    mounted(){
        this.$router.beforeEach((to, from, next) => {
            this.$nextTick(() => {
                var lis = document.querySelectorAll('.itt li');
                if (to.path === '/Avatar' && lis[1]) {
                    this.GALL(lis);
                    lis[1].classList.add('it');
                    lis[1].querySelector('img').src = require('../../../../public/consumer/icon_喇叭_2 (1).png');
                }
                else if (to.path === '/AvatarBuy') {
                    this.GALL(lis);
                    lis[2].classList.add('it');
                    lis[2].querySelector('img').src = require('../../../../public/consumer/堆积 (1).png');
                }
                else if (to.path === '/AvatarDemand') {
                    this.GALL(lis);
                    lis[3].classList.add('it');
                    lis[3].querySelector('img').src = require('../../../../public/consumer/订单 (1).png');
                }
                else if (to.path === '/AvatarManufacturer') {
                    this.GALL(lis);
                    lis[4].classList.add('it');
                    lis[4].querySelector('img').src = require('../../../../public/consumer/厂房 (1).png');
                }
                else if (to.path === '/DesignerAvatarDrawing') {
                    this.GALL(lis);
                    lis[5].classList.add('it');
                    lis[5].querySelector('img').src = require('../../../../public/consumer/blue (8).png');
                }
                else if (to.path === '/DesignerAvatarDesigner') {
                    this.GALL(lis);
                    lis[6].classList.add('it');
                    lis[6].querySelector('img').src = require('../../../../public/consumer/订单 (1).png');
                }
                else if (to.path === '/ManufacturerAvatarDesigner') {
                    this.GALL(lis);
                    lis[7].classList.add('it');
                    lis[7].querySelector('img').src = require('../../../../public/consumer/订单 (1).png');
                }
                else if (to.path === '/ManufacturerAvatarFinish') {
                    this.GALL(lis);
                    lis[8].classList.add('it');
                    lis[8].querySelector('img').src = require('../../../../public/consumer/blue (12).png');
                }
            });
            next();
        });
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
    width: 21px;
    height: 21px;
    margin-left: 25px;
    margin-top: -3px;
    opacity: 0.7;
    vertical-align: middle;
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