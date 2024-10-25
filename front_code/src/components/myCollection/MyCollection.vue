<template>
    <div class="w">
        <div class="top">
            <img src="../../../public/consumer/图纸购买（已收藏） .png" alt="">
            <span>我的收藏</span>
        </div>
        <div class="body">
            <div class="product">
                <li @click="gotoDetail(item)" v-for="item in products" :key="item.id">
                    <img class="big_product" src="../../../public/consumer/下载.png" alt="">
                    <p>{{ item.name }}</p>
                    <span>{{ item.price }}</span>
                    <img class="collect" src="../../../public/consumer/图纸购买（已收藏） .png" alt="">
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCollection',
    data() {
        return {
            products: [
                { id: 1, name: '零件小模型1', price: '￥29.9', iscollect: true },
                { id: 2, name: '零件小模型2', price: '￥29.9', iscollect: true },
                { id: 3, name: '零件小模型3', price: '￥29.9', iscollect: true },
                { id: 4, name: '零件小模型4', price: '￥29.9', iscollect: true },
                { id: 5, name: '零件小模型5', price: '￥29.9', iscollect: true },
                { id: 6, name: '零件小模型6', price: '￥29.9', iscollect: true },
                { id: 7, name: '零件小模型7', price: '￥29.9', iscollect: true },
                { id: 8, name: '零件小模型8', price: '￥29.9', iscollect: true },
                { id: 9, name: '零件小模型9', price: '￥29.9', iscollect: true },
                { id: 10, name: '零件小模型10', price: '￥29.9', iscollect: true },
                { id: 11, name: '零件小模型11', price: '￥29.9', iscollect: true },
                { id: 12, name: '零件小模型12', price: '￥29.9', iscollect: true },
                { id: 13, name: '零件小模型13', price: '￥29.9', iscollect: true },
                { id: 14, name: '零件小模型14', price: '￥29.9', iscollect: true },
                { id: 15, name: '零件小模型15', price: '￥29.9', iscollect: true },
                { id: 16, name: '零件小模型16', price: '￥29.9', iscollect: true },
                { id: 17, name: '零件小模型17', price: '￥29.9', iscollect: true },
                { id: 18, name: '零件小模型18', price: '￥29.9', iscollect: true },
                { id: 19, name: '零件小模型19', price: '￥29.9', iscollect: true },
                { id: 20, name: '零件小模型20', price: '￥29.9', iscollect: true },
                { id: 21, name: '零件小模型21', price: '￥29.9', iscollect: true },
                { id: 22, name: '零件小模型22', price: '￥29.9', iscollect: true },
                { id: 23, name: '零件小模型23', price: '￥29.9', iscollect: true },
                { id: 24, name: '零件小模型24', price: '￥29.9', iscollect: true },
                { id: 25, name: '零件小模型25', price: '￥29.9', iscollect: true },
                { id: 26, name: '零件小模型26', price: '￥29.9', iscollect: true },
                { id: 27, name: '零件小模型27', price: '￥29.9', iscollect: true },
                { id: 28, name: '零件小模型28', price: '￥29.9', iscollect: true },
                { id: 29, name: '零件小模型29', price: '￥29.9', iscollect: true },
                { id: 30, name: '零件小模型30', price: '￥29.9', iscollect: true },
                { id: 31, name: '零件小模型31', price: '￥29.9', iscollect: true },
                { id: 32, name: '零件小模型32', price: '￥29.9', iscollect: true },
                { id: 33, name: '零件小模型33', price: '￥29.9', iscollect: true },
                { id: 34, name: '零件小模型34', price: '￥29.9', iscollect: true },
                { id: 35, name: '零件小模型35', price: '￥29.9', iscollect: true },
                { id: 36, name: '零件小模型36', price: '￥29.9', iscollect: true },
                { id: 37, name: '零件小模型37', price: '￥29.9', iscollect: true },
                { id: 38, name: '零件小模型38', price: '￥29.9', iscollect: true },
                { id: 39, name: '零件小模型39', price: '￥29.9', iscollect: true },
                { id: 40, name: '零件小模型40', price: '￥29.9', iscollect: true },
                { id: 41, name: '零件小模型41', price: '￥29.9', iscollect: true },
                { id: 42, name: '零件小模型42', price: '￥29.9', iscollect: true },
                { id: 43, name: '零件小模型43', price: '￥29.9', iscollect: true },
                { id: 44, name: '零件小模型44', price: '￥29.9', iscollect: true },
                { id: 45, name: '零件小模型45', price: '￥29.9', iscollect: true },
                { id: 46, name: '零件小模型46', price: '￥29.9', iscollect: true },
                { id: 47, name: '零件小模型47', price: '￥29.9', iscollect: true },
                { id: 48, name: '零件小模型48', price: '￥29.9', iscollect: true },
                { id: 49, name: '零件小模型49', price: '￥29.9', iscollect: true },
                { id: 50, name: '零件小模型50', price: '￥29.9', iscollect: true },
                { id: 51, name: '零件小模型51', price: '￥29.9', iscollect: true },
                { id: 52, name: '零件小模型52', price: '￥29.9', iscollect: true },
                { id: 53, name: '零件小模型53', price: '￥29.9', iscollect: true },
                { id: 54, name: '零件小模型54', price: '￥29.9', iscollect: true },
                { id: 55, name: '零件小模型55', price: '￥29.9', iscollect: true },
                { id: 56, name: '零件小模型56', price: '￥29.9', iscollect: true },
                { id: 57, name: '零件小模型57', price: '￥29.9', iscollect: true },
                { id: 58, name: '零件小模型58', price: '￥29.9', iscollect: true },
                { id: 59, name: '零件小模型59', price: '￥29.9', iscollect: true },
                { id: 60, name: '零件小模型60', price: '￥29.9', iscollect: true },
                { id: 61, name: '零件小模型61', price: '￥29.9', iscollect: true },
                { id: 62, name: '零件小模型62', price: '￥29.9', iscollect: true },
                { id: 63, name: '零件小模型63', price: '￥29.9', iscollect: true },
                { id: 64, name: '零件小模型64', price: '￥29.9', iscollect: true },
                { id: 65, name: '零件小模型65', price: '￥29.9', iscollect: true },
                { id: 66, name: '零件小模型66', price: '￥29.9', iscollect: true },
                { id: 67, name: '零件小模型67', price: '￥29.9', iscollect: true },
                { id: 68, name: '零件小模型68', price: '￥29.9', iscollect: true },
                { id: 69, name: '零件小模型69', price: '￥29.9', iscollect: true },
                { id: 70, name: '零件小模型70', price: '￥29.9', iscollect: true },
                { id: 71, name: '零件小模型71', price: '￥29.9', iscollect: true },
                { id: 72, name: '零件小模型72', price: '￥29.9', iscollect: true },
                { id: 73, name: '零件小模型73', price: '￥29.9', iscollect: true },
                { id: 74, name: '零件小模型74', price: '￥29.9', iscollect: true },
                { id: 75, name: '零件小模型75', price: '￥29.9', iscollect: true },
                { id: 76, name: '零件小模型76', price: '￥29.9', iscollect: true },
                { id: 77, name: '零件小模型77', price: '￥29.9', iscollect: true },
                { id: 78, name: '零件小模型78', price: '￥29.9', iscollect: true },
                { id: 79, name: '零件小模型79', price: '￥29.9', iscollect: true },
            ],
        }
    },
    methods: {
        gotoDetail(item) {
            this.$router.push({ path: '/MyCollection/DrawingDetail', query: { item: item } })
        }
    },
}
</script>

