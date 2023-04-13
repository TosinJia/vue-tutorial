<template>
  <div>
    <h3>点击增加数值：{{ count }}</h3>
    <input type="button" value="+1" @click="$emit('func')">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["count"]
};
</script>

<style lang="scss" scoped>

</style>
