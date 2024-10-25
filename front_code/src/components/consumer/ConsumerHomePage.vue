<!-- 消费者首页-消息通知 avatar -->
<template>
    <div class="w">
        <div class="avatar">
            <ConsumerNav></ConsumerNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ConsumerNav from './avatar/ConsumerNav.vue';
export default {
    name:'ConsumerHomePage',
    components:{
        ConsumerNav
    }
}
</script>

<style scoped>
.w{
    position: relative;
    height: 600px;
    background-color: #fff;
    background-image: url("../../../public/consumer/background.png");
}

.avatar{
    position: relative;
    width: 938px;
    height: 535px;
    left: 44px;
    top: 36px;
    border: 1px solid #797979;
    /* background-color: #fff; */
}
</style>