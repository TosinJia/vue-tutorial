<template>
  <div>
    
    <increment :count="count" @func="add"></increment>

    <hr>

    <subtract :count="count" @func="sub"></subtract>

  </div>
</template>

<script>
import increment from "./counter/increment.vue";
import subtract from "./counter/subtract.vue";

export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add() {
      this.count++;
    },
    sub() {
      this.count--;
    }
  },
  components: {
    increment,
    subtract
  }
};
</script>

<style lang="scss" scoped>

</style>
