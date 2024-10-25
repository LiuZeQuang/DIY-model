import axios from 'axios';
import { useUserStoreHook } from '@/store/modules/user';
import { getToken } from '@/utils/auth';

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const accessToken = getToken();
    if (accessToken) {
      config.headers['token'] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data;
    if (code === 0 || code === 200) {
      return response.data;
    }
    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof ArrayBuffer) {
      return response;
    }

    ElMessage.error(msg || '系统出错');
    return Promise.reject(new Error(msg || 'Error'));
  },
  (error) => {
    console.log('err' + error); // for debug
    if (error.response.data && error.response.status) {
      const userStore = useUserStoreHook();
      switch (error.response.status) {
        // 401: 未登录
        case 401:
          userStore.resetToken().then(() => {
            location.reload();
          });
          break;
        // 403 token过期
        case 403:
          userStore.resetToken().then(() => {
            location.reload();
          });
          break;
        // 404请求不存在
        case 404:
          ElMessage.error('网络请求不存在');
          break;
        // 其他错误，直接抛出错误提示
        default:
          ElMessage.error(error.response.data.message);
      }
    } else {
      if (error.message) {
        ElMessage.error(error.message);
      }
    }
    return Promise.reject(error.response);
  }
);

// 导出 axios 实例
export default service;
