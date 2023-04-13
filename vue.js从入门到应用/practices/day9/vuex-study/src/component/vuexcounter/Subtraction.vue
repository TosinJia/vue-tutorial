<template>
    <div>
        vuexcounter\Subtraction.vue

        <h5>点击减少数值：{{vuexcount}}-{{vuexcountInfo}}</h5>
        <input type="button" value="[reduce]-" v-on:click="reduce" />
        <input type="button" value="[reduce()]-" v-on:click="reduce()" />
        <input type="button" value="[newReduce()]-" v-on:click="newReduce()" />

        <input type="button" value="[reduce]-2" v-on:click="reduce(2)" />
        <input type="button" value="[newReduce]-2" v-on:click="newReduce(2)" />
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState(["vuexcount"]),
        ...mapGetters(["vuexcountInfo"]),
    },
    methods: {
        ...mapMutations(["reduce"]),
        ...mapActions(["newReduce"]),
    }
}
</script>