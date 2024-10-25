<!-- 消费者-图纸购买 -->
<template>
  <div class="w">
    <div class="classification">
        <div class="icon">筛选:</div>
        <div @mouseenter="isShow1 = true" @mouseleave="isShow1 = false">
            <div class="price_range">价格区间 <img ref="priceImg1" :src="isS(isShow1)" alt=""></div>
            <div class="price_range_down" ref="down1" v-show="isShow1">
                <div class="price_range_down_left">
                    <p>最小值</p>
                    <input type="text">
                    <button>重置</button>
                </div>
                <div class="price_range_icon">——</div>
                <div class="price_range_down_right">
                    <p>最大值</p>
                    <input type="text">
                    <button>确定</button>
                </div>
            </div>
        </div>
        <div @mouseenter="isShow2 = true" @mouseleave="isShow2 = false">
        <div class="category_interval">类别 <img ref="priceImg2" :src="isS(isShow2)" alt=""></div>
            <div class="category_interval_down" ref="down2" v-show="isShow2">
                <li>类别1</li>
                <li>类别2</li>
                <li>类别3</li>
            </div>
        </div>
        <div @mouseenter="isShow3 = true" @mouseleave="isShow3 = false">
            <div class="back_price">是否还价 <img ref="priceImg3" :src="isS(isShow3)" alt=""></div>
            <div class="back_price_down" ref="down3" v-show="isShow3">
                <li>是</li>
                <li>否</li>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="product">
            <li @click="gotoDetail(item)" v-for="item in displayedProducts" :key="item.id">
                <img class="big_product" src="../../../../public/consumer/下载.png" alt="">
                <p>{{ item.name }}</p>
                <span>{{ item.price }}</span>
                <img class="collect" :src="collectImg(item.iscollect)" alt="">
            </li>
        </div>
        <div class="pagination">
            <div class="Page">
                <img class="left" @click="previousPage" src="../../../../public/consumer/上一页功能按钮.png" alt="">
                <li @click="rendering(page)" v-for="page in displayedPage" :key="page">{{page}}</li>
                <img class="right" @click="nextPage" src="../../../../public/consumer/下一页功能按钮.png" alt="">
                <span>共{{ totalPages }}页</span>
                <label for="">跳转到：</label>
                <input @blur="handleBlur" type="text" v-model="Page">
                <p>页</p>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'ConsumerDrawingPurchase',
    data(){
        return{
            products:[
                { id: 1, name: '零件小模型1', price: '￥29.9', iscollect: true },
                { id: 2, name: '零件小模型2', price: '￥29.9', iscollect: false },
                { id: 3, name: '零件小模型3', price: '￥29.9', iscollect: false },
                { id: 4, name: '零件小模型4', price: '￥29.9', iscollect: false },
                { id: 5, name: '零件小模型5', price: '￥29.9', iscollect: false },
                { id: 6, name: '零件小模型6', price: '￥29.9', iscollect: false },
                { id: 7, name: '零件小模型7', price: '￥29.9', iscollect: false },
                { id: 8, name: '零件小模型8', price: '￥29.9', iscollect: false },
                { id: 9, name: '零件小模型9', price: '￥29.9', iscollect: false },
                { id: 10, name: '零件小模型10', price: '￥29.9', iscollect: false },
                { id: 11, name: '零件小模型11', price: '￥29.9', iscollect: false },
                { id: 12, name: '零件小模型12', price: '￥29.9', iscollect: false },
                { id: 13, name: '零件小模型13', price: '￥29.9', iscollect: false },
                { id: 14, name: '零件小模型14', price: '￥29.9', iscollect: false },
                { id: 15, name: '零件小模型15', price: '￥29.9', iscollect: false },
                { id: 16, name: '零件小模型16', price: '￥29.9', iscollect: false },
                { id: 17, name: '零件小模型17', price: '￥29.9', iscollect: false },
                { id: 18, name: '零件小模型18', price: '￥29.9', iscollect: false },
                { id: 19, name: '零件小模型19', price: '￥29.9', iscollect: false },
                { id: 20, name: '零件小模型20', price: '￥29.9', iscollect: false },
                { id: 21, name: '零件小模型21', price: '￥29.9', iscollect: false },
                { id: 22, name: '零件小模型22', price: '￥29.9', iscollect: false },
                { id: 23, name: '零件小模型23', price: '￥29.9', iscollect: false },
                { id: 24, name: '零件小模型24', price: '￥29.9', iscollect: false },
                { id: 25, name: '零件小模型25', price: '￥29.9', iscollect: false },
                { id: 26, name: '零件小模型26', price: '￥29.9', iscollect: false },
                { id: 27, name: '零件小模型27', price: '￥29.9', iscollect: false },
                { id: 28, name: '零件小模型28', price: '￥29.9', iscollect: false },
                { id: 29, name: '零件小模型29', price: '￥29.9', iscollect: false },
                { id: 30, name: '零件小模型30', price: '￥29.9', iscollect: false },
                { id: 31, name: '零件小模型31', price: '￥29.9', iscollect: false },
                { id: 32, name: '零件小模型32', price: '￥29.9', iscollect: false },
                { id: 33, name: '零件小模型33', price: '￥29.9', iscollect: false },
                { id: 34, name: '零件小模型34', price: '￥29.9', iscollect: false },
                { id: 35, name: '零件小模型35', price: '￥29.9', iscollect: false },
                { id: 36, name: '零件小模型36', price: '￥29.9', iscollect: false },
                { id: 37, name: '零件小模型37', price: '￥29.9', iscollect: false },
                { id: 38, name: '零件小模型38', price: '￥29.9', iscollect: false },
                { id: 39, name: '零件小模型39', price: '￥29.9', iscollect: false },
                { id: 40, name: '零件小模型40', price: '￥29.9', iscollect: false },
                { id: 41, name: '零件小模型41', price: '￥29.9', iscollect: false },
                { id: 42, name: '零件小模型42', price: '￥29.9', iscollect: false },
                { id: 43, name: '零件小模型43', price: '￥29.9', iscollect: false },
                { id: 44, name: '零件小模型44', price: '￥29.9', iscollect: false },
                { id: 45, name: '零件小模型45', price: '￥29.9', iscollect: false },
                { id: 46, name: '零件小模型46', price: '￥29.9', iscollect: false },
                { id: 47, name: '零件小模型47', price: '￥29.9', iscollect: false },
                { id: 48, name: '零件小模型48', price: '￥29.9', iscollect: false },
                { id: 49, name: '零件小模型49', price: '￥29.9', iscollect: false },
                { id: 50, name: '零件小模型50', price: '￥29.9', iscollect: false },
                { id: 51, name: '零件小模型51', price: '￥29.9', iscollect: false },
                { id: 52, name: '零件小模型52', price: '￥29.9', iscollect: false },
                { id: 53, name: '零件小模型53', price: '￥29.9', iscollect: false },
                { id: 54, name: '零件小模型54', price: '￥29.9', iscollect: false },
                { id: 55, name: '零件小模型55', price: '￥29.9', iscollect: false },
                { id: 56, name: '零件小模型56', price: '￥29.9', iscollect: false },
                { id: 57, name: '零件小模型57', price: '￥29.9', iscollect: false },
                { id: 58, name: '零件小模型58', price: '￥29.9', iscollect: false },
                { id: 59, name: '零件小模型59', price: '￥29.9', iscollect: false },
                { id: 60, name: '零件小模型60', price: '￥29.9', iscollect: false },
                { id: 61, name: '零件小模型61', price: '￥29.9', iscollect: false },
                { id: 62, name: '零件小模型62', price: '￥29.9', iscollect: false },
                { id: 63, name: '零件小模型63', price: '￥29.9', iscollect: false },
                { id: 64, name: '零件小模型64', price: '￥29.9', iscollect: false },
                { id: 65, name: '零件小模型65', price: '￥29.9', iscollect: false },
                { id: 66, name: '零件小模型66', price: '￥29.9', iscollect: false },
                { id: 67, name: '零件小模型67', price: '￥29.9', iscollect: false },
                { id: 68, name: '零件小模型68', price: '￥29.9', iscollect: false },
                { id: 69, name: '零件小模型69', price: '￥29.9', iscollect: false },
                { id: 70, name: '零件小模型70', price: '￥29.9', iscollect: false },
                { id: 71, name: '零件小模型71', price: '￥29.9', iscollect: false },
                { id: 72, name: '零件小模型72', price: '￥29.9', iscollect: false },
                { id: 73, name: '零件小模型73', price: '￥29.9', iscollect: false },
                { id: 74, name: '零件小模型74', price: '￥29.9', iscollect: false },
                { id: 75, name: '零件小模型75', price: '￥29.9', iscollect: false },
                { id: 76, name: '零件小模型76', price: '￥29.9', iscollect: false },
                { id: 77, name: '零件小模型77', price: '￥29.9', iscollect: false },
                { id: 78, name: '零件小模型78', price: '￥29.9', iscollect: false },
                { id: 79, name: '零件小模型79', price: '￥29.9', iscollect: false },
            ],
            Page:1,
            currentPage:1,//页数
            topPage:1,//脚本页数
            isShow1:false,
            isShow2:false,
            isShow3:false
        }
    },
    methods:{
        nextPage(){
            if(this.currentPage < this.totalPages){
                this.topPage++
            }
        },
        previousPage(){
            if(this.topPage > 1){
                this.topPage--
            }
        },
        rendering(page){
            console.log(page);
            var pages = document.querySelector('.Page').querySelectorAll('li')
            this.currentPage = page
            pages.forEach(element => {
                element.classList.remove('render')
            });
            pages[(page - 1)%4].classList.add('render')
        },
        handleBlur(){
            if(this.Page <= this.totalPages) this.currentPage = this.Page
            else this.Page = this.currentPage
            
        },
        gotoDetail(item){
            this.$router.push({path:'/DrawingDetail', query:{ item:item }})
        }
    },
    computed:{
        displayedProducts() {
            const startIndex = (this.currentPage - 1) * 12;
            const endIndex = this.currentPage * 12;
            return this.products.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.products.length / 12);
        },
        Pages() {
            var j = [];
            for (var i = 1; i <= this.totalPages; i++) {
                j[i - 1] = i
            }
            return j;
        },
        displayedPage() {
            const startPage = (this.topPage - 1) * 4;
            const endInPage = this.topPage * 4;
            return this.Pages.slice(startPage, endInPage);
        },
        collectImg(){
            return (item) =>{
                return item ? require("../../../../public/consumer/图纸购买（已收藏） .png") : require("../../../../public/consumer/图纸购买（未收藏）.png")
            }
        },
        isS() {
            return (item) => {
                return item ? require('../../../../public/consumer/上_u19.png') : require("../../../../public/consumer/下_u18.png")
            }
        }
    }
}
</script>

