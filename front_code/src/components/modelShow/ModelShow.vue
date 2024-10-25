<template>
    <div class="w">
        <div class="show" @click="hh" ref="threeTarget">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { ThreeEngine } from "./TEngine";
import { allBaseObject } from "./TBaseObject";
import { allLights } from "./TLight";
import { allHelper } from "./THelp";
export default {
    name: "ModelShow",
    props: ["message"],
    data() {
        return {
            ThreeEngine: null,
        };
    },
    methods: {
        hh() {
            console.log(this.message);
        },
    },
    mounted() {
        this.ThreeEngine = new ThreeEngine(this.$refs.threeTarget);
        this.ThreeEngine.addObject(...allBaseObject); // 添加基础模型
        this.ThreeEngine.addObject(...allLights); // 添加光线
        this.ThreeEngine.addObject(...allHelper); // 添加辅助
    },
};
</script>

<style scoped>
.show {
    position: relative;
    width: 938px;
    height: 544px;
    left: 44px;
    top: -518px;
    background-color: #f4ecec;
    overflow: hidden;
    border-radius: 10px;
}

img {
    position: absolute;
    width: 34px;
    color: #fff;
    margin: 20px;
}
</style>