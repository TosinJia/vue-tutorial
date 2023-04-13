// 项目的JS打包入口文件

import Vue from 'vue';

import NoVuexApp from './component/NoVuexApp.vue';
// new Vue({
//     el: '#app',
//     // render: c=>c(App),
//     render: c=>c(NoVuexApp),
// });

import VuexApp from './component/VuexApp.vue';
// 如果要在项目中使用 vuex 来管理共享的状态
// 1. 运行 cnpm i vuex -S
// 2. 导入vuex
import Vuex from 'vuex';
// 3. 把 vuex 安装到 vue 上
Vue.use(Vuex);

// 4. 创建一个公共的状态对象
// Uncaught Error: [vuex] Store must be called with the new operator.
const store = new Vuex.Store({
    // 这个 store 中的 state ，大家可以想象成 组件对象中的 data 属性
    state:{ // 这个 state 中存储数据，就是我们要全局共享的状态（数据）
        vuexcount:5, // 在全局，就共享了一个 count 值了
    },
    mutations:{    // 作用，是专门用来修改 state 中的数据的
        // 注意：如果要修改 state 中的数据，必须要调用 mutations 提供的方法；
        add: function(state){
            // mutations 中的方法，第一个参数，永远都是 state
            state.vuexcount++;

            // 注意： vuex 官方，虽然说，不要在 mutations 中写异步的操作，但是，如果你不按官方的走，在 mutations 中定义的异步方法，可以正常执行，但是，vue-tools 工具，无法监视到数据的变化；
            // setTimeout(()=>{
            //     state.vuexcount++;
            // }, 2000);
        },
        // mutations 中的方法，在调用的时候，只能传递唯一的一个参数
        // 如果要传递多个参数，可以以数组或对象的形式传递进去
        reduce: function(state, step=1){
            console.log("Vuex.Store mutations reduce", step);
            state.vuexcount-=step;
        },
    },
    getters:{   // 这个 getters ，类似于 计算属性, 同时也可以认为它是过滤器
        // getters 不会修改原数据，只是把数据按照我们自己的需求，做了重新的组织和包装
        vuexcountInfo: function(state){
            return '~Vuex.Store getters~'+state.vuexcount+'~~';
        }
    },
    actions:{   // 动作
        newAdd: function(context){
            // 在 actions ，可以定义一些行为，才提交 对应的  mutations 方法
            // 在 action 中不能直接操作 state，如果想修改 state 值，只能在 actions 中，提交对应的mutations
            setTimeout(()=>{
                context.commit('add');
            }, 1000);
        },
        newReduce: function(context, step=1){
            console.log("Vuex.Store actions newReduce", step);
            setTimeout(()=>{
                context.commit('reduce', step);
            }, 2000);
        }
    }
});
new Vue({
    el: "#app",
    render: c=>c(VuexApp),
    // 当把 store 挂载到 vm 上之后，所有的组件中，都可以直接使用 `this.$store` 来访问全局的数据了
    store,  // 5. 将 创建的共享状态对象，挂载到 Vue 实例中，这样，所有的组件，就可以直接从 store 中获取 全局的数据了
});

