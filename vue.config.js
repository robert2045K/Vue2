const { defineConfig } = require('@vue/cli-service')


const env = process.env.NODE_ENV; //获取环境变量

module.exports = defineConfig({
  // publicPath:设置打包后，访问资源的路径，
  // 默认是/ , /表示所有资源从根目录下查找，布署到服务器，也要根目录，不然就找不到项目资源。
  // 如果所有资源没有布置到服务器根目标，但如果有dist目录包着，就访问不到资源。
  //改成./， 就是相对目录。 布到服务器，可以用dist文件夹包着。
  publicPath: './',
  //lintOnSave: env !== "production",//控制ESLint词法检查类型 false关闭，warnin警告
    lintOnSave :false,

  //控制babel-loader编译范围， false 不编译node_modules的第3方模块。
  //一般第3方模块都编译好了，所以不用再编译一次。
  //transpileDependencies: false,
  //设置是否需要生成js对应的map调试文件，
  //productionSourceMap: false,

  // $$$$   configureWebpack的值可以是对象，或都函数  ￥￥￥￥￥￥￥￥￥
  //configureWebpack的值是对象，
  // 修改vue的默认项【一般用于新增，但也可以修改】，
  //如果configureWebpack是对象，则使用webpack-merge将其合并到最终配置中。
  // 猜测：webpack-merge合并，应该是将新的，原来的配置合并成一个返回，并用之。
  // configureWebpack: {
  //     module: {
  //       rules: [
  //         {
  //           test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
  //           use: {
  //             loader: 'url-loader',
  //             options: {
  //               limit: 10240 //小于10kb，转成base64
  //             }
  //           }
  //         }
  //       ]
  //     }
  // },
  /**
   * configureWebpack的值是函数，
   * 如果您需要根据环境进行条件性操作，或者想要直接修改配置，请使用函数（该函数会在环境变量设置完成后延迟执行）。
   * 该函数接收已解析的配置作为参数。
   * 在函数内部，您可以直接修改配置，或者返回一个将被合并的对象：
   * ct configureWebpack的值是函数， 可以接收 config默认配置参数。 用函数可以写更多的代码，*/
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // mutate config for production...
  //   } else {
  //     // mutate for development...
  //   }
  // }
    configureWebpack(config) {
        //可以输出config, 来查看vue的webpack配置。
        //console.log(JSON.stringify(config, null, 2));
          //想要新增或修改配置，先找到vue的webpack配置的对应具体位置module.rules，然后在这个对应的位置上进行新增或修改config.module.rules.push()。
        // config.module.rules.push(
        //     {
        //         test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        //         use: {
        //           loader: 'url-loader',
        //           options: {
        //             limit: 10240 //小于10kb，转成base64
        //           }
        //         }
        //     }
        // )

        if (env === 'production') {
            // 修改生产环境的配置。
            //-------------------------生产环增去掉console.log----------------------------------
            //先找到vue的webpack配置对应具体位置：config.optimization.minimizer[0].options.minimizer.options.compress
            config.optimization.minimizer[0].options.minimizer.options.compress.drop_console = true;
         } else {
           // mutate for development...
        }
    },
    /**
     * 链式修改。
     * @param config
    */
    chainWebpack: config => {
        //动态修改页面标题
        //修改html-webpack-plugin插件
        // config.plugin('html')的参数html，就是html-webpack-plugin
        config.plugin('html').tap(options => {
            options[0].title = 'abc'
            return options
        })
    },
    /**
     * 快捷的处理CSS的各个loader
     */
    // css:{
    //     loaderOptions: {
    //         postcss: {
    //
    //         }
    //     }
    // },
    //修改 webpack-dev-server 的配置。
    devServer: {
        host: '127.0.0.1',
        open: true,
        //跨域代理
        // proxy: {
        //     '/api': {
        //         target: 'http://news-at.zhihu.com',
        //         changeOrigin: true,
        //     }
        // }
    },

})