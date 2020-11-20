<script>
export default {
  onLaunch: function () {
    // 网路监听（用户目前断网，切换wifi）
    this.lib.NetWork.On();
    // 初始化用户状态
    this.User.__init();
    // 更新检测
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/* 引入特效库 */
@import "./common/animate.css";
/* 引入自定义图标库 */
@import "./common/iconfont.css";
/*引入高频可复用样式 */
@import "./common/common.css";
@import "./common/uni.css";

/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url("/static/uni.ttf");
}
/* #endif */
.container {
  /* padding: 20px;
		font-size: 14px;
		line-height: 24px; */
}
</style>
