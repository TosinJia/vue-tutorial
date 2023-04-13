<template>
  <div>
    <h3>点击减少数值：{{ count }}</h3>
    <input type="button" value="-1" @click="newSub(2, 1)">
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["sub"]),
    ...mapActions(["newSub"])
  },
  computed: {
    ...mapState(["count"])
  }
};
</script>

<style lang="scss" scoped>

</style>
