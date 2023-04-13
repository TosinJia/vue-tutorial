<template>
<!-- template 中，只能有唯一的一个根元素 -->
  <div>
    <h3>哈哈哈哈，好爽啊</h3>

  <router-link to="/login">登录</router-link>
  <router-link to="/reg">注册</router-link>

    <!-- 路由组件的占位符，将来，路由规则匹配到的组件，就会填充到这个位置 -->
    <router-view></router-view>

    <!-- 使用 Mint-UI中的按钮组件 -->
    <mt-button type="primary" size="normal" plain icon="more" @click="show">primary</mt-button>


    <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>

        <button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">
					高贵
				</button>
  </div>
</template>

<script>
// 使用 JS Component 之前，先按需导入一下需要的组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {};
  },
  methods: {
    show() {
      // console.log('ok')
      // Toast("提示信息");

      Toast({
        message: "ok",
        position: "top",
        duration: -1,
        iconClass: "glyphicon glyphicon-heart mysweetheart"
      });
    }
  },
  filters: {},
  components: {},
  directives: {},
  props: []
};
</script>


<style scoped>
h3 {
  color: red;
}
</style>
