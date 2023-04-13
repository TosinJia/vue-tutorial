// 1. 结构
<template>
<!-- template 中，只能有唯一的一个根元素 -->
    <div>
        <!-- 注意：在 .vue 的组件中，template 中必须有且只有唯一的根元素进行包裹，一般都用 div 当作唯一的根元素 -->
        <h1>APP组件</h1>
        <h5>msg: {{ msg }}</h5>

        <router-link to="/login">登录</router-link>
        <router-link to="/reg">注册</router-link>
        
        <!-- 路由组件的占位符，将来，路由规则匹配到的组件，就会填充到这个位置 -->
        <router-view></router-view>

        <hr>
        <span>Mint UI</span>
        <!-- 使用 Mint-UI中的按钮组件 引入全部组件起作用 -->
        <mt-button type="primary" size="large" plain icon="more" v-on:click="show()">primary</mt-button>

        <hr>
        <span>MUI</span><br>
        <span>mui-master/examples/hello-mui/examples/buttons.html</span>
        <br>
        <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
        <button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">
					高贵
				</button>
    </div>
</template>

// 2. 行为
<script>
// 使用 JS Component 之前，先按需导入一下需要的组件
import {Toast} from 'mint-ui';


// 注意：在 .vue 的组件中，通过 script 标签来定义组件的行为，需要使用 ES6 中提供的 export default 方式，导出一个vue实例对象
export default {
    data: function(){
        return {
            msg: 'OK!'
        }
    },
    methods:{
        show: function(){
            console.log(this);
            console.log(Toast);
            Toast('Toast:提示信息');
            Toast({
                message: '提示',
                position: 'bottom',
                duration: -1,
                // iconClass: 'icon icon-success',  //若需在文字上方显示一个 icon 图标，可以将图标的类名作为 iconClass 的值传给 Toast（图标需自行准备）
                iconClass: 'glyphicon glyphicon-king mysweetheart',  
            });
        }
    },
    filters:{},
    components:{},
    directives:{},
    props:[]
}

</script>

// 3. 样式
// style 标签中的 scoped 是为 这个组件的 CSS 样式，设置作用域的
// 为当前组件里所有元素都创建一个随机的自定义属性
<style scoped>
h5 {
    color: red;
}
</style>