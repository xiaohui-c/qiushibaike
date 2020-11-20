<template>
  <view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar :fixed="true" @clickRight="clickRight" :statusBar="true" class="head-area u-f">
      <!-- 左边 -->
      <view class="nav-tab-bar u-f-asb serach-input">
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
          <view class="cancel">取消</view>
        </view>
      </block>
    </uni-nav-bar>
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
    noThing,
  },
  data() {
    return {
      swiperHeight: 0,
      serachtext:'',
      tabIndex: 0,
      tabBars: [
        { name: "互关", id: "Murelations", num: 10 },
        { name: "关注", id: "follow", num: 10 },
        { name: "粉丝", id: "fans", num: 10 },
      ],
      userlist:[
        {
          headerimg:'../../static/demo/userpic/19.jpg',
          name:'Supzeol',
          sex:0,
          age:20
        }
      ]
    };
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
    clickRight(){
      uni.navigateBack({
        delta: 1,
      });
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
