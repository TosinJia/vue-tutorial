<template>
  <div class="goodsinfo-container">
    
    <!-- 轮播图区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotu="lunbotu" :imgname="'src'"></swiper>
					</div>
				</div>
			</div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：
              <span style="margin-right: 10px;"><del>￥{{ goodsinfo.market_price }}</del></span>
              销售价：
              <span style="font-size: 16px; color: red; font-weight: bold;">￥{{ goodsinfo.sell_price }}</span>
            </p>
            <p>
              购买数量：
              <!-- 注意： 这里 的 max 是库存量 -->
              <!-- 由于 goodsinfo 是通过 Ajax 动态获取回来的，但是，Ajax 是异步请求，需要消耗时间 -->
              <!-- 因此，可能会导致这样的情况： bobox 组件 先于 Ajax 渲染出来，此时， 组件被渲染的时候， goodsinfo 为 空对象，因此，传递到子组件中的 stock_quantity 是 undefined；  -->
              <nobox :max="goodsinfo.stock_quantity"></nobox>
              <!-- <nobox :max="60"></nobox> -->
            </p>
            <div>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </div>
					</div>
				</div>
			</div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodsinfo.goods_no }}</p>
						<p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
						<p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer btnarea">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
			</div>

  </div>
</template>

<script>
// 导入自己封装的轮播图组件
import swiper from "../sub-components/Swiper.vue";
// 导入 数字框组件
import nobox from "../sub-components/goodsinfo_nobox.vue";

export default {
  data() {
    return {
      lunbotu: [], //商品的轮播图
      goodsinfo: {} // 商品的详情
    };
  },
  created() {
    this.getlunbotu();
    this.getGoodsInfoById();
  },
  methods: {
    async getlunbotu() {
      // 获取轮播图的方法
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      if (data.status === 0) return (this.lunbotu = data.message);
    },
    async getGoodsInfoById() {
      // 根据ID获取商品的参数
      const { data } = await this.$http.get("/api/goods/getinfo/" + this.id);
      if (data.status === 0) return (this.goodsinfo = data.message[0]);
    }
  },
  props: ["id"],
  components: {
    // 注册子组件
    swiper,
    nobox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .btnarea {
    flex-direction: column;
    button + button {
      margin-top: 15px;
    }
  }
}
</style>
