import Vue from 'vue';
import VueX from "vuex";
import moduleA from "@/store/study/modelA";
import moduleB from "@/store/study/modelB";


Vue.use(VueX);

/**
 * vuex模块化管理
 * */

const store = new VueX.Store({
    state:{
        num:10,
    },
    getters:{
        newNum(state, getters){
            return '@主模块num=' + state.num + "@a模块x=" + state.a.x;
        }
    },
    mutations:{
      setNum(state, {num}) {
          state.num = num;
      }
    },
    actions: {
        async setNumAsync(context, payload){
            //context， 存储的信息都是总的状态/计算属性信息。
            try {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                });
            } catch (_) {
                console.log('error');
            }

            //通知 mutations 的setNum方法执行。
            context.commit('setNum', payload)
        }
    },
    /**按模块管理*/
    modules:{
        a:moduleA,
        b:moduleB,
    }
});

export default store;