<template>
  <!-- 糗事页主要内容列表 -->

  <view>
    <view
      class="common-list u-f animate__animated animate__fadeInLeft fast"
      v-for="(item, index) in indexlist"
      :key="index"
      :class="{ 'border-bottom': commentDetail }"
    >
      <!-- 左侧头像 -->
      <view class="common-list-left">
        <image :src="imgcontain[0]" mode="widthFix" lazy-load></image>
      </view>
      <!-- 右侧主要内容 -->
      <view class="common-list-right" :class="{ 'border-none': commentDetail }">
        <!-- 个人信息栏 -->
        <view class="u-f u-f-jc u-f-ac">
          <view class="u-f nickName">
            <view>
              <view style="color: #a5a5a5; font-size: 16px">{{
                item.username
              }}</view>
              <view
                v-if="commentDetail"
                style="color: #d7d7d7; font-size: 13px"
                >{{ item.releaseTime }}</view
              >
            </view>
            <view
              class="icon iconfont u-f-asb sex"
              :class="[item.sex ? 'icon-nv' : 'icon-nan']"
            >
              {{ item.age }}
            </view></view
          >
          <view
            class="icon iconfont icon-zengjia follow"
            v-show="item.follow === false"
            v-if="!commentDetail"
            @tap="attention(index)"
          >
            关注
          </view>
          <view class="icon iconfont icon-guanbi" v-if="commentDetail"></view>
        </view>
        <!-- 文章标题 -->
        <view>{{ item.title }}</view>
        <!-- 图片视频 -->
        <view class="videoImg u-f-asb" :class="[morePic?'grid-layout':'']">
          <template v-if="!item.share">
            <!-- 图片 -->
            <image
              :src="imgcontain[1]"
              mode="widthFix"
              lazy-load
              v-if="!item.morepic"
            ></image>
            <image
              mode="widthFix"
              v-for="(itemImg, idx) in viewPicArr"
              :src="itemImg"
              :key="idx"
              lazy-load
              v-show="morePic"
              @tap="imgDetail(idx)"
            ></image>
            <!-- 视频 -->
            <template v-if="item.video">
              <view class="common-list-play icon iconfont icon-bofang"></view>
              <view class="common-list-playinfo"
                >{{ item.video.visitnum }} {{ item.video.long }}</view
              >
            </template>
            <!-- 分享样式 -->
          </template>
          <view class="common-list-share u-f-asb" v-else>
            <image :src="imgcontain[1]" mode="widthFix" lazy-load v-if="!morePic"></image>
            <view>{{ item.share.title }}</view>
          </view>
        </view>
        <!-- 发布地点及阅览数据 -->
        <view class="u-f-ajb address-data">
          <view>{{ item.path }}</view>
          <view class="u-f-aje followdata">
            <view class="icon iconfont icon-zhuanfa">{{ item.sharenum }}</view>
            <view class="icon iconfont icon-pinglun1">{{
              item.commentnum
            }}</view>
            <view class="icon iconfont icon-dianzan1">{{ item.goodnum }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    // 父组件传递过来的是数组对象的每一项
    list: Array,
    default: () => {
      return [];
    },
    commentDetail: Boolean,
    morePic: Boolean,
    imgcontain:Array,
    viewPicArr:Array
  },
  data() {
    return {
      indexlist: this.list,
    };
  },
  methods: {
    attention(index) {
      this.indexlist[index].follow = !this.indexlist[index].follow;
      uni.showToast({
        title: "关注成功",
      });
    },
    imgDetail(index) {
      console.log("son", index);
      this.$emit("imgDetail", index);
    },
  },
};
</script>
<style scoped>
.common-list {
  padding: 5px 5px;
}
.common-list-left {
  padding-top: 10px;
  flex-shrink: 0;
}
.common-list-left > image {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.common-list-right {
  padding: 5px;
  width: 90%;
  flex: 1;
  border-bottom: 1upx solid #eeeeee;
}
.nickName {
  color: #a5a5a5;
}
.nickName .sex {
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
.nickName view.icon-nv {
  background: pink;
}
.follow {
  font-size: 12px;
  background: #f4f4f4;
  border-radius: 4px;
  margin-right: 8px;
  padding: 2px 4px;
}
.videoImg {
  position: relative;
}
.videoImg > image {
  width: 100%;
  border-radius: 4px;
}
.common-list-play {
  color: #fff;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.common-list-playinfo {
  position: absolute;
  left: 70%;
  top: 80%;
  color: #fff;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 3px 4px;
  border-radius: 7px;
}
.common-list-share {
  background: #f7f7f7;
  padding: 7px 5px;
  width: 100%;
  border-radius: 7px;
}
.common-list-share image {
  width: 30%;
  height: 20%;
}
.common-list-share view {
  margin-left: 8px;
}
.address-data {
  color: #c5c5c5;
}
.followdata > view {
  font-size: 12px;
  margin: 0 4px;
}
.icon-guanbi {
  font-size: 13px;
  color: #d5d5d5;
  margin-right: 10px;
}
.border-none {
  border: none;
}
.border-bottom {
  border-bottom: 1rpx solid #f9f9f9;
}
.grid-layout{
  display: grid;
  grid-template-rows: repeat(1,1fr);
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}
.grid-layout image{
  height: 90px!important;
}
</style>