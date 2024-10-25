<template>
    <div>
        <div class="body_top">购买记录</div>
        <div class="body_bottom">
            <div class="top">
                <div class="order_details">订单详情</div>
                <div class="amount_money">金额</div>
                <div class="status">订单状态</div>
            </div>
            <ul>
                <li>
                    <div class="order_no">
                        <span class="data">2024-04-01</span>
                        <span class="num_id">订单号:12346285464721</span>
                        <span class="factory_name">辛巴工厂</span>
                        <img class="de" src="../../../../public/logIn/de.png" alt="">
                    </div>
                    <div class="order_goods">
                        <div class="order_details_a">
                            <img class="product" src="../../../../public/logIn/下载.png" alt="">
                            <span class="product_name">零件小模型</span>
                            <span class="product_details">该设计图的描述：<p></p>1.简单，<p></p>2.尺寸：16cc</span>
                            <span class="product_number">×200</span>
                            <span class="souhou">申请售后</span>
                            <a class="contact_manufacturer" href="#/ChatWindow">联系厂家</a>
                        </div>
                        <div class="amount_money_a">
                            <span class="price">￥2000.00</span>
                            <span class="xian"></span>
                            <span class="online_payment">在线支付</span>
                        </div>
                        <div class="status_a">
                            <a class="dingdan" href="#/PersonalCenter/PurchaseRecord/PurchaseDrawingDetail">订单详细</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="order_no">
                        <span class="data">2024-04-01</span>
                        <span class="num_id">订单号:12346285464721</span>
                        <span class="factory_name">辛巴工厂</span>
                        <img class="de" src="../../../../public/logIn/de.png" alt="">
                    </div>
                    <div class="order_goods">
                        <div class="order_details_a">
                            <img class="product" src="../../../../public/logIn/下载.png" alt="">
                            <span class="product_name">零件小模型</span>
                            <span class="product_details">该设计图的描述：<p></p>1.简单，<p></p>2.尺寸：16cc</span>
                            <span class="product_number">×200</span>
                            <span class="souhou">申请售后</span>
                            <a class="contact_manufacturer" href="#/ChatWindow">联系厂家</a>
                        </div>
                        <div class="amount_money_a">
                            <span class="price">￥2000.00</span>
                            <span class="xian"></span>
                            <span class="online_payment">在线支付</span>
                        </div>
                        <div class="status_a">
                            <a class="dingdan" href="#/PersonalCenter/PurchaseRecord/PurchaseDrawingDetail">订单详细</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="order_no">
                        <span class="data">2024-04-01</span>
                        <span class="num_id">订单号:12346285464721</span>
                        <span class="factory_name">辛巴工厂</span>
                        <img class="de" src="../../../../public/logIn/de.png" alt="">
                    </div>
                    <div class="order_goods">
                        <div class="order_details_a">
                            <img class="product" src="../../../../public/logIn/下载.png" alt="">
                            <span class="product_name">零件小模型</span>
                            <span class="product_details">该设计图的描述：<p></p>1.简单，<p></p>2.尺寸：16cc</span>
                            <span class="product_number">×200</span>
                            <span class="souhou">申请售后</span>
                            <a class="contact_manufacturer" href="#/ChatWindow">联系厂家</a>
                        </div>
                        <div class="amount_money_a">
                            <span class="price">￥2000.00</span>
                            <span class="xian"></span>
                            <span class="online_payment">在线支付</span>
                        </div>
                        <div class="status_a">
                            <a class="dingdan" href="#/PersonalCenter/PurchaseRecord/PurchaseDrawingDetail">订单详细</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="order_no">
                        <span class="data">2024-04-01</span>
                        <span class="num_id">订单号:12346285464721</span>
                        <span class="factory_name">辛巴工厂</span>
                        <img class="de" src="../../../../public/logIn/de.png" alt="">
                    </div>
                    <div class="order_goods">
                        <div class="order_details_a">
                            <img class="product" src="../../../../public/logIn/下载.png" alt="">
                            <span class="product_name">零件小模型</span>
                            <span class="product_details">该设计图的描述：<p></p>1.简单，<p></p>2.尺寸：16cc</span>
                            <span class="product_number">×200</span>
                            <span class="souhou">申请售后</span>
                            <a class="contact_manufacturer" href="#/ChatWindow">联系厂家</a>
                        </div>
                        <div class="amount_money_a">
                            <span class="price">￥2000.00</span>
                            <span class="xian"></span>
                            <span class="online_payment">在线支付</span>
                        </div>
                        <div class="status_a">
                            <a class="dingdan" href="#/PersonalCenter/PurchaseRecord/PurchaseDrawingDetail">订单详细</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PurchaseRecord',
}
</script>

<style scoped>
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
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.5);
}

.top{
    width: 755px;
    height: 40px;
    background-color: #F2F2F2;
    margin: 8px;
    border: 1px solid #797979;
}

.order_details,
.order_details_a{
    position: relative;
    display: inline-block;
    width: 489px;
    height: 100%;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    color: #333;
    border-right: 1px solid #797979;
}

.amount_money,
.amount_money_a{
    position: relative;
    display: inline-block;
    width: 137px;
    height: 100%;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid #797979;
}

.status,
.status_a{
    position: relative;
    display: inline-block;
    width: 123px;
    /* 150px */
    height: 100%;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 40px;
}

.order_no{
    width: 755px;
    height: 37px;
    background-color: #f2f2f2;
    border: 1px solid #000;
    margin-top: 3px;
    /* 11 */
    margin-left: 8px;
}

.data{
    position: relative;
    left: 18px;
    font-size: 14px;
    color: #333;
}

.num_id{
    position: relative;
    left: 45px;
    font-size: 14px;
    color: #7f7f7f;
}

.factory_name{
    position: relative;
    left: 120px;
    font-size: 14px;
    color: #333;
}

.de{
    position: relative;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 425px;
}

.order_goods{
    position: relative;
    width: 755px;
    height: 121px;
    background-color: #fff;
    border: 1px solid #797979;
    margin: -1px 0 15px 8px;
}

.product{
    position: absolute;
    width: 90px;
    height: 90px;
    left: 18px;
    top: 4px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
}

.product_name{
    position: absolute;
    left: 153px;
    top: 8px;
    font-size: 17px;
    font-weight: 800;
    color: #605E5E;
}

.product_details{
    position: absolute;
    left: 153px;
    top: 34px;
    font-size: 14px;
    color: #555;
}

.product_number{
    position: absolute;
    left: 310px;
    top: 41px;
    font-size: 14px;
    color: #7f7f7f;
}

.souhou{
    position: absolute;
    left: 394px;
    top: 36px;
    font-size: 14px;
    color: #333;
}

.contact_manufacturer{
    position: absolute;
    left: 394px;
    top: 62px;
    font-size: 14px;
    color: #0124FC;
    text-decoration: underline;
}

.price{
    position: absolute;
    height: 16px;
    left: 37px;
    top: 45px;
    font-size: 14px;
    line-height: 16px;
    color: #7f7f7f;
}

.xian{
    position: absolute;
    left: 20px;
    top: 69px;
    height: 2px;
    width: 98px;
    color: #797979;
    border-bottom: 1px solid #797979;
}

.online_payment{
    position: absolute;
    height: 16px;
    left: 41px;
    top: 75px;
    line-height: 16px;
    color: #7f7f7f;
}

.dingdan{
    position: absolute;
    left: 38px;
    top: 57px;
    font-size: 14px;
    color: #000;
    text-decoration: underline;
}

.order_details_a,
.amount_money_a,
.status_a{
    text-align: left;
    line-height: normal;
}


</style>