import Vue from 'vue'
import Vuex from 'vuex'
//注册Vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            mailBox: "",
            password: "",
            passwordA: "",
            phone: "",
            address: "",
            shengfeng: "designer",
            // consumer 消费者
            // designer 设计者
            // manufacturer 厂家
        }
    },
    mutations: {
        mailBoxUP(state, to) {
            state.user.mailBox = to
        },
        userUP(state, userup) {
            state.user = userup
        }

    },
})

// const user = {
//     namespaced: true, //开启命名空间
//     state: () => {
//         return {
//             name: '张三',
//             age: 18
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.age++
//         },
//     }
// }

// //创建Vuex实例
// export default new Vuex.Store({
//     // namespaced: true, //开启命名空间
//     state: {
//         //定义数据
//         count: 0
//     },
//     mutations: {
//         //定义修改数据的方法
//         increment(state) {
//             state.count++
//         },
//     },
//     modules: {
//         //定义模块
//         user
//     }
// })

