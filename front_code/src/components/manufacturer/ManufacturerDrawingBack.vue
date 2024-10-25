<template>
    <div class="back">
        <span>还价</span>
        <label for="">向客户发送心里预期价格，争取订单</label><input type="text" placeholder="心里预期价格">
        <button>发送报价</button>
        <img @click="tuichu" src="../../../public/consumer/退出按钮.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'ManufacturerDrawingBack',
    methods: {
        tuichu() {
            document.querySelector('.back').style.display = 'none'
        }
    }
}
</script >

<style scoped>
.back {
    position: relative;
    width: 288px;
    height: 193px;
    left: 397px;
    top: -350px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #797979;
}

span {
    position: absolute;
    width: 40px;
    height: 23px;
    left: 124px;
    top: 22px;
    font-size: 20px;
    color: #333;
    font-weight: 800;
    text-align: center;
}

label {
    position: absolute;
    width: 224px;
    height: 16px;
    left: 29px;
    top: 63px;
    font-size: 14px;
    color: #606060;
}

input {
    position: absolute;
    width: 219px;
    height: 28px;
    left: 29px;
    top: 96px;
    font-size: 13px;
    border: 1px solid #006EFF;
    border-radius: 3px;
    padding-left: 10px;
    outline: none;
}

button {
    position: absolute;
    width: 229px;
    height: 26px;
    left: 29px;
    top: 145px;
    font-size: 13px;
    color: #fff;
    background-color: #169BD5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

img {
    position: absolute;
    width: 20px;
    left: 252px;
    top: 11px;
    cursor: pointer;
}
</style>