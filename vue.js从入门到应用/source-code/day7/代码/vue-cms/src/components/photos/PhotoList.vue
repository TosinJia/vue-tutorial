<template>
  <div>

    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							aaa
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							bbb
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							ccc
						</a>
					</div>
				</div>

			</div>

    <h3>图片分享组件</h3>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
// 导入 mui 的JS文件， 这样，就可以使用 mui 来初始化 滑动控件了
import mui from "../../../lib/mui/js/mui.js";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // 当此钩子函数执行的时候，我们才可以进行控件或插件的初始化工作；
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
.mui-slider {
  touch-action: pan-x;
}
</style>
