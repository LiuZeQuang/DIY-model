<template>
    <div>
        <div class="body_top"><span>图纸通知</span></div>
        <div class="body_bottom"></div>
    </div>
</template>

<script>
export default {
    name: 'DesignerAvatarDrawing',
}
</script>

<style scoped>
.body_top{
    position: absolute;
    width: 800px;
    height: 54px;
    left: 137px;
    top: -1px;
    border: 1px solid #797979;
    background-color: #fff;
}
span{
    position: absolute;
    left: 30px;
    font-size: 17px;
    font-weight: 800;
    line-height: 54px;
    color: #605E5E;
    opacity: 0.7;
}
.body_bottom{
    position: absolute;
    width: 800px;
    height: 480px;
    top: 54px;
    left: 137px;
    border: 1px solid #797979;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>