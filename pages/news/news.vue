<template>
  <view class="status_bar">
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
          <view class="icon iconfont icon-bianji1" style="transform:translateX(14px)"></view>
        </view>
      </block>
    </uni-nav-bar>

    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{ height: swiperHeight + 'px' }"
        :current="tabIndex"
        @change="tabChange"
      >
        <!-- 关注 -->
        <swiper-item>
          <scroll-view scroll-y class="list" @scrolltolower="loadmore()">
            <common-list :imgcontain="imgcontain" :list="attention.list"></common-list>
            <!-- 上拉加载 -->
            <loadMore :loadtext="attention.loadtext"></loadMore>
          </scroll-view>
        </swiper-item>
        <!-- 话题 -->
        <swiper-item>
          <scroll-view scroll-y class="list">
            <!-- 搜索框 -->
            <view class="search-input">
              <input
                class="uni-input"
                placeholder-class="icon iconfont icon-sousuo topic-search"
                placeholder="搜索内容"
              />
            </view>
            <!-- 轮播图 -->
            <swiper
              class="topic-swiper u-f-asb"
              :indicator-dots="true"
              :autoplay="true"
              :interval="3000"
              :duration="1000"
            >
              <swiper-item
                v-for="(item, index) in hotClassfyImage"
                :key="index"
              >
                <image :src="item.img" mode="widthFix" lazy-load></image>
              </swiper-item>
            </swiper>
            <!-- 热门分类 -->
            <view class="hot-classify-box">
              <view class="hot-top-bar u-f-ajb">
                <text>热门分类</text>
                <view class="hot-top-bar-right" @tap="moreClassfy">
                  <text>更多</text>
                  <text class="icon iconfont icon-jinru"></text>
                </view>
              </view>
              <view class="hot-bottom-bar u-f-aje">
                <text v-for="(item, index) in hotClassfybtn" :key="index">{{
                  item
                }}</text>
              </view>
            </view>
            <!-- 最近更新 -->
            <view class="nearly-update-list-box">
              <view class="nearly-update-title">最近更新</view>
              <news-list :nearlyObjImg="nearlyObjImg" :nearlyObj="nearlyObj"></news-list>
            </view>
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
import newsList from "../../components/news/news-list.vue";
import { statMixin } from "../../Mixin/loadmore.js";
export default {
  mixins: [statMixin],
  components: {
    uniNavBar,
    commonList,
    loadMore,
    newsList,
  },
  data() {
    return {
      tabIndex: 0,
      scrollTop: 0,
      // 主内容区域高度
      swiperHeight: 0,
      nearlyObjImg:'',
      imgcontain:[],
      tabBars: [
        { name: "关注", id: "guanzhu" },
        { name: "话题", id: "topic" },
      ],
      attention: {
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
      hotClassfyImage: [],
      hotClassfybtn: ["最新", "游戏", "情感", "打卡", "故事", "喜爱"],
      nearlyObj: [
        {
          img: "../../static/demo/datapic/35.jpg",
          title: "淘宝记录",
          detail: "120斤到85斤 我的反转人生",
          newsnum: "545",
          today: "720",
        },
        {
          img: "../../static/demo/datapic/35.jpg",
          title: "你亲生经历的灵异事件",
          detail: "走出去，才发现你跟别人差的不是一点两点",
          newsnum: "577",
          today: "821",
        },
        {
          img: "../../static/demo/datapic/35.jpg",
          title: "天天打卡",
          detail:
            "面试官，在电梯里巧遇码云你会做什么？90后女孩的回答当场被录用",
          newsnum: "507",
          today: "707",
        },
      ],
      obj: {
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
    };
  },
    onShow() {
    this.getPersonImgInfo();
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
    moreClassfy() {
      // 打开发布页面
      uni.navigateTo({
        url: "../topic-classfy/topic-classfy",
      });
    },
    // // 上拉加载
    loadmore() {
      if (this.attention.loadtext != "上拉加载更多") {
        return;
      }
      // 修改状态
      this.attention.loadtext = "加载中...";
      // 获取数据
      setTimeout(() => {
        // 获取数据完成
        this.attention.list.push(this.obj);
        this.attention.loadtext = "上拉加载更多";
      }, 1000);
    },
    // 图文列表滑动
    tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    upper: function (e) {
      console.log(e);
    },
    lower: function (e) {
      console.log(e);
    },
    scroll: function (e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    },

     getPersonImgInfo(){
      uni.request({
        url: "https://www.xiaohui.ac.cn/netdata/api/news/follow", 
        success: (res) => {
          console.log(res);
          this.imgcontain = res.data.objHead;
          this.hotClassfyImage=res.data.hotClassfyImage;
          this.nearlyObjImg=res.data.nearlyObjImg
        },
      });
    }
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
.search-input {
  padding: 4px 10px;
}
.uni-input {
  background: #f4f4f4;
  border-radius: 6px;
  height: 10px;
  text-align: center;
  line-height: 10px;
}
.icon {
  font-size: 12px;
}
.topic-swiper {
  padding: 5px 0;
}
.topic-swiper swiper-item {
  height: 100%;
  display: flex;
  place-content: center;
}
.topic-swiper image {
  width: 95%;
  height: 100%;
  border-radius: 8px;
}
.hot-classify-box {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  padding: 15px 5px;
}
.hot-top-bar > text {
  color: #525252;
  font-size: 14px;
  margin-left: 4px;
}
.hot-top-bar-right text {
  color: #adadad;
}
.hot-bottom-bar {
  margin-top: 6px;
}
.hot-bottom-bar text {
  background: #f7f7f7;
  color: #adadad;
  padding: 3px 12px;
  border-radius: 4px;
}
.nearly-update-list {
  padding: 8px;
}
.nearly-update-title {
  color: #000;
  padding: 4px 8px;
}
</style>
