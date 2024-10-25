<template>
    <div id="app">
        <div class="focus" @mouseenter="enDisplay" @mouseleave="leHide">
            <!-- 左侧按钮 -->
            <a href="javascript:;" class="arrow-l" v-show="isShow" @click="screenLeft">&lt;</a>
            <!-- 右侧按钮 -->
            <a href="javascript:;" class="arrow-r" v-show="isShow" @click="screenRight">&gt;</a>
            <!-- 核心内容 -->
            <ul ref="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <li v-for="(item, index) in items" :key="index">
                    <img :src="item.image" alt="无法加载图片">
                </li>
            </ul>
            <!-- 小圆圈 -->
            <ol class="circle">
                <li v-for="index in number" :key="index" :class="{'current': index === currentIndex + 1}" @click="currentIndex = index - 1"></li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data() {
        return {
            currentIndex: 0,
            items: [
                { image: 'https://via.placeholder.com/600x300' },
                { image: 'https://via.placeholder.com/600x300' },
                { image: 'https://via.placeholder.com/600x300' }
            ],
            isShow: false,
            timer:null,
        }
    },
    methods: {
        screenLeft() {
            console.log(this.number);
            if(this.currentIndex === 0){
                this.$refs.carousel.style.transition = 'transform 0s';
                this.currentIndex = this.items.length - 1;
                setTimeout(()=>{
                    this.$refs.carousel.style.transition = 'transform 0.5s';
                },5)
            }
            setTimeout(() => {
                this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
            }, 10);
            
        },
        screenRight() {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            setTimeout(()=>{
                if(this.currentIndex === this.items.length - 1){
                    this.$refs.carousel.style.transition = 'transform 0s';
                    this.currentIndex = 0;
                    setTimeout(()=>{
                        this.$refs.carousel.style.transition = 'transform 0.5s';
                    },10)
                }
            }, 500)
        },
        enDisplay(){
            this.isShow = true;
            clearInterval(this.timer);
            this.timer = null;
        },
        leHide(){
            this.isShow = false;
            this.timer = setInterval(() => {
                this.screenRight();
            }, 2000)
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.$refs.carousel
        })
        this.timer = setInterval(() => {
            this.screenRight();
        }, 2000)
        // console.log(this.$store.state.count);
        // this.$store.commit('increment');

        // console.log(this.$store.state.count);

        // console.log(this.$store.state.user.age);
        // this.$store.commit('user/increment');
        // console.log(this.$store.state.user.age);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    computed:{
        number(){
            return this.items.length - 1;
        }
    }
}
</script>

<style scoped>
.focus {
    position: relative;
    left: 483px;
    top: 115px;
    width: 463px;
    height: 302px;
    border-radius: 30px;
    overflow: hidden;
}

.focus ul {
    display: flex;
    transition: transform 0.5s;
}

.focus ul li {
    flex: 0 0 100%;
}

img{
    width: 463px;
    height: 302px;
}

.arrow-l,
.arrow-r {
    /* display: none; */
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 24px;
    height: 40px;
    background: rgba(0, 0, 0, .3);
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-family: 'icomoon';
    font-size: 18px;
    z-index: 2;
}

.arrow-r {
    right: 0;
}

.circle {
    position: absolute;
    bottom: 10px;
    left: 50px;
}

.circle li {
    float: left;
    width: 8px;
    height: 8px;
    /*background-color: #fff;*/
    border: 2px solid rgba(255, 255, 255, 0.5);
    margin: 0 3px;
    border-radius: 50%;
    /*鼠标经过显示小手*/
    cursor: pointer;
}

.current {
    background-color: #fff;
}
</style>