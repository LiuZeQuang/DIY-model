const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0', //可以忽略不写
    port: 8081,//它是用来修改你打开后的端口号的
    open: true,//值为 true的话，项目启动时自动打开到浏览器里边， false不会打开
    proxy: {
      '/api': {
        target: ' http://localhost:8080',//换成你自己项目的开发或者生产地址
        ws: false, //也可以忽略不写，不写不会影响跨域
        changeOrigin: true, //是否开启跨域，值为 true 就是开启， false 不开启
        pathRewrite: {
          '^/api': ''//注册全局路径， 但是在你请求的时候前面需要加上 /api  
        }
      }
    }
  },
  publicPath: "/",
  // 关闭生成 source map 文件
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('@/', resolve('src'))
    config
      .plugin('html')
    // .tap(args => {
    //   args[0].title = '111'
    //   return args
    // })
  },

})
