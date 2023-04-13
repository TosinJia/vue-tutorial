<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// 导入 mui 从而支持 初始化 数字框
import mui from "../../../lib/mui/js/mui.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // 当组件挂载到页面中之后，去初始化 数字框
    // console.log(this.max);
    mui(".mui-numbox").numbox();
  },
  methods: {},
  props: ["max"], // 接收父组件传递过来的 库存量 max
  watch: {
    // 使用场景： 监听单个的虚拟的数据
    max: function(newval, oldval) {
      // 不论外界传递给 nobox 的 max 值到底是什么；
      // 最终，最后传递的那个 max 值，肯定是一个 合法的数值；
      // console.log(newval + " --- " + oldval);
      // 每当 监听到 max 值的改变，不论这个值是否合法，我们都重新为 数字框 ，使用 JS API，来手动设置最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
