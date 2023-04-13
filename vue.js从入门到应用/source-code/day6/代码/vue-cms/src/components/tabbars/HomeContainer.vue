<template>
  <div>
    <!-- 轮播图区域 -->
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, i) in lunbotu" :key="i">
      <img :src="item.img" alt="">
    </mt-swipe-item>
  </mt-swipe>


    <h3>HomeContainer</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotu: [] // 轮播图的数组
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    async getlunbotu() {
      // 获取轮播图的方法
      const { data } = await this.$http.get("/api/getlunbo");
      if (data.status === 0) this.lunbotu = data.message;
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;

  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: pink;
    }
    &:nth-child(3) {
      background-color: hotpink;
    }
  }
}
</style>
