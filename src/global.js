import Vue from 'vue'
import Toast from '@/views/study/pre/components/Extend/ToastCom.vue';



//用Vue.extend创建组件
let ToastCom = Vue.extend(Toast);

Vue.prototype.$toast = function(text) {
    //创建子类的一个实例，相当于在视图中基于<kebab-case>模式调用了组件。
    let vmToast = new ToastCom({
        //传递参数
        propsData:{
            text:text
        }
    });
    //渲染这个组件，这样就以基于$el属性， 获取到本组件渲染后的真实DOM
    vmToast.$mount();
    document.body.appendChild(vmToast.$el);
}