<style scoped>
.w{
    height: 790px;
    background-color: #fff;
}

.classification{
    position: relative;
    width: 935px;
    height: 43px;
    left: 43px;
    top: 21px;
    border-top: 1px solid #797979;
    border-bottom: 1px solid #797979;
}

.icon{
    position: absolute;
    width: 80px;
    font-size: 16px;
    text-align: center;
    line-height: 43px;
    color: #333;
    background-color: #F2F2F2;
}

.price_range img,
.category_interval img,
.back_price img{
    width: 17px;
    height: 10px;
}

.price_range,
.category_interval,
.back_price{
    position: absolute;
    cursor: pointer;
    width: 125px;
    height: 43px;
    font-size: 16px;
    text-align: center;
    line-height: 43px;
    color: #333;
    border-right: 1px solid #797979;
}

.price_range{
    left: 80px;
    border-left: 1px solid #797979;
}

.category_interval{
    left: 205px;
}

.back_price{
    left: 330px;
}

.price_range_down{
    position: absolute;
    width: 218px;
    height: 147px;
    left: 80px;
    top: 43px;
    border: 1px solid #797979;
    background-color: #fff ;
    z-index: 1;
}

.price_range_down_left{
    position: absolute;
    left: 24px;
}

.price_range_icon{
    position: absolute;
    width: 36px;
    left: 85px;
    top: 59px;
    font-size: 13px;
    text-align: center;
}