<style scoped>
.w {
    height: 710px;
    background-color: #fff;
}

.top{
    position: relative;
    width: 936px;
    height: 54px;
    left: 44px;
    top: 38px;
    border: 1px solid #797979;
}

.top img{
    position: absolute;
    width: 30px;
    left: 14px;
    top: 11px;
}

.top span{
    position: absolute;
    width: 80px;
    height: 23px;
    left: 50px;
    top: 14px;
    font-size: 20px;
    font-weight: 800;
    color: #605E5E;

}

.body {
    position: relative;
    width: 936px;
    left: 44px;
    top: 37px;
    border: 1px solid #797979;
}

.product {
    height: 540px;
    padding-top: 14px;
    padding-bottom: 0px;
    overflow: auto;
}

.product li {
    position: relative;
    display: inline-block;
    width: 278px;
    height: 115px;
    background-color: #F2F2F2;
    margin: 0 13px 17px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.35);
}

.big_product {
    position: absolute;
    display: inline-block;
    width: 90px;
    height: 90px;
    margin: 12.5px 0 12.5px 20px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.35);
}

.product p {
    position: absolute;
    display: inline-block;
    left: 130px;
    top: 18px;
    font-size: 17px;
    font-weight: 800;
    color: #605E5E;
}

.product span {
    position: absolute;
    display: inline-block;
    left: 130px;
    top: 75px;
    font-size: 20px;
    font-weight: 800;
    color: #FF0000;
}

.collect {
    position: absolute;
    display: inline-block;
    width: 30px;
    left: 240px;
    top: 80px;
}
</style>