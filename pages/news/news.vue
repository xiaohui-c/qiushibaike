<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar :statusBar="true" @clickRight="openAdd">
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left">
          <view class="icon iconfont icon-qiandao"></view>
        </view>
      </block>
      <!-- 中间 -->
      <view class="nav-tab-bar u-f-asb">
        <block v-for="(tab, index) in tabBars" :key="tab.id">
          <view
            class="u-f-asb"
            :class="{ active: tabIndex == index }"
            @tap="changeTab(index)"
          >
            {{ tab.name }}
            <view v-if="tabIndex == index" class="nav-tab-bar-line"></view>
          </view>
        </block>
      </view>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-bianji1"></view>
        </view>
      </block>
    </uni-nav-bar>
    <!-- 列表 -->
    <view class="common-list u-f">
      <!-- 左侧头像 -->
      <view class="common-list-left">
        <image
          src="../../static/demo/userpic/12.jpg"
          mode="widthFix"
          lazy-load
        ></image>
      </view>
      <!-- 右侧主要内容 -->
      <view class="common-list-right">
        <!-- 个人信息栏 -->
        <view class="u-f u-f-jc u-f-ac">
          <view class="u-f nickName"
            >昵称<view class="icon iconfont icon-nan u-f-asb">25</view></view
          >
          <view class="icon iconfont icon-zengjia follow">关注</view>
        </view>
        <!-- 文章标题 -->
        <view>我是标题</view>
        <!-- 图片视频 -->
        <view class="videoImg u-f-asb">
          <!-- 图片 -->
          <image
            src="../../static/demo/datapic/13.jpg"
            mode="widthFix"
            lazy-load
          ></image>
          <!-- 视频 -->
          <view class="common-list-play icon iconfont icon-bofang"></view>
          <view class="common-list-playinfo">20w 次播放 2:47</view>
        </view>
        <!-- 发布地点及阅览数据 -->
        <view class="u-f-ajb address-data">
          <view>深圳 龙岗</view>
          <view class="u-f-aje followdata">
            <view class="icon iconfont icon-zhuanfa">10</view>
            <view class="icon iconfont icon-pinglun1">20</view>
            <view class="icon iconfont icon-dianzan1">30</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
export default {
  components: {
    uniNavBar,
  },
  data() {
    return {
      tabIndex: 0,
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "话题", id: "topic" },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    openAdd() {
      // 打开发布页面
      uni.navigateTo({
        url: "../add-input/add-input",
      });
    },
  },
};
</script>

<style>
.nav-left > view,
.nav-right > view {
  font-size: 40upx;
}
.nav-left > view {
  color: #ff9619;
}
.nav-left {
  margin-left: 16upx;
}
.nav-right {
  width: 100%;
}
.nav-tab-bar {
  width: 100%;
  margin-left: -20upx;
  position: relative;
}
.nav-tab-bar > view {
  font-size: 32upx;
  padding: 0 15upx;
  font-weight: bold;
  color: #969696;
}
.active {
  color: #333333 !important;
}
.nav-tab-bar-line {
  border-bottom: 5upx solid #fede33;
  border-top: 5upx solid #fede33;
  width: 70upx;
  border-radius: 20upx;
  position: absolute;
  bottom: 10upx;
}
.common-list {
  padding: 5px 5px;
}
.common-list-left {
  padding-top: 10px;
  flex-shrink: 0;
}
.common-list-left > image {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.common-list-right {
  padding: 5px;
  width: 90%;
  flex: 1;
  border-bottom: 1upx solid #eeeeee;
}
.nickName {
  color: #a5a5a5;
}
.nickName view {
  width: 30px;
  height: 15px;
  background: #44b3ff;
  position: relative;
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  top: 5px;
  left: 4px;
}
.follow {
  font-size: 12px;
  background: #f4f4f4;
  border-radius: 4px;
  margin-right: 8px;
  padding: 2px 4px;
}
.videoImg {
  position: relative;
}
.videoImg > image {
  width: 100%;
  border-radius: 4px;
}
.common-list-play {
  color: #fff;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.common-list-playinfo {
  position: absolute;
  left: 70%;
  top: 80%;
  color: #fff;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 3px 4px;
  border-radius: 7px;
}
.address-data {
  color: #c5c5c5;
}
.followdata > view {
  font-size: 12px;
  margin: 0 4px;
}
</style>
