//  路由规则模块

import VueRouter from 'vue-router'

// 导入路由相关的组件
import Login from './components/account/Login.vue'
import Reg from './components/account/Reg.vue'


// 创建路由对象，并把得到的路由对象，挂载到 VM 实例上
const router = new VueRouter({
  routes: [ // 路由规则
    { path: '/login', component: Login },
    { path: '/reg', component: Reg }
  ]
})

// 导出路由对象
export default router