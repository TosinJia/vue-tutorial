<template>
  <div>
    <!-- <h3>点击增加数值：{{ $store.state.count }}</h3> -->
    <h3>点击增加数值：{{ count }}</h3>
    
    <input type="button" value="+1" @click="newAdd(2)">

    <!-- <p>{{ newMsg }}</p> -->
  </div>
</template>

<script>
// 按需导入 mapState 辅助函数
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "123"
    };
  },
  created() {
    this.showCount();
  },
  methods: {
    showCount() {
      // 第一种使用 state 中数据的方式，比较麻烦
      console.log(this.$store.state.count);
    },
    /*  increment() {
      // 点击按钮，让数值 + 1
      // console.log('ok')
      // 不推荐使用下面的方式，去修改state
      // this.$store.state.count++;
      // 如果在组件中，要调用 mutations 中的函数，只能通过 this.$store.commit() 来调用
      this.$store.commit("add");
    } */
    ...mapMutations(["add"]),
    ...mapActions(["newAdd"])
  },
  computed: {
    // 自定义的计算属性
    newMsg: function() {
      return "----" + this.msg + "------";
    },
    // 通过 展开运算符，把 state中的数据映射为计算属性，这样，能够让自己的计算属性和store中的属性并存
    ...mapState(["count"])
  }
};
</script>

<style lang="scss" scoped>

</style>
