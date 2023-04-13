<template>
  <div>
    <!-- <h3>{{ $store.getters.countinfo }}</h3> -->
    <h3>{{ countinfo }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["countinfo"])
  }
};
</script>

<style lang="scss" scoped>

</style>
