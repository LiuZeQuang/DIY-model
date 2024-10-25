<!-- 消费者-厂商定制 -->
<template>
  <div class="w boder">
    <div class="box_demand">
        <img class="back" src="../../../public/consumer/返回.png" alt="" @click="$router.go(-1)">
        <span class="describe_requirements">请描述你的需求</span>
        <span class="synopsis">需求描述越清晰，厂家接单越容易</span>
        <img class="icon" src="../../../public/consumer/厂商定做.png" alt="">
        <div class="form_demand">
            <input class="short" type="text" placeholder="产品名称">
            <textarea class="long" wrap="soft" placeholder="说说你的要求：

- 明确说明你的要求内容
- 此产品需要的尺寸
- 产品使用的材料
- 产品生产数量">
            </textarea>
            <span class="budget">预 算：</span>
            <input class="start" type="text" value="￥">
            <span class="line">——</span>
            <input class="end" type="text" value="￥">
            <label class="production_quantity" for="">生产数量：</label><input class="production_quantity_input" type="text" name="" id="">
            <label class="using_materials" for="">使用材料：</label><input class="using_materials_input" type="text" name="" id="">
            <div class="upload_files">+ 上传文件</div>
            <button class="release">寻找厂商</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ConsumerManufacturer"
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
    width: 141px;
    height: 141px;
    left: 61px;
    top: 321px;
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
    width: 75px;
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

.production_quantity{
    position: absolute;
    width: 105px;
    height: 24px;
    left: 62px;
    top: 350px;
    font-size: 21px;
    color: #605E5E;
}

.production_quantity_input{
    position: absolute;
    text-align: center;
    width: 84px;
    height: 30px;
    left: 159px;
    top: 347px;
    font-size: 16px;
    color: #000;
    border-radius: 5px;
    border: 1px solid #797979;
}

.using_materials{
    position: absolute;
    width: 105px;
    height: 24px;
    left: 62px;
    top: 398px;
    font-size: 21px;
    color: #605E5E;
}

.using_materials_input{
    position: absolute;
    text-align: center;
    width: 84px;
    height: 30px;
    left: 159px;
    top: 395px;
    font-size: 16px;
    color: #000;
    border-radius: 5px;
    border: 1px solid #797979;
}


.upload_files{
    position: absolute;
    cursor: pointer;
    width: 140px;
    height: 40px;
    left: 62px;
    top: 472px;
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
    cursor: pointer;
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
}
</style>