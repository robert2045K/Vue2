import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { Loading} from 'element-ui'

/**
 * Vue.use(VueRouter)做了什么事：
 *  执行VueRouter.install方法
 *
 *  基于Vue.mixin向每个组件混入了 beforeCreate/destroyed钩子函数。
 *
 *  需要在根组件中配置项中， 设置一个router的配置项。
 *  new Vue({
 *      router,  //根组件的配置项，在main.js中
 *      store,
 *      render: h => h(App)
 *   }).$mount('#app')
 *   -------------------------------------
 *
 *   向Vue.prototype 注册了2个公共属性 $router/$route, 每个组件都可访问
 *   $router：VueRouter实例， 包含路由跳转的方法。
 *   $route, 存储了当前路由匹配信息。
 *
 *   注册了RouterView, RouterLink 2个全局组件
 *   <router-view>:路由容器，负责把路由匹配的信息进行渲染。
 *   <router-link>: 实现路由切换。
 *
 */
Vue.use(VueRouter);

//创建路由管理
//设置路由配置项。
const router = new VueRouter({
    //指定路由模式，默认是hash模式。 history，
    mode:'hash',
    //指定路由表
    routes: routes,
});

let loadingIns
router.beforeEach((to, from, next)=> {
    //懒加载的情况下，如果网速慢，加载慢，需要加一个loading的效果。
    //添加Loading效果。
    loadingIns = Loading.service({
        text:'正在加载中'
    });
    next();
})

//全局前置守卫
// router.beforeEach((to, from, next)=> {
//     console.log("2222-全局前置守卫 beforeEach", to, from, next)
//     next();
// });

//全局解析守卫
// router.beforeResolve((to, from, next) =>{
//     console.log('555-全局解析守卫beforeResolve=',to, from, next)
//     next();
// });

//全局后置守卫。
// 每一次路由切换完毕。
//相当于一个钩子函数。
router.afterEach((to)=>{
    console.log("666-全局后置守卫 afterEach", to)

    //to 被激活组件的路由匹配信息
    let {title= ''} = to.meta;
    //设置网页标题文字内容
    document.title = title;

    if(loadingIns)loadingIns.close()
});

// $router：VueRouter实例，
// 每个组件都有: this.$router
export default router;