<template>
    <div>
        src\component\NoVuexApp.vue

        
        <increment v-bind:count="count" v-on:add="add" v-on:func-add2="add2"/>
        <subtraction v-bind:data-count="count" v-on:func-reduce="reduce" />
    </div>
</template>

<script>
import increment from './counter/increment.vue';
import Subtraction from './counter/Subtraction.vue';

export default {
    data: function(){
        return {
            count: 0,
        };
    },
    methods:{
        add:function(){
            this.count++;
        },
        add2:function(step){
            this.count+=step;
        },
        reduce: function(step=1){
            this.count-=step;
        }
    },
    components:{
        increment,
        Subtraction,
    }
}
</script>