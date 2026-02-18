import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element.js'

import vm from './EventBus.js'
import './global.js'


//全局混入
Vue.mixin({
  created() {
    this.vm = vm;
  }
})

/**完整引入ElementUI*/
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);

/**按需引入ElementUI*/


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
