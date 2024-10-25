<!-- 消费者首页-消息通知 avatar -->
<template>
    <div class="w">
        <div v-if="showOverlay" class="overlay"></div>
        <div class="avatar">
            <PersonalCenterNav></PersonalCenterNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import PersonalCenterNav from './PersonalCenterNav.vue';
export default {
    name:'PersonalCenter',
    data() {
        return {
            showOverlay: false
        };
    },
    components:{
        PersonalCenterNav
    },
    mounted() {
        this.$router.beforeEach((to, from, next) => {
            if (to.path === '/PersonalCenter/AccountManagement/ChangePhone' || 
                to.path === '/PersonalCenter/AccountManagement/ChangePhoneL' ||
                to.path === '/PersonalCenter/AccountManagement/ChangePhoneLL' ||
                to.path === '/PersonalCenter/AccountManagement/ChangEmailbox' ||
                to.path === '/PersonalCenter/AccountManagement/ChangEmailboxL' ||
                to.path === '/PersonalCenter/AccountManagement/ChangEmailboxLL' ||
                to.path === '/PersonalCenter/AccountManagement/ChangePassword' ||
                to.path === '/PersonalCenter/AccountManagement/ChangePasswordL' ||
                to.path === '/PersonalCenter/AccountManagement/ChangePasswordLL' ||
                to.path === '/PersonalCenter/AccountManagement/LogOff' ||
                to.path === '/PersonalCenter/AccountManagement/LogOffL' ||
                to.path === '/PersonalCenter/AccountManagement/LogOffLL') {
                this.showOverlay = true;
            } else {
                this.showOverlay = false;
            }
            next();
        });
    }
}
</script>

<style scoped>
.w{
    position: relative;
    height: 600px;
    background-color: #fff;
    background-image: url("../../../public/personalCenter/background.png");
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
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