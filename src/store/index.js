import Vue from 'vue'
import Vuex from 'vuex'

//首先会调用Vuex.install方法。
Vue.use(Vuex)

//创建store容器
const store = new Vuex.Store({
  /**
   * 公共状态信息。
   * 存储的状态，都经过get/set劫持
   * 和组件内的data作用一样。都是深度劫持
   * */
  state: {
    supNum:10,
    oppNum:20
  },
  /**
   * 公共计算属性。
   * 只做了get劫持。
   * 和组件的computed类似，具备缓存的效果。
   * 不允许直接修改。
   * */
  getters: {
    ratio(state) {
      //state 公共状态信息。
      const {supNum, oppNum} = state;
      const total = supNum + oppNum;
      return total ===0 ? '--' : ( supNum /total * 100).toFixed(2) + '%';
    }
  },
  /**
   * mutations， 同步修改state, 就是代码按顺序执行，没有 async, await
   * state 公共状态信息。
   * payload,通知方法执行时传递的参数。
   * */
  mutations: {
    //提供一个公共的方法，去修改状态值。方法定义了修改逻辑。
    change(state, {type, step =1}) {
      if(type ==='sup') {
        state.supNum += step
      }else {
        state.oppNum += step
      }
    }
  },
  /**
   * 异步修改state, 代码有阻塞，等待。 有async, await
   * 在异步操作结束后，用commit通知mutations中的方法执行。
   * context: store实例的精简版
   * store.dispatch('changeAsync')
   * */
  actions: {
     async changeAsync(context, payload){
        try {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          });
        } catch (_) {
          console.log('error');
        }


       //通知 mutations 的change方法执行。
       context.commit('change', payload)
    }
  },

  /**模块化管理*/
  modules: {
    plugins:[]
  }
})



export default store
