// 路由规则模块

import Vue from 'vue';
// 导入路由模块
import VueRouter from 'vue-router';
// // 安装
Vue.use(VueRouter);

// 导入路由相关的组件
import Reg  from './components/account/RegRegRegReg.vue';
import Login from './components/account/Login.vue';

// 创建路由对象，并把得到的路由对象，挂载到 VM 实例上
const router = new VueRouter({
    routes: [   // 路由规则
        {path: '/', redirect:'/login'},
        {path: '/LOGIN', component: Login},
        {path: '/reg', component: Reg},
    ]
});

export default router