<template>
  <!-- 页面整体容器 -->
  <view class="container">
    <!-- 糗事页 -->
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
      <view class="nav-tab-bar u-f-asb serach-input" style="margin-top:20px;margin-bottom:10px;height:5px;" @tap="serachContainer">
        <input
          class="uni-input u-f-asb"
          disabled
          placeholder-class="icon iconfont icon-sousuo topic-search"
          placeholder="搜索糗事"
        />
      </view>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-bianji1"></view>
        </view>
      </block>
    </uni-nav-bar>
    <!-- 顶部导航栏 组件已封装-->
    <topBar
      :tabBars="tabBars"
      :tabIndex="tabIndex"
      @topBar="topBar"
      :newspage="newspage"
      :linewidth="linewidth"
      :scroll="scroll"
    ></topBar>

    <!-- 图文列表区域 -->
    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{ height: swiperHeight + 'px' }"
        :current="tabIndex"
        @change="tabChange"
      >
        <swiper-item v-for="(item, index) in newsList" :key="index">
          <scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
            <template v-if="item.list.length > 0">
              <!-- 每一个话题区域 组件已封装-->
              <block>
                <IndexList :list="item.list"></IndexList>
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
import IndexList from "../../components/index/index-list.vue";
import topBar from "../../components/topbar/topbar.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue";
import { statMixin } from "../../Mixin/loadmore.js";
export default {
  mixins: [statMixin],
  components: {
    IndexList,
    topBar,
    loadMore,
    noThing,

    uniNavBar,
  },
  data() {
    return {
      // 顶部栏默认下标
      tabIndex: 0,
      // 主内容区域高度
      swiperHeight: 0,
      scroll: 0,
      // 视口宽度(width)
      scrollwidth: 360,
      linewidth: 38,
      newspage: true,
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "推荐", id: "tuijian" },
        { name: "体育", id: "tiyu" },
        { name: "热点", id: "redian" },
        { name: "财经", id: "caijing" },
        { name: "娱乐", id: "yule" },
      ],
      newsList: [
        {
          loadtext: "上拉加载更多",
          list: [
            {
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
            },
            {
              userpic: require("../../static/demo/userpic/12.jpg"),
              username: "小马",
              follow: false,
              title: "新时代社会主义",
              type: "video", //*img:图文,video:视频
              playnum: "2w",
              long: "2:37",
              titlepic: require("../../static/demo/datapic/11.jpg"),
              infonum: {
                index: 1, //?0表示没有操作，1表示已经顶了，2表示已经踩了
                dingnum: 11,
                cai: 10,
              },
              commentnum: 10,
              forward: 12,
            },
          ],
        },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
      ],
      obj: {
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
      },
    };
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
    openAdd() {
      uni.navigateTo({
        url: "../add-input/add-input",
      });
    },
    serachContainer() {
      uni.navigateTo({
        url: "../search/search",
      });
    },
  },
};
</script>

<style scoped>
.icon-qiandao {
  color: #ffab48;
}
.icon-bianji1 {
  position: relative;
  right: -4px;
}
.icon-qiandao,
.icon-bianji1 {
  font-size: 18px !important;
}
.search-input {
  padding: 4px 10px;
}
.uni-input {
  background: #f4f4f4;
  border-radius: 6px;
  height: 10px;
  text-align: center;
  line-height: 10px;
  width: 250px;
}
.topic-search {
  font-size: 12px;
}
</style>
