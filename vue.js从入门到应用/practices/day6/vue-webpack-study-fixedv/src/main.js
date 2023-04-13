// 项目的JS打包入口文件

// 注意： 这里大家导入的Vue和网页中，直接用script导入的Vue，不一样！
// import Vue from '../node_modules/vue/dist/vue'  //../node_modules/vue/dist/vue.js    vue.js 方式一
// import Vue from 'vue';  //vue.js 方式三    node_modules\vue package.json   "module": "dist/vue.runtime.esm.js", -> 去掉runtime.esm.

// 默认使用 import 导入的 Vue，不支持如下方式取定义组件，只支持 使用 .vue 模板文件来定义组件
// 官方不推荐我们在 webpack 构建的Vue项目中使用如下方式定义组件，因为这样不优雅，更主要的是：没有把 组件化的思想发挥到极致！ 
// const customComponent = {
//     template: '<div><h5 style="color: red">自定义组件</h5><h5>msg: {{ msg }}</h5></div>',
//     data: function(){
//         return {
//             msg: 'OK!'
//         }
//     },
//     methods:{},
//     filters:{},
//     components:{},
//     directives:{},
//     props:[]
// };

// const vm = new Vue({
//     el: '#app',
//     // components: {   //vue.js
//     //     customComponent,
//     // },
//     render: c=>c(customComponent),
// });


// ==============================

// [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
//  将组件写入 .vue 文件
// 导入 Vue 组件
import Vue from 'vue';

// 导入自己的 .vue 组件
// 在这里，如果要在webpack中使用.vue组件，必须先安装对应的loader加载器，否则webpack处理不了这种文件
// vue-loader
// 导入 App组件
import app from './components/App.vue'

console.log("import app from './components/App.vue' ", app);

// // 导入路由模块
// import VueRouter from 'vue-router';
// // 安装
// Vue.use(VueRouter);

// // 导入路由相关的组件
// import Reg  from './components/account/RegRegRegReg.vue';
// import Login from './components/account/Login.vue';

// console.log("import Reg  from './components/account/RegRegRegReg.vue' ", Reg);
// // 创建路由对象，并把得到的路由对象，挂载到 VM 实例上
// const router = new VueRouter({
//     routes: [   // 路由规则
//         {path: '/', redirect:'/login'},
//         {path: '/login', component: Login},
//         {path: '/reg', component: Reg},
//     ]
// });
import router from './router.js'


// 全局安装 mint-ui // 引入全部组件
import Mint from 'mint-ui'
// 导入Mint-UI 的样式 http://mint-ui.github.io/docs/#/zh-cn2/quickstart
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 按需引入部分组件
import {Cell, Checklist} from 'mint-ui'
console.log(Cell, Checklist);


// 导入Bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
    //导入全局样式
import './css/global.css'

// 导入 MUI 的样式表
import '../lib/mui/css/mui.css'


// 创建一个 Vue 实例，使用 render 函数，渲染指定的组件
const vm = new Vue({
    el: '#app',
    render: c=>c(app),  // 记住： 使用 render 函数渲染出来的组件，叫做 根组件；将来，其它的组件，只能在 app 组件的内部去渲染；
    router
});






























// // 真机调试
// import VConsole from 'vconsole';
// const vConsole = new VConsole();
// // [Vue warn]: Property or method "toJSON" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/
// // console.log("Hello world", vm);
// var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
// console.log("Hello, window.json! ", window.JSON.stringify(obj));