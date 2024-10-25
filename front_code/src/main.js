import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from './router/index'
//引入仓库
import store from './store'
// 引入二级封装
// import request from './request'
Vue.config.productionTip = false

import Axios from 'axios'
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store,
  // // 二级封装
  // request 
}).$mount('#app')
