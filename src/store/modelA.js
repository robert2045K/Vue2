/**A模块的状态管理**/
const moduleA = {
    namespaced:true,
    state:{
        x:0,
    },
    getters:{
        newX(state,getters){
            //模块中，我们获取的state, getters都是本模块的数据
            console.log(state, getters);
            return state.x + '@A模块';
        }
    },
    mutations:{
        setX(state){
            state.x++;
                console.log(state)
        }
    },
    actions:{
        async setXAsync(context, payload){
            //context, state/getters是本模块的数据， rootState/rootGetters是主模块的数据
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
            context.commit('setX', payload)
        }
    }
};
export default  moduleA;