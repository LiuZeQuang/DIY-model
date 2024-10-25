<template>
    <div>
        <div ref="container"></div>
    </div>
    
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default {
    mounted() {
        this.initThree();
        this.loadSTL();
    },
    methods: {
        initThree() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.$refs.container.appendChild(this.renderer.domElement);
        },
        loadSTL() {
            const loader = new STLLoader();
            // 修改路径为你的STL文件路径
            loader.load('./static/wu.stl', (geometry) => {
                const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, specular: 0x111111, shininess: 200 });
                const mesh = new THREE.Mesh(geometry, material);
                this.scene.add(mesh);
                this.renderer.render(this.scene, this.camera);
            });
        },
    },
};
</script>

<style>
/* 可添加任何必要的样式 */
</style>