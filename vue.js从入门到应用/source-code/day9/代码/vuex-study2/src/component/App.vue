<template>
  <div>
    
    <increment></increment>

    <hr>

    <subtract></subtract>

    <hr>

    <info></info>

  </div>
</template>

<script>
import increment from "./counter/increment.vue";
import subtract from "./counter/subtract.vue";
import info from "./counter/info.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    increment,
    subtract,
    info
  }
};
</script>

<style lang="scss" scoped>

</style>
