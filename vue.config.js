const { defineConfig } = require('@vue/cli-service')
const env = process.env.NODE_ENV; //获取环境变量

module.exports = defineConfig({
  // publicPath:设置打包后，访问资源的路径，
  // 默认是/ , /表示所有资源从根目录下查找，布署到服务器，也要根目录，不然就找不到项目资源。
  // 如果所有资源没有布置到服务器根目标，但如果有dist目录包着，就访问不到资源。
  //改成./， 就是相对目录。 布到服务器，可以用dist文件夹包着。
  publicPath: './',
  lintOnSave: env !== "production",//控制ESLint词法检查类型 false关闭，warnin警告

  //控制babel-loader编译范围， false 不编译node_modules的第3方模块。
  //一般第3方模块都编译好了，所以不用再编译一次。
  transpileDependencies: false,
  //设置是否需要生成js对应的map调试文件，
  productionSourceMap: false,
})
