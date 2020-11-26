<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar
      :statusBar="true"
      @clickLeft="back"
      class="head-area"
      :title="titleName"
    >
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
    <!-- 模糊图片 -->
    <view class="topic-bg">
      <image :src="headbg" lazy-load mode="aspectFill"></image>
    </view>
    <view class="main-box">
      <view>
        <!-- 图片栏 -->
        <view class="title u-f">
          <view class="imagebox">
            <image :src="headbg" lazy-load mode="aspectFill"></image>
          </view>
          <view class="titleline"> #{{ detailobj.detailtitle }}# </view>
        </view>
        <!-- 动态数据栏 -->
        <view class="newsdatebase u-f">
          <view class="news">动态 {{ detailobj.newsnum }}</view>
          <view class="news">今日 {{ detailobj.todaynum }}</view>
        </view>
        <!-- 动态详情 -->
        <view class="news-detail">{{ detailobj.detailmsg }} </view>
      </view>
      <!-- 类别导航栏 -->
      <view class="topbars">
        <topBar
          :tabBars="tabBars"
          :tabIndex="tabIndex"
          @topBar="topBar"
        ></topBar>
      </view>

      <view class="uni-tab-bar" style="padding-left: 0; margin-top: 20px">
        <swiper
          class="swiper-box"
          :style="{ height: swiperHeight + 'px' }"
          :current="tabIndex"
          @change="tabChange"
        >
          <swiper-item v-for="(item, index) in newsList" :key="index">
            <scroll-view scroll-y class="list" @scrolltolower="loadmore()">
              <!-- 每一个话题区域 -->
              <block>
                <common-list
                  :imgcontain="imgcontain"
                  :list="item.list"
                ></common-list>
                <!-- 上拉加载区域-->
                <loadMore :loadtext="item.loadtext"></loadMore>
              </block>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>
<script>
import topBar from "../../components/topbar/topbar.vue";
import commonList from "../../components/common/common-list.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue";
import { statMixin } from "../../Mixin/loadmore.js";
export default {
  mixins: [statMixin],
  components: {
    topBar,
    commonList,
    loadMore,
    noThing,
  },
  data() {
    return {
      swiperHeight: 0,
      tabIndex: 0,
      imgcontain: [],
      headbg: "",
      tabBars: [
        { name: "默认", id: "default" },
        { name: "最新", id: "latest" },
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
      ],
      detailobj: {
        bgimg: "../../static/demo/topicpic/13.jpeg",
        detailtitle: "忆往事，敬余生",
        newsnum: 793,
        todaynum: 641,
        detailmsg:
          "面试官：在电梯里巧遇马云你会做什么？90后女孩的回答当场被录用",
      },
      obj: {
        // userpic: require("../../static/demo/userpic/12.jpg"),
        username: "小马111",
        follow: false,
        title: "新时代社会主义",
        type: "img", //img:图文,video:视频
        // titlepic: require("../../static/demo/datapic/11.jpg"),
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
  onShow() {
    this.getPersonImgInfo();
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
  // 下拉刷新
  onPullDownRefresh() {
    this.getdata();
  },
  methods: {
    // 下拉刷新
    getdata() {
      // 获取数据
      // 赋值

      // 关闭下拉刷新
      setTimeout(() => {
        const arr = [
          // 图文
          {
            // userpic: "../../static/demo/userpic/12.jpg",
            username: "小灰01",
            sex: 1, //0 男 1 女
            age: 25,
            follow: false,
            title: "关于加强思想层面深建设",
            // titlepic: "../../static/demo/datapic/13.jpg",
            video: false,
            share: false,
            path: "深圳 龙岗",
            sharenum: 20,
            commentnum: 30,
            goodnum: 20,
          },
          // 图文
          {
            // userpic: "../../static/demo/userpic/12.jpg",
            username: "小灰03",
            sex: 1, //0 男 1 女
            age: 25,
            follow: false,
            title: "关于加强思想层面深建设",
            // titlepic: "../../static/demo/datapic/13.jpg",
            video: false,
            share: false,
            path: "深圳 龙岗",
            sharenum: 20,
            commentnum: 30,
            goodnum: 20,
          },
        ];
        this.newsList[this.tabIndex].list = arr;
        uni.stopPullDownRefresh();
      }, 2000);
    },
    // 顶部导航点击事件
    topBar(index) {
      this.tabIndex = index;
    },
    // 图文列表滑动
    tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
    getPersonImgInfo() {
      uni.request({
        url: "https://www.xiaohui.ac.cn/netdata/api/news/follow",
        success: (res) => {
          console.log(res);
          this.imgcontain = res.data.objHead;
          this.headbg = res.data.headbg;
        },
      });
    },
  },
};
</script>
<style scoped>
.topic-bg {
  height: 140px;
  overflow: hidden;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.topic-bg image {
  width: 100%;
  filter: blur(11px);
  position: fixed;
  top: 0;
  z-index: 997;
}
.main-box {
  position: relative;
  z-index: 2000;
  background: #ffffff;
}
.main-box > view {
  transform: translateY(-40px);
  padding-left: 15px;
}
.title .imagebox image {
  width: 80px;
  height: 80px;
  border-radius: 13px;
}
.titleline {
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  top: -16px;
  font-size: 15px;
  padding-left: 10px;
}
.newsdatebase .news {
  font-size: 12px;
  color: #d5d5d5;
}
.newsdatebase .news:last-child {
  margin-left: 10px;
}
.news-detail {
  margin-top: 8px;
  color: #a4a4a4;
  font-size: 13px;
}
.nav-left,
.nav-right {
  top: 50px;
  width: 40px;
  height: 40px;
  position: relative;
}
.icon {
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
.topbars {
  position: relative;
  height: 50px;
}
</style>