<template>
  <div class="buy">
    <span>订单确认</span>
    <input type="text" placeholder="联系电话">
    <textarea placeholder="收货地址"></textarea>
    <p>使用默认收货地址</p>
    <button>确认</button>
    <img @click="tuichu" src="../../../../public/consumer/退出按钮.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ConsumerDrawingBuy',
  methods: {
    tuichu() {
      document.querySelector('.buy').style.display = 'none'
    }
  }
}
</script>

<style scoped>
.buy {
  position: relative;
  width: 288px;
  height: 220px;
  left: 397px;
  top: -350px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #797979;
}

span{
  position: absolute;
  width: 80px;
  height: 23px;
  left: 104px;
  top: 22px;
  font-size: 20px;
  font-weight: 800;
  color: #333;
}

input{
  position: absolute;
  width: 219px;
  height: 28px;
  left: 29px;
  top: 55px;
  font-size: 13px;
  border: 1px solid #006EFF;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
}

textarea{
  position: absolute;
  width: 219px;
  height: 45px;
  left: 29px;
  top: 96px;
  font-size: 13px;
  border: 1px solid #006EFF;
  border-radius: 3px;
  outline: none;
  resize: none;
  padding-left: 10px;
  padding-top: 8px;
}

p{
  position: absolute;
  width: 96px;
  height: 14px;
  left: 162px;
  top: 158px;
  font-size: 12px;
  color: #0041FF;
  cursor: pointer;
}

button{
  position: absolute;
  width: 229px;
  height: 26px;
  left: 29px;
  top: 179px;
  font-size: 13px;
  color: #fff;
  background-color: #169BD5;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

img {
  position: absolute;
  width: 22px;
  left: 252px;
  top: 11px;
  cursor: pointer;
}
</style>