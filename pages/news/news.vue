<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar
      :fixed="true"
      :statusBar="true"
      @clickRight="openAdd"
      class="head-area"
    >
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

    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{height:swiperHeight+'px'}"
        :current="tabIndex"
        @change="tabChange"
      >
        <swiper-item v-for="(item,index) in newsList" :key="index">
          <scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
            <template v-if="item.list.length>0">
              <!-- 每一个话题区域 组件已封装-->
              <block>
                <common-list :list="item.list"></common-list>
              </block>
              <!-- 上拉加载区域 组件已封装-->
              <loadMore :loadtext="item.loadtext"></loadMore>
            </template>
            <template v-else>
              <noThing></noThing>
            </template>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
import commonList from "../../components/common/common-list.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue";
export default {
  components: {
    uniNavBar,
    commonList,
    loadMore,
    noThing
  },
  data() {
    return {
      tabIndex: 0,
      // 主内容区域高度
      swiperHeight: 0,
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "话题", id: "topic" },
      ],
      newsList: [
        {
          loadtext: "上拉加载更多",
          list: [
            // 图文
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "小灰",
              sex: 1, //0 男 1 女
              age: 25,
              follow: false,
              title: "关于加强思想层面深建设",
              titlepic: "../../static/demo/datapic/13.jpg",
              video: false,
              share: false,
              path: "深圳 龙岗",
              sharenum: 20,
              commentnum: 30,
              goodnum: 20,
            },
            // 视频
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "小灰",
              sex: 0, //0 男 1 女
              age: 25,
              follow: false,
              title: "关于加强思想层面深建设",
              titlepic: "../../static/demo/datapic/13.jpg",
              video: {
                visitnum: "20w",
                long: "2:47",
              },
              share: false,
              path: "深圳 龙岗",
              sharenum: 20,
              commentnum: 30,
              goodnum: 20,
            },
            // 分享
            {
              userpic: "../../static/demo/userpic/12.jpg",
              username: "小灰",
              sex: 0, //0 男 1 女
              age: 25,
              follow: false,
              title: "关于加强思想层面深建设",
              titlepic: "",
              video: false,
              share: {
                title: "下一阶段面试计划",
                titlepic: "../../static/demo/datapic/13.jpg",
              },
              path: "深圳 龙岗",
              sharenum: 20,
              commentnum: 30,
              goodnum: 20,
            },
          ],
        },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
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
     // 上拉加载
    loadmore(index) {
      if (this.newsList[index].loadtext != "上拉加载更多") {
        return;
      }
      // 修改状态
      this.newsList[index].loadtext = "加载中...";
      // 获取数据
      setTimeout(() => {
        // 获取数据完成
        let obj = {
          userpic: require("../../static/demo/userpic/12.jpg"),
          username: "小马",
          follow: false,
          title: "新时代社会主义",
          type: "img", //img:图文,video:视频
          titlepic: require("../../static/demo/datapic/11.jpg"),
          infonum: {
            index: 2, // !0表示没有操作，1表示已经顶了，2表示已经踩了
            dingnum: 11,
            cai: 10,
          },
          commentnum: 10,
          forward: 12,
        };
        this.newsList[index].list.push(obj);
        this.newsList[index].loadtext = "上拉加载更多";
      }, 1000);
      // this.newsList[index].loadtext = "没有更多数据了";
    },
    // 图文列表滑动
    tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    
  },
  onLoad() {
    // 计算并设置主要内容区域高度
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(100);
        this.swiperHeight = height;
      },
    });
  }
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
</style>
