<template>
    <div>
        <!-- 6. 在组件中访问全局的数据 -->
        src\component\vuexcounter\Increment.vue
        {{newMsg}}
        <br>
        getters:{{this.$store.getters.vuexcountInfo}}-{{vuexcountInfo}}

        <h5>点击增加数值：{{this.$store.state.vuexcount}}</h5>
        <h5>点击增加数值：{{vuexcount}}</h5>
        <input type="button" value="[add1]+1" v-on:click="add1">
        <input type="button" value="[add]+1" v-on:click="add">
        <input type="button" value="[newAdd1]+1" v-on:click="newAdd1">
        <input type="button" value="[newAdd]+1" v-on:click="newAdd">
        <hr>
    </div>
</template>

<script>
// 按需导入 mapState 辅助函数
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
    created: function(){
        this.showCount();
    },
    methods: {
        showCount: function(){
            // 第一种使用 state 中数据的方式，比较麻烦
            console.log("Increment.vue showCount", this.$store.state.vuexcount);
        },
        add1: function(){
            console.log("Increment.vue add");

            // 不推荐使用下面的方式，去修改state
            // this.$store.state.vuexcount++;
            // 如果在组件中，要调用 mutations 中的函数，只能通过 this.$store.commit() 来调用
            // $store.commit('add');   // ReferenceError: $store is not defined
            this.$store.commit('add');
        },
        ...mapMutations(['add']),
        newAdd1: function(){
            console.log("Increment.vue newAdd1");
            this.$store.dispatch('newAdd');
        },
        ...mapActions(['newAdd']),
    },
    // computed: mapState(['vuexcount']),
    computed: {
        // 自定义的计算属性
        newMsg: function(){
            return "~~"+this.vuexcount+"~~";
        },
        // 通过 展开运算符，把 state中的数据映射为计算属性，这样，能够让自己的计算属性和store中的属性并存
        ...mapState(["vuexcount"]),
        ...mapGetters(["vuexcountInfo"]),
    },
}


// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const obj = {
    a: 10,
    b: 20,
    c: 30,
};
const newObj = {
    d: 40,
    e: 50,
    ...obj, 
}
console.log("展开运算符测试", obj, newObj);
</script>