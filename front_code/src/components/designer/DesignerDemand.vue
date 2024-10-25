<!-- 设计者-发布图纸 -->
<template>
  <div class="w boder">
    <div class="box_demand">
        <img class="back" src="../../../public/designer/返回.png" alt="" @click="$router.go(-1)">
        <span class="describe_requirements">请描述您的作品内容</span>
        <span class="synopsis">特征描述越清晰，越容易被看中</span>
        <img class="icon" src="../../../public/designer/发布、飞行、纸飞机.png" alt="">
        <div class="form_demand">
            <input class="short" type="text" placeholder="作品名称">
            <textarea class="long" wrap="soft" placeholder="详细描述您的作品：

- 明确说明作品所展示的内容
- 作品的用处
- 作品的特点
- 此模型需要的尺寸">
            </textarea>
            <span class="budget">价格：</span>
            <input class="start" type="text" value="  ￥">
            <span class="line">——</span>
            <input class="end" type="text" value="  ￥">
            <div class="upload_files">+ 上传模型</div>
            <button class="release">发布图纸</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"DesignerDemand"
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
    left: 20px;
    top: 14px;
    width: 34px;
    height: 34px;
    cursor: pointer;
}

.describe_requirements{
    position: absolute;
    width: 234px;
    height: 31px;
    left: 20px;
    top: 119px;
    font-size: 26px;
    color: #605E5E;
}

.synopsis{
    position: absolute;
    width: 218px;
    height: 17px;
    left: 20px;
    top: 200px;
    font-size: 15px;
    color: #797979;
}

.icon{
    position: absolute;
    width: 90px;
    height: 90px;
    left: 84px;
    top: 344px;
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

.upload_files{
    position: absolute;
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
    cursor: pointer;
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