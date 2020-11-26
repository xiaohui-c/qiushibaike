<template>
  <view>
    <view class="bgimg u-f-asb">
      <image :src="logo" lazy-load mode="widthFix"></image>
    </view>
    <view class="version"> version 1.0.0 </view>
    <view>
      <uni-collapse accordion="true">
        <uni-collapse-item title="新版本问题" :show-animation="true">
          <view style="padding: 30upx"> 折叠内容主体，可自定义内容及样式 </view>
        </uni-collapse-item>
        <uni-collapse-item title="仿糗事百科用户协议" :show-animation="true">
          <view style="padding: 30upx"> 折叠内容主体，可自定义内容及样式 </view>
        </uni-collapse-item>
      </uni-collapse>
    </view>
  </view>
</template>

<script>
import uniCollapse from "../../components/uni-collapse/uni-collapse.vue";
import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue";
export default {
  comments: {
    uniCollapseItem,
    uniCollapse,
  },
  data() {
    return {
      logo:''
    };
  },
  onShow() {
    this.getImage();
  },

  methods: {
    getImage() {
      uni.request({
        url: "https://www.xiaohui.ac.cn/netdata/api/logo/about", 
        success: (res) => {
          console.log(res);
          this.logo=res.data.url
        },
      });
    },
  },
};
</script>

<style scoped>
.bgimg {
  padding: 40px 0 20px 0;
}
.bgimg > image {
  height: 150px;
  width: 200px;
}
.version {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 20px;
  text-align: center;
}
</style>
