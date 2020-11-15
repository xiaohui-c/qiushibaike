<template>
  <view class="container">
    <view class="unlogin u-f-dasb u-f-ajc u-f-ac" v-show="!login">
      <view class="text"> 登录仿糗事百科，体验更多功能 </view>
      <thirdLogin></thirdLogin>
      <tip-login @toLogin="toLogin" :type="type"></tip-login>
    </view>
    <view class="login" v-show="login">
      <view class="userchat-list u-f">
        <view class="headerimg">
          <image :src="userobj.headerimg" mode="widthFix" lazy-load></image>
        </view>
        <view class="username">
          <view class="name">{{ userobj.username }}</view>
          <view class="acessdata u-f-ajb">
            <text>总访客{{ userobj.allnum }}</text>
            <text>今日{{ userobj.todaynum }}</text>
          </view>
        </view>
        <view class="isfollow icon iconfont icon-jinru" style="color: #c0c0c0">
        </view>
      </view>
    </view>
    <view class="current-data u-f-aje">
      <view class="qiushi-item" v-for="(item, index) in itemList" :key="index">
        <view class="num">{{ item.num }} </view>
        <view class="item-name"> {{ item.name }}</view>
      </view>
    </view>
    <view class="adimgbox u-f-asb">
      <image
        src="../../static/demo/demo20.jpg"
        mode="widthFix"
        lazy-load
      ></image
    ></view>
    <view class="setting-list">
      <view
        class="setting-list-item u-f-ajb"
        v-for="(item, index) in settingList"
        :key="index"
      >
        <view class="item-name"> {{ item.itemName }} </view>
        <view
          class="isfollow icon iconfont icon-jinru"
          style="color: #c0c0c0"
        ></view>
      </view>
    </view>
  </view>
</template>

<script>
import thirdLogin from "../../components/common/third-login.vue";
import tipLogin from "../../components/common/tip-login.vue"
export default {
  components: { thirdLogin,tipLogin },
  data() {
    return {
      login: false,
      type:"账号密码",
      userobj: {
        headerimg: "../../static/demo/userpic/4.jpg",
        username: "刘小灰",
        allnum: 0,
        todaynum: 0,
      },
      settingList: [
        { itemName: "浏览历史" },
        { itemName: " 糗百认证" },
        { itemName: "审核糗事" },
      ],
      itemList: [
        { num: 0, name: "糗事" },
        { num: 0, name: "动态" },
        { num: 0, name: "评论" },
        { num: 0, name: "收藏" },
      ],
    };
  },
  // 监听原生标题导航按钮点击事件
  onNavigationBarButtonTap() {
    // 打开发布页面
    uni.navigateTo({
      url: "../controls/controls",
    });
  },
  methods: {
    toLogin() {
      uni.navigateTo({
        url: "../login/login",
      });
    },
  },
};
</script>

<style scoped>
/* 仅适用于H5 */
.unlogin {
  row-gap: 40px;
}
.unlogin > view:first-child {
  margin-top: 16px;
}
.unlogin > view {
  margin-bottom: 12px;
}


.userchat-list {
  padding: 15px;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 1fr 1.8fr 5fr;
}
.headerimg image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.username {
  width: 90px;
}
.username .acessdata {
  color: #a8a8a8;
}
.userchat-list .isfollow {
  justify-self: flex-end;
  align-self: center;
}
.current-data {
  margin-top: 10px;
}
.num {
  text-align: center;
  color: #494949;
  font-size: 16px;
}
.name {
  color: #000;
}
.item-name {
  color: #acacac;
}
.adimgbox {
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
}
.adimgbox image {
  width: 98%;
  border-radius: 10px;
}
.setting-list {
  padding: 10px 6px;
}
.setting-list-item {
  padding: 12px 3px;
  border-bottom: 1px solid #f6f6f6;
}
</style>
