<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar :fixed="true" :statusBar="true" class="head-area u-f">
      <!-- 左边 -->
      <view class="nav-tab-bar u-f-asb serach-input" @tap="serachContainer">
        <input
          class="uni-input u-f-asb"
          placeholder-class="icon iconfont icon-sousuo topic-search"
          placeholder="搜索糗事"
          v-model="serachtext"
        />
      </view>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right u-f-asb">
          <view class="cancel" @tap="cancel">取消</view>
        </view>
      </block>
    </uni-nav-bar>

    <template v-if="list.length > 0">
      <index-list :list="list"></index-list>
      <loadMore :loadtext="loadtext"></loadMore>
    </template>
    <template v-else-if="isSearch && list.length < 1">
      <noThing style="margin-top: 150px"></noThing>
    </template>
  </view>
</template>

<script>
import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
import IndexList from "../../components/index/index-list.vue";
import loadMore from "../../components/common/load-more.vue";
import noThing from "../../components/common/no-thing.vue";
import { statMixin } from "../../Mixin/loadmore.js";

export default {
  mixins: [statMixin],
  components: {
    IndexList,
    noThing,
    uniNavBar,
    loadMore,
  },
  data() {
    return {
      isSearch: false,
      loadtext: "上拉加载更多",
      serachtext: "",
      swiperHeight: 0,
      list: [],
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
  // 实时监听输入框的变化并获取数据
  watch: {
    serachtext(value) {
      this.isSearch = true;
      this.getdata(value);
    },
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    this.getdata();
    uni.stopPullDownRefresh();
  },
  methods: {
    //   搜索事件
    getdata(val) {
      uni.showLoading();
      setTimeout(() => {
        // 请求服务器
        let arr = this.obj;
        this.list.push(arr);
      }, 1000);
      uni.hideLoading();
    },
    cancel() {
      uni.navigateBack({
        delta: 1,
      });
    },
    serachContainer() {
      this.isSearch = true;
    },
  },
};
</script>

<style scoped>
.search-input {
  padding: 4px 10px;
}
.uni-input {
  background: #f4f4f4;
  border-radius: 6px;
  height: 10px;
  text-align: left;
  line-height: 10px;
  width: 250px;
  margin-left: -70px;
}
.topic-search {
  font-size: 12px;
}
</style>
