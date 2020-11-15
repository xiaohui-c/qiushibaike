<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar :statusBar="true" left-icon="back" @clickLeft="back">
      <view class="title u-f-asb" style="width: 100%"> 话题分类 </view>
    </uni-nav-bar>
    <topBar :tabBars="tabBars" :tabIndex="tabIndex" @topBar="topBar" :newspage="newspage"></topBar>
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
              <!-- 每一个话题区域-->
              <block>
                <newsList :nearlyObj="item.list"></newsList>
              </block>
              <!-- 上拉加载区域-->
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
import topBar from "../../components/topbar/topbar.vue";
import newsList from "../../components/news/news-list.vue";
import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue";
import { statMixin } from "../../Mixin/loadmore.js"
export default {
  mixins: [statMixin],
  components: {
    uniNavBar,
    topBar,
    newsList,
    loadMore,
    noThing,
  },
  data() {
    return {
      // 顶部栏默认下标
      tabIndex: 0,
      // 主内容区域高度
      swiperHeight: 0,
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
              img: "../../static/demo/datapic/35.jpg",
              title: "淘宝记录",
              detail: "120斤到85斤 我的反转人生",
              newsnum: "545",
              today: "720",
            },
            {
              img: "../../static/demo/datapic/35.jpg",
              title: "淘宝记录",
              detail: "120斤到85斤 我的反转人生",
              newsnum: "545",
              today: "720",
            },
            {
              img: "../../static/demo/datapic/35.jpg",
              title: "淘宝记录",
              detail: "120斤到85斤 我的反转人生",
              newsnum: "545",
              today: "720",
            },
            {
              img: "../../static/demo/datapic/35.jpg",
              title: "淘宝记录",
              detail: "120斤到85斤 我的反转人生",
              newsnum: "545",
              today: "720",
            },
            {
              img: "../../static/demo/datapic/35.jpg",
              title: "淘宝记录",
              detail: "120斤到85斤 我的反转人生",
              newsnum: "545",
              today: "720",
            },
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
        },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
      ],
      obj: {
          img: "../../static/demo/datapic/35.jpg",
          title: "天天打卡",
          detail:
            "面试官，在电梯里巧遇马云你会做什么？90后女孩的回答当场被录用",
          newsnum: "507",
          today: "707",
        }
    };
  },
  methods: {
    back() {
      uni.navigateBack({ delta: 1 });
    },
    // 顶部导航点击事件
    topBar(index) {
      this.tabIndex = index;
    },
    // 图文列表滑动
    tabChange(e) {
      this.tabIndex = e.detail.current;
    },
  },
};
</script>