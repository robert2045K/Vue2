module.exports = {
    presets: [
         [
            '@vue/cli-plugin-babel/preset',
            {
              //对语法包进行配置， 目的：对ES6内置的API进行兼容性处理
              //usBuiltInd:'usage',
              // 脚手架内部已经封装好的配置项，会根据browserslist和 @babel/preset-evn自动算出需要的polyfill，从code-js第3方包中拿出来用。
              //usage是自动加载，用到是加载，没用到就不加载，减少代码体积。
              //useBuiltins: 'usage',

              //把分析和导入polyfill，从自动处理，转为在程序入口中手动处理。
              //些时我们可以在入口中，导入全部的polyfill
              //useBuiltins: 'entry',
            }
         ]

    ],
    plugins: [
        //elementUI按需引入的插件
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