.price_range_down_right{
    position: absolute;
    left: 136px;
}

.price_range_down p{
    position: absolute;
    width: 48px;
    height: 19px;
    top: 23px;
    font-size: 16px;
}

.price_range_down input{
    position: absolute;
    width: 48px;
    height: 26px;
    top: 54px;
    font-size: 13px;
    color: #333;
    background-color: #F2F2F2;
    border: 1px solid #797979;
    text-align: center;
}

.price_range_down button{
    position: absolute;
    cursor: pointer;
    width: 60px;
    height: 20px;
    top: 104px;
    margin-left: -5px;
    font-size: 13px;
    color: #333;
    background-color: #fff;
    border: 1px solid #797979;
    border-radius: 5px;

}

.category_interval_down,
.back_price_down{
    position: absolute;
    width: 123px;
    top: 44px;
    background-color: #fff ;
    z-index: 1;
}

.category_interval_down{
    left: 206px;
}

.back_price_down{
    left: 330px;
}

.category_interval_down li,
.back_price_down li {
    cursor: pointer;
    width: 123px;
    height: 40px;
    font-size: 13px;
    text-align: center;
    line-height: 40px;
    color: #333;
    border: 1px solid #797979;
    border-radius: 5px;
    margin-top: -1px;
}

.body{
    position: relative;
    width: 936px;
    height: 650px;
    left: 44px;
    top: 37px;
    border: 1px solid #797979;
    border-radius: 10px;
}

