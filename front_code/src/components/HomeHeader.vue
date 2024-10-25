<!-- 消费者-头部 -->
<template>
    <div class="home_header w">
        <router-link to="/"><img class="tou" src="../../public/home/logo__black.png" alt=""></router-link>
        <ul class="top">
            <a href="http://localhost:8080/"><li @click="showList = false">个性设计</li></a>
                
            <!-- </router-link> -->
            <router-link to="/Drawing">
                <li @click="showList = false">图纸购买</li>
            </router-link>
            <router-link to="/Demand">
                <li @click="showList = false">发布需求</li>
            </router-link>
            <router-link to="/Manufacturer">
                <li @click="showList = false">厂商定制</li>
            </router-link>
            <router-link to="/DesignerDemand" v-show="this.$store.state.user.shengfeng == 'designer'">
                <li @click="showList = false">发布图纸</li>
            </router-link>
            <router-link to="/DesignerDrawingPurchase" v-show="this.$store.state.user.shengfeng == 'designer'">
                <li @click="showList = false">接取订单</li>
            </router-link>
            <router-link to="/ManufacturerDrawingPurchase" v-show="this.$store.state.user.shengfeng == 'manufacturer'">
                <li @click="showList = false">接取订单</li>
            </router-link>
            <router-link to="/ManufacturerDemand" v-show="this.$store.state.user.shengfeng == 'manufacturer'">
                <li @click="showList = false">发布成品</li>
            </router-link>
        </ul>
        <!-- 登录成功后显示 -->
        <div class="touxian" v-show="this.$store.state.user.shengfeng != ''">
            <span>用户名称</span>
            <img class="avatar" @mouseenter="showList = true" src="../../public/consumer/Avatar.jpg" alt="">
            <router-link to="/Avatar">
                <img class="notice" src="../../public/consumer/通知.png" alt="">
            </router-link>
        </div>
        <!-- 登录 -->
        <router-link to="/LogIn"><div class="logIn" v-show="this.$store.state.user.shengfeng == ''">登录</div></router-link>
        <ul class="top_list" v-show="showList"  @mouseleave="showList = false">
            <router-link to="/PersonalCenter"><li class="one"><img src="../../public/home/用户.png" alt=""><h3>个人中心</h3></li></router-link>
            <router-link to="/MyCollection"><li class="two"><img src="../../public/home/点击头像（个人收藏）.png" alt=""><h3>我的收藏</h3></li></router-link>
            <router-link to="/DesignerActivation"><li class="three"><img src="../../public//home/设计者.png" alt=""><h3>设计家</h3></li></router-link>
            <router-link to="/ManufacturerActivation"><li class="four"><img src="../../public/home/厂商.png" alt=""><h3>厂家中心</h3></li></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeHeader",
    data(){
        return{
            showList: false
        }
    },
    methods: {
        zhuantai(){
            if(this.showList)
                this.showList = false
            else
                this.showList = true
        }
    }
}
</script>

<style scoped>
.home_header {
    display: block;
    height: 80px;
    background-image: linear-gradient(to right, #232b2d, #d7d7d7);
}

.tou,
.avatar,
.notice {
    display: inline-block;
    float: left;
    width: 65px;
    height: 65px;
    margin: 7.5px 17.5px 0 40px;
}

.logIn{
    display: block;
    float: right;
    width: 34px;
    height: 20px;
    font-size: 17px;
    font-weight: 800;
    color: #605E5E;
    margin-top: 28px;
    margin-right: 60px;
}

.logIn:hover{
    color: #000;
}

.top {
    display: inline-block;
    margin: 0;
    padding: 0;
    float: left;
}

.top li {
    display: inline-block;
    width: 95px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 17px;
    font-weight: 800;
}

.top li:hover{
    color: #1296DB;
}

.avatar {
    float: right;
    width: 50px;
    height: 50px;
    margin-top: 13px;
    margin-left: 10px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
    /* opacity: 0.35; */
    cursor: pointer;
}

span {
    float: right;
    width: 68px;
    height: 20px;
    margin-top: 28px;
    color: #605E5E;
    font-size: 17px;
    font-weight: 800;
    margin-right: 40px;
}

.notice {
    float: right;
    width: 30px;
    height: 30px;
    margin-right: 0;
    margin-left: 0;
    margin-top: 26px;
    font-weight: 800;
    font-size: 13px;
}

.top_list{
    position: relative;
    width: 168px;
    height: 192px;
    top: 80px;
    left: 845px;
    border-radius: 8px;
    z-index: 1;
    background-color: #F2F2F2;
}

.top_list li{
    position: absolute;
    left: 13px;
    margin-top: 5px;
    width: 144px;
    height: 40px;
}

.top_list li:hover{
    border-radius: 5px;
    background-color: #ddd;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
}

.one img{
    position: absolute;
    width: 40px;
    left: 18px;
    top: 4px;
}

.one h3{
    position: absolute;
    display: inline-block;
    width: 63px;
    height: 18px;
    left: 69px;
    top: 14px;
    font-size: 15px;
    color: #333;
}

.two{
    position: absolute;
    top: 48px;
    left: 0;
}

.two img{
    position: absolute;
    width: 27px;
    left: 25px;
    top: 10px;
}

.two h3{
    position: absolute;
    display: inline-block;
    width: 63px;
    height: 18px;
    left: 69px;
    top: 13px;
    font-size: 15px;
    color: #333;
}

.three{
    position: absolute;
    top: 96px;
    left: 0;
}

.three img{
    position: absolute;
    width: 33px;
    left: 24px;
    top: 8px;
}

.three h3{
    position: absolute;
    display: inline-block;
    width: 63px;
    height: 18px;
    left: 69px;
    top: 13px;
    font-size: 15px;
    color: #333;
}

.four{
    position: absolute;
    top: 144px;
    left: 0;
}

.four img{
    position: absolute;
    width: 28px;
    left: 25px;
    top: 10px;
}

.four h3{
    position: absolute;
    display: inline-block;
    width: 63px;
    height: 18px;
    left: 69px;
    top: 14px;
    font-size: 15px;
    color: #333;
}
</style>