<!-- 消费者-发布需求 -->
<template>
  <div class="w boder">
    <div class="box_demand">
        <img class="back" src="../../../public/consumer/返回.png" alt="" @click="$router.go(-1)">
        <span class="describe_requirements">请描述你的需求</span>
        <span class="synopsis">需求描述越清晰，设计接单越容易</span>
        <img class="icon" src="../../../public/consumer/消费者-发布需求.png" alt="">
        <div class="form_demand">
            <input class="short" type="text" placeholder="一句话描述你的需求">
            <span class="conut">0/8</span>
            <textarea class="long" wrap="soft" placeholder="详细说说你的需求：

- 明确说明你的要求内容
- 此模型需要的尺寸">
            </textarea>
            <span class="budget">预算：</span>
            <input class="start" type="text" value="￥">
            <span class="line">——</span>
            <input class="end" type="text" value="￥">
            <label class="counter_offer" for="">是否接受还价</label>
            <select name="" id="">
                <option value="是">是</option>
                <option value="否">否</option>
            </select>
            <div class="upload_files">+ 上传文件</div>
            <button class="release">发布需求</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ConsumerDemand"
}
</script>

<style scoped>
.w{
    height: 629px;
    background-color: #fff;
}

.box_demand{
    position: relative;
    width: 937px;
    height: 577px;
    left: 44px;
    top: 26px;
    background-color: rgba(215, 215, 215, 0.337254901960784);
    border-radius: 10px;
}

.back{
    position: absolute;
    cursor: pointer;
    left: 20px;
    top: 14px;
    width: 34px;
    height: 34px;
}

.describe_requirements{
    position: absolute;
    width: 182px;
    height: 31px;
    left: 20px;
    top: 119px;
    font-size: 26px;
    color: #605E5E;
}

.synopsis{
    position: absolute;
    width: 225px;
    height: 17px;
    left: 20px;
    top: 200px;
    font-size: 15px;
    color: #797979;
}

.icon{
    position: absolute;
    width: 191px;
    height: 197px;
    left: 37px;
    top: 297px;
}

.form_demand{
    position: absolute;
    width: 624px;
    height: 533px;
    left: 277px;
    top: 22px;
    background-color: #fff;
    border-radius: 15px;
}

.short{
    position: absolute;
    width: 518px;
    height: 43px;
    left: 62px;
    top: 41px;
    font-size: 16px;
    border: 1px solid #797979;
    border-radius: 5px;
    color: #000;
    padding-left: 10px;
}

.conut{
    position: absolute;
    width: 28px;
    height: 16px;
    left: 511px;
    top: 55px;
    font-size: 14px;
    color: #333;
}

.long{
    position: absolute;
    width: 518px;
    height: 137px;
    left: 62px;
    top: 124px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px dashed #797979;
    color: #000;
    resize: none;
}

.budget{
    position: absolute;
    width: 63px;
    height: 24px;
    left: 62px;
    top: 297px;
    font-size: 21px;
    color: #605E5E;
}

.line{
    position: absolute;
    width: 42px;
    height: 24px;
    left: 254px;
    top: 297px;
    font-size: 21px;
    color: #797979;
}

.start,
.end{
    position: absolute;
    width: 84px;
    height: 30px;
    top: 295px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #797979;
}

.start{
    left: 159px;
}

.end{
    left: 311px;
}

.counter_offer{
    position: absolute;
    width: 84px;
    height: 16px;
    left: 417px;
    top: 302px;
    font-size: 14px;
    color: #333;
}

select{
    position: absolute;
    width: 56px;
    height: 22px;
    left: 524px;
    top: 300px;
    font-size: 13px;
    color: #000;
    border: 1px solid #797979;
}

.upload_files{
    position: absolute;
    cursor: pointer;
    width: 140px;
    height: 40px;
    left: 62px;
    top: 363px;
    font-size: 16px;
    font-weight: 800;
    line-height: 40px;
    text-align: center;
    color: #605E5E;
    border-radius: 5px;
    border: 1px solid #797979;
}

.release{
    position: absolute;
    width: 140px;
    height: 40px;
    left: 472px;
    top: 472px;
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    background-color: #169BD5;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
</style>