<template>
    <div>
        <!-- 6. 在组件中访问全局的数据 -->
        VuexApp.vue-{{this.$store.state.vuexcount}}
        <increment />
        
        <subtraction />
    </div>
</template>

<script>
import Increment from './vuexcounter/Increment.vue';
import Subtraction from './vuexcounter/Subtraction.vue';
export default {
    components:{
        Increment,
        Subtraction,
    }
}
</script>