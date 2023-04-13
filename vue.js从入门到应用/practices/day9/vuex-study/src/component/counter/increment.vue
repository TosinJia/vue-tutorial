<template>
    <div>
        <h5>点击增加数值：{{count}}</h5>
        <input type="button" value="+1" v-on:click="add" />
        <input type="button" value="+2" v-on:click="add2(2)" />
    </div>
</template>

<script>
export default {
    props: ["count"],
    methods: {
        add: function(){
            this.$emit('add');
        },
        add2: function(step){
            this.$emit('func-add2', step);
        }
    }
}
</script>