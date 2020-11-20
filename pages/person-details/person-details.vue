<template>
  <view class="person-container">
    <!-- 自定义导航栏 -->
    <uni-nav-bar :statusBar="true" @clickRight="dropDownMenu" @clickLeft="back" class="head-area">
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left u-f-asb">
          <view class="icon iconfont icon-fanhui"></view>
        </view>
      </block>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-gengduo1"></view>
        </view>
      </block>
    </uni-nav-bar>
    <!--遮罩层 -->
    <view class="mask" v-show="dropMeun" @tap="dropclick"></view>
    <!-- 下拉列表 -->
    <view class="drop-down-menu" v-show="dropMeun" @tap="dropclick">
      <view id="1"><text class="icon iconfont icon-sousuo"></text>备注</view>
      <view id="2"><text class="icon iconfont icon-qingchu"></text>拉黑</view>
    </view>
    <view class="topic-bg">
      <image
        src="../../static/demo/datapic/41.jpg"
        lazy-load
        mode="aspectFill"
      ></image>
    </view>
    <!-- 头像区域 -->
    <view class="header-container u-f-dasb u-f-ac">
      <view class="img">
        <image src="../../static/demo/userpic/19.jpg"></image>
      </view>
      <view class="name u-f">
        <view style="color: #ffffff">JIA一勺</view>
        <view class="icon iconfont u-f-asb icon-nan sex"> 20 </view>
      </view>
      <view class="follow icon iconfont icon-zengjia"> 关注 </view>
    </view>
    <view id="mask" style="background: white">
      <!-- 数据区域 -->
      <view class="data-box u-f-aje">
        <view class="data-item">
          <view class="data-item-num">10K</view>
          <view class="data-item-name">获赞</view>
        </view>
        <view class="data-item">
          <view class="data-item-num">11</view>
          <view class="data-item-name">关注</view>
        </view>
        <view class="data-item">
          <view class="data-item-num">12</view>
          <view class="data-item-name">粉丝</view>
        </view>
      </view>
      <view class="middle-liner"></view>
      <view class="topbars">
        <topBar
          :tabBars="tabBars"
          :tabIndex="tabIndex"
          @topBar="topBar"
        ></topBar>
      </view>

      <!-- 内容 -->
      <view class="uni-tab-bar" style="padding-left: 0">
        <swiper
          class="swiper-box"
          :style="{ height: swiperHeight + 'px' }"
          :current="tabIndex"
          @change="tabChange"
        >
          <!-- 主页 -->
          <swiper-item>
            <scroll-view scroll-y class="list" @scrolltolower="loadmore()">
              <view class="main-info">
                <view class="count-info">
                  <view class="title">账号信息</view>
                  <view>糗龄:1年8月6日</view>
                  <view>糗百ID:1215</view>
                </view>
                <view class="person-info">
                  <view class="title">个人信息</view>
                  <view>星座:天蝎座</view>
                  <view>职业:IT</view>
                  <view>故乡:广东广州</view>
                  <view>情感状态:已婚</view>
                </view>
              </view>
            </scroll-view>
          </swiper-item>
          <!-- 糗事 -->
          <swiper-item>
            <scroll-view scroll-y class="list">
              <no-thing></no-thing>
            </scroll-view>
          </swiper-item>
          <!-- 动态 -->
          <swiper-item>
            <scroll-view scroll-y class="list">
              <no-thing></no-thing>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script>
import topBar from "../../components/topbar/topbar.vue";
import noThing from "../../components/common/no-thing.vue";
import userChatList from "../../components/userchat-list/userchat-list.vue";

export default {
  components: {
    topBar,
    noThing,
    userChatList,
  },
  data() {
    return {
      dropMeun: false,
      tabIndex: 0,
      swiperHeight: 0,
      tabBars: [
        { name: "主页", id: "main" },
        { name: "糗事", id: "funnyThing" },
        { name: "动态", id: "news" },
      ],
      userlist: [
        {
          headerimg: "../../static/demo/userpic/4.jpg",
          name: "Supzeol",
          sex: 0,
          age: 26,
        },
        {
          headerimg: "../../static/demo/userpic/14.jpg",
          name: "Supzeol",
          sex: 1,
          age: 13,
        },
        {
          headerimg: "../../static/demo/userpic/5.jpg",
          name: "Supzeol",
          sex: 0,
          age: 16,
        },
      ],
    };
  },

  onLoad() {
    // 计算并设置主要内容区域高度
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(100);
        this.swiperHeight = height;
      },
    });
  },
  methods: {
    // 顶部导航点击事件
    topBar(index) {
      this.tabIndex = index;
    },
    // 图文列表滑动
    tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    // 采用事件委托
    dropclick(e) {
      setTimeout(() => {
        this.dropMeun = false;
      }, 260);
    },
    dropDownMenu() {
      this.dropMeun = !this.dropMeun;
    },
    back(){
      uni.navigateBack({
        delta: 1,
      });
    }
  },
};
</script>

<style scoped>
.person-container {
  position: relative;
}
.topic-bg {
  height: 240px;
  overflow: hidden;
}
.topic-bg image {
  width: 100%;
}
.header-container {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 10%;
}
.header-container > view {
  margin-bottom: 12px;
}
.img > image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.follow {
  padding: 4px 14px;
  height: 20px;
  background: #ffe933;
  font-size: 13px;
  border-radius: 8px;
}
.sex {
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
.data-box {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 4px 0 0 0;
  transform: translateY(-10px);
  background: #fff;
}
#mask {
  position: relative;
  z-index: 1200;
}
.data-item-num {
  text-align: center;
  font-weight: 700;
  font-size: 14px;
}
.data-item-name {
  font-size: 13px;
  color: #bbbbbb;
}
.middle-liner {
  width: 100%;
  height: 10px;
  background: #f4f4f4;
}
.main-info {
  padding: 16px 10px;
}
.main-info > view {
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 10px;
}
.title {
  margin: 10px 0;
  font-size: 16px;
}
.title ~ view {
  color: #afafaf;
}
.drop-down-menu {
  position: fixed;
  z-index: 2000;
  right: 0;
  top: 130px;
  background: #fff;
  box-shadow: 0 0 15px #dfdfdf;
  width: 150px;
}
.drop-down-menu view {
  padding: 8px;
}
.drop-down-menu view:hover {
  transition: 250ms;
  background: #f0f2f5;
}
.drop-down-menu .icon {
  margin: 0 10px;
  font-size: 14px;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1999;
}
.nav-left,
.nav-right {
  top: 50px;
  width: 40px;
  height: 40px;
  position: relative;
}
.topic-bg {
  height: 180px;
  overflow: hidden;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.topic-bg image {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 997;
}
.head-area .icon {
  border-radius: 50%;
  background: #605a59;
  padding: 0 8px;
}
.nav-left .icon-fanhui {
  color: #ffffff;
  position: fixed;
  font-size: 18px;
  z-index: 1200;
}
.nav-right .icon-gengduo1 {
  color: #ffffff;
  position: fixed;
  font-size: 18px;
  z-index: 1200;
}
</style>
