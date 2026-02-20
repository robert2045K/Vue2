/**
 * 构建路由表,RouteConfig
 * path:string, //匹配的路由地址
 * name?string //命名路由
 * component?:Component,  路由匹配后需要渲染的组件。
 * redirect?:string|Location|Function,    路由重定向
 * meta?: Object, 路由元信息, 存储匹配路由的数据。
 * children:Arrany<RouteConfig>, //子路由。
 * props: 给需要渲染的组件传递数据
 * beforeEnter?:(to, from ,next)=void //路由独享守卫函数。
 * */

//首页要导入。
import HomePage from "@/views/study/router/HomePage.vue";

//只要基于ES6 Module规范， 导入这些组件，打包的时候， 都会打包到主Js文件中。
//用路由懒加载。
/**
import ProductionPage from "@/views/study/router/ProductionPage.vue";
import PersonalPage from "@/views/study/router/PersonalPage.vue";
import ErrorPage from "@/views/study/router/ErrorPage.vue";
import MyOrder from "@/views/study/router/personal/MyOrder.vue";
import MyProfile from "@/views/study/router/personal/MyProfile.vue";
*/


const routes = [
    {
        //path是, /，渲染HomePage组件
        //path是这样的：http://localhost:8080/
        path: '/',
        name: 'home',
        component: HomePage,
        //路由元信息，随意设置的任意数据。
        meta:{title:'首页'},
        /**home， 路由独享守卫*/
        // beforeEnter(to, from,next) {
        //     console.log("333--home页面, A的路由独享守卫 beforeEnter", to, from, next)
        //     next();
        // }
    },
    {
        //产品中心
        //path是, /production，渲染ProductionPage组件
        //path是这样的：http://localhost:8080/production
        path: '/production',
        name: 'production',
        //基于ES6中的import函数，实现路由懒加载 //vue-cli打包的时候，会把动态导入的组件，打包成一个js文件。
        component: () => import(/* webpackChunkName: "production" */ '@/views/study/router/ProductionPage.vue'),
        meta:{title:'产品中心'},
    },
    {
        //个人中心
        //path是, /personal，渲染PersonalPage组件
        //path是这样的：http://localhost:8080/personal
        path: '/personal',
        name: 'personal',
        //给需要渲染的组件传递数据, 一般设置组件的默认值。不常用。
        props: {
          x:10,
          y:20
        },
        component: ()=> import(/* webpackChunkName: "personal" */ '@/views/study/router/PersonalPage.vue'),
        meta:{title:'个人中心'},
        //子路由配置
        children:[
            {
                //设置2级路由的默认页面
                path: '/personal',
                redirect: '/personal/order', //重定向到/personal/order
            },
            {
                //path值要写完整。
                //设置斜杠'/personal/order'， 会在一级路由的基础上，在后面新增二级路由的地址。
                path: '/personal/order',
                name: 'myOrder',
                component: ()=> import(/* webpackChunkName: "order" */ '@/views/study/router/personal/MyOrder.vue'),
                meta:{title:'我的订单'},
            },
            {
                //也可以写profile
                //不设置斜杠/, 都需要从一级路由开始查找。
                path: 'profile',
                name: 'myProfile',
                component: ()=> import(/* webpackChunkName: "profile" */ '@/views/study/router/personal/MyProfile.vue'),
                meta:{title:'我的订单'},
            },
        ],
        /**个人中心， 路由独享守卫*/
        // beforeEnter(to, from,next) {
        //     console.log("333-个人中心PersonalPage页面，B路由独享守卫 beforeEnter", to, from, next)
        //     next();
        // }
    },
    {
        //path是, *,  以上都没匹配，渲染ErrorPage组件
        path: '*',
        name: 'error',
        component: ()=> import(/* webpackChunkName: "error" */ '@/views/study/router/ErrorPage.vue'),
        meta:{title:'404'},
        redirect:'/', //重定向到首页
    }
];


export default routes;