.product{
    height: 540px;
    margin-top: 35px;
    /* background: red; */
}

.product li{
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 278px;
    height: 115px;
    background-color: #F2F2F2;
    margin: 0 17px 17px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.35);
}

.big_product{
    position: absolute;
    display: inline-block;
    width: 90px;
    height: 90px;
    margin: 12.5px 0 12.5px 20px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.35);
}
.product p{
    position: absolute;
    display: inline-block;
    left: 130px;
    top: 18px;
    font-size: 17px;
    font-weight: 800;
    color: #605E5E;
}

.product span{
    position: absolute;
    display: inline-block;
    left: 130px;
    top: 75px;
    font-size: 20px;
    font-weight: 800;
    color: #FF0000;
}

.collect{
    position: absolute;
    display: inline-block;
    width: 30px;
    left: 240px;
    top: 80px;
}

.pagination{
    position: absolute;
    width: 936px;
    height: 75px;
    /* background: blue; */
}

.Page{
    position: absolute;
    width: 380px;
    height: 30px;
    top: 25px;
    left: 293px;
    font-size: 13px;
}

.Page img{
    float: left;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #fff;
    /* border: 1px solid #000; */
}

.Page li{
    float: left;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
    margin-right: 8px;
}

.render{
    color: #fff;
    background-color: #000;
}

.Page li:hover{
    color: #fff;
    background-color: #000;
}

.Page span {
    float: left;
    width: 46px;
    height: 26px;
    margin-right: 15px;
    text-align: center;
    line-height: 26px;
}

.Page label {
    float: left;
    height: 26px;
    margin-right: 15px;
    text-align: center;
    line-height: 26px;
}

.Page input {
    width: 23px;
    float: left;
    height: 19px;
    margin-right: 7px;
    margin-top: 2px;
    text-align: center;
    line-height: 26px;
}

.Page p {
    float: left;
    height: 26px;
    margin-right: 0px;
    text-align: center;
    line-height: 26px;
}
</style>