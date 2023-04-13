<template>
  <div class="app-container">

    <!-- 在这里放一个 Header  -->
    <mt-header fixed title="黑马程序员·Vue项目">
      <span slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 路由的容器坑 -->
    <transition>
			<router-view></router-view>
		</transition>


    <!-- tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>


<script>
</script>

// 这里写的样式，要符合 scss 语法，并且，样式是 当前组件私有的，不会成为全局的样式，也不会应用给子组件
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  // 当有组件切换动效的时候，一瞬间，页面的宽度会变成 正常宽度的 2 倍，此时，需要隐藏超出屏幕宽度的区域
  overflow: hidden;
}

// 动画效果相关的类样式
.v-enter {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.mint-header {
  z-index: 99;
}
</style>
