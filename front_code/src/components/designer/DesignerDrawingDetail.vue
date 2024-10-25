<!-- 设计者-订单详情 -->
<template>
  <div class="w">
    <div class="detail">
      <img class="icon" src="../../../public/consumer/返回.png" alt="" @click="$router.go(-1)">
      <img @click="iscollect = true" class="big_product" src="../../../public/consumer/下载.png" alt="">
      <img class="collect" :src="collectImg" alt="">
      <p class="title">{{ this.$route.query.item.name }}</p>
      <span class="text_body">简介：
        <p>这是一款创意十足的玩具汽车，设计精巧，色彩鲜艳。它采用环保材料制成，安全可靠，适合儿童玩耍。这款玩具汽车拥有可活动的轮子和车门，孩子们可以轻松地推动它在地板上滑行，增加了互动性和乐趣。而且，它还配备了逼真的声音效果，如引擎轰鸣和喇叭声，让孩子仿佛置身于真实的行车场景中。这款玩具汽车不仅能够培养孩子的动手能力和想象力，还能激发他们对汽车和交通的兴趣，是家庭娱乐时间的理想选择。</p>
      </span>
      <div class="budget">预算:</div>
      <span class="start">￥500</span>
      <span class="middle">——</span>
      <span class="end">￥520</span>
      <a href="#/ChatWindow">联系客户</a>
      <button @click="onel" class="back_btn"><img src="../../../public/consumer/金钱小图标.png" alt="">还价</button>
      <button @click="twol" class="buy_btn"><img src="../../../public/designer/接单.png" alt="">接单</button>
    </div>
    <DesignerDrawingBack id="one" style="display: none;"></DesignerDrawingBack>
    <DesignerDrawingBuy id="two" style="display: none;"></DesignerDrawingBuy>
    
    <ModelShow :message="stl" v-show="iscollect" style="display: none;">
      <img src="../../../public/static/返回.png" alt="" @click="iscollect = false">
    </ModelShow>
  </div>
</template>

<script>
import DesignerDrawingBuy from './DesignerDrawingBuy.vue';
import DesignerDrawingBack from './DesignerDrawingBack.vue';
import ModelShow from '../modelShow/ModelShow.vue'
export default {
    name: 'DesignerDrawingDetail',
    data(){
      return{
        stl:'../../../public/static/wu.stl',
        iscollect:false
      }
    },
    methods: {
      onel() {
        document.getElementById("one").style.display = "block";
        document.getElementById("two").style.display = "none";
      },
      twol() {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "block";
      },
      threel() {
        document.getElementById("three").style.display = "block";
      }
    },
    components:{
        DesignerDrawingBuy,
        DesignerDrawingBack,
        ModelShow
    },
    computed:{
      collectImg() {
        return this.$route.query.item.iscollect ? require("../../../public/consumer/图纸购买（已收藏） .png") : require("../../../public/consumer/图纸购买（未收藏）.png")
      }
    }
}
</script>

<style scoped>
.w{
  height: 750px;
  background-color: #fff;
}

.detail{
    position: relative;
    width: 936px;
    height: 542px;
    left: 44px;
    top: 26px;
    border: 1px solid #797979;
    border-radius: 10px;
}

.icon{
  position: absolute;
  width: 34px;
  height: 34px;
  left: 25px;
  top: 16px;
  cursor: pointer;
}

.big_product{
  position: absolute;
  width: 544px;
  height: 381px;
  left: 22px;
  top: 65px;
}

.collect{
  position: absolute;
  width: 50px;
  height: 50px;
  left: 872px;
  top: 16px;
  cursor: pointer;
}

.title{
  position: absolute;
  height: 23px;
  left: 601px;
  top: 60px;
  font-size: 20px;
  font-weight: 800;
  color: #605E5E;
}

.text_body{
  position: absolute;
  width: 306px;
  height: 232px;
  left: 601px;
  top: 125px;
  font-size: 16px;
  font-weight: 800;
  color: #605E5E;
}

.text_body p{
  text-indent: 2em;
  line-height: 1.1;
}

.budget{
  position: absolute;
  width: 63px;
  height: 24px;
  left: 604px;
  top: 362px;
  font-size: 21px;
  color: #605E5E;
}

.start{
  position: absolute;
  left: 670px;
  top: 365px;
  font-size: 20px;
  font-weight: 800;
  color: #D9001B;
}

.middle{
  position: absolute;
  left: 750px;
  top: 362px;
  font-size: 21px;
  color: #605E5E;
}

.end{
  position: absolute;
  left: 810px;
  top: 365px;
  font-size: 20px;
  font-weight: 800;
  color: #D9001B;
}

a{
  position: absolute;
  left: 835px;
  top: 410px;
  font-size: 18px;
  color: #0124FC;
  text-decoration: underline;
  cursor: pointer;
}

.detail button {
  position: absolute;
  width: 137px;
  height: 43px;
  top: 483px;
  padding-left: 35px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  text-align: center;
  line-height: 43px;
  border-radius: 10px;
  border: 1px solid #797979;
}

.back_btn{
  left: 604px;
  background: linear-gradient(0deg, rgba(255, 109, 0, 1) 0%, rgba(249, 181, 0, 1) 47%);
  cursor: pointer;
}

.buy_btn{
  left: 761px;
  background: linear-gradient(0deg, rgba(249, 3, 3, 1) 0%, rgba(255, 109, 0, 1) 54%);
  cursor: pointer;
}

button>img{
  position: absolute;
  width: 30px;
  left: 25px;
  top: 8px;
}
</style>