<template>
  <view>
    <view class="topbars">
      <topBar :tabBars="tabBars" :tabIndex="tabIndex" @topBar="topBar"></topBar>
    </view>

    <view class="uni-tab-bar" style="padding-left: 0">
      <swiper
        class="swiper-box"
        :style="{ height: swiperHeight + 'px' }"
        :current="tabIndex"
        @change="tabChange"
      >
        <!-- 互关 -->
        <swiper-item>
          <scroll-view scroll-y class="list" @scrolltolower="loadmore()">
            <userChatList :userlist="userlist"></userChatList>
          </scroll-view>
        </swiper-item>
        <!-- 关注 -->
        <swiper-item style="height: 300px">
          <scroll-view scroll-y class="list">
            <no-thing></no-thing>
          </scroll-view>
        </swiper-item>
        <!-- 粉丝 -->
        <swiper-item style="height: 300px">
          <scroll-view scroll-y class="list">
            <no-thing></no-thing>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import noThing from "../../components/common/no-thing.vue";
import topBar from "../../components/topbar/topbar.vue";
import userChatList from "../../components/userchat-list/userchat-list.vue";
export default {
  components: {
    topBar,
	userChatList,
	noThing
  },
  data() {
    return {
      swiperHeight: 0,
      tabIndex: 0,
      tabBars: [
        { name: "互关", id: "Murelations", num: 10 },
        { name: "关注", id: "follow", num: 10 },
        { name: "粉丝", id: "fans", num: 10 },
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
  // 监听原生标题导航按钮点击事件
  onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateBack({
        delta: 1,
      });
    }
  },
  // 监听搜索框文本变化
  onNavigationBarSearchInputChanged() {
    console.log(e.text);
  },
  // 监听点击搜索按钮事件
  onNavigationBarSearchInputConfirmed() {
    console.log(e.text);
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
    // 上拉加载
    loadmore(index) {
      // if (this.newsList[index].loadtext != "上拉加载更多") {
      //   return;
      // }
      // // 修改状态
      // this.newsList[index].loadtext = "加载中...";
      // // 获取数据
      // setTimeout(() => {
      //   // 获取数据完成
      //   let obj = {
      //     userpic: require("../../static/demo/userpic/12.jpg"),
      //     username: "小马",
      //     follow: false,
      //     title: "新时代社会主义",
      //     type: "img", //img:图文,video:视频
      //     titlepic: require("../../static/demo/datapic/11.jpg"),
      //     infonum: {
      //       index: 2, // !0表示没有操作，1表示已经顶了，2表示已经踩了
      //       dingnum: 11,
      //       cai: 10,
      //     },
      //     commentnum: 10,
      //     forward: 12,
      //   };
      //   this.newsList[index].list.push(obj);
      //   this.newsList[index].loadtext = "上拉加载更多";
      // }, 1000);
      // this.newsList[index].loadtext = "没有更多数据了";
    },
  },
};
</script>

<style scoped>
.topbars {
  margin-top: 12px;
}
</style>
