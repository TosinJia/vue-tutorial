<template>
    <div>
        <h5>点击减少数值：{{dataCount}}</h5>
        <input type="button" value="-1" v-on:click="reduce" /> 
        <input type="button" value="-2" v-on:click="reduce2(2)" /> 
    </div>
</template>

<script>
export default {
    props: ["data-count"],
    methods: {
        reduce: function(){
            this.$emit('func-reduce');
        },
        reduce2: function(step){
            this.$emit('func-reduce', step);
        }
    }
}
</script>