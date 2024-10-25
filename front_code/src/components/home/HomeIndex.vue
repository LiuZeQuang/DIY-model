<template>
    <div class="w">
        <!-- 首页主体 -->
        <HomeBody></HomeBody>
        <HomeBanner></HomeBanner>
        <!-- 首页消费者主体 -->
        <HomeConsumer></HomeConsumer>
        <!-- 首页设计者主体 -->
        <HomeDesigner></HomeDesigner>
        <!-- 首页厂家主体 -->
        <HomeManufacturer></HomeManufacturer>
        <!-- 首页开始 -->
        <HomeStart></HomeStart>
        <!-- 首页底部 -->
        <HomeFooterVue></HomeFooterVue>
    </div>
</template>

<script>
import HomeBody from "./HomeBody.vue"
import HomeBanner from "./HomeBanner.vue"
import HomeConsumer from "./HomeConsumer.vue"
import HomeDesigner from "./HomeDesigner.vue"
import HomeManufacturer from "./HomeManufacturer.vue"
import HomeStart from "./HomeStart.vue"
import HomeFooterVue from "./HomeFooter.vue"
export default {
    name: "HomeIndex",
    components: {
        HomeBody,
        HomeBanner,
        HomeConsumer,
        HomeDesigner,
        HomeManufacturer,
        HomeStart,
        HomeFooterVue
    }
}
</script>

<style>
</style>