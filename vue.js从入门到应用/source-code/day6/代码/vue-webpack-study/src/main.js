// 项目的JS打包入口文件

// 注意： 这里大家导入的Vue和网页中，直接用script导入的Vue，不一样！
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

// 默认使用 import 导入的 Vue，不支持如下方式取定义组件，只支持 使用 .vue 模板文件来定义组件
// 官方不推荐我们在 webpack 构建的Vue项目中使用如下方式定义组件，因为这样不优雅，更主要的是：没有把 组件化的思想发挥到极致！ 
/* const login = {
  template: '<h3 style="">这是Login组件</h3>',
  data(){
    return {}
  },
  methods:{},
  filters:{}
} */


// 导入自己的 .vue 组件
// 在这里，如果要在webpack中使用.vue组件，必须先安装对应的loader加载器，否则webpack处理不了这种文件
// vue-loader
import app from './components/App.vue'


// 导入路由模块
import VueRouter from 'vue-router'
// 安装
Vue.use(VueRouter)
// 导入自己的路由规则模块，得到路由对象
import router from './router.js'


// 全局安装 mint-ui
import MintUI from 'mint-ui'
// 导入Mint-UI 的样式
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入Bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/global.css'
// 导入 MUI 的样式表
import '../lib/mui/css/mui.min.css'


/* import { Button } from 'mint-ui'
console.log(Button.name) */




const vm = new Vue({
  el: '#app',
  render: c => c(app), // 记住： 使用 render 函数渲染出来的组件，叫做 根组件；将来，其它的组件，只能在 app 组件的内部去渲染；
  router // 挂载路由对象
})