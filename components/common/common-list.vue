<template>
  <view class="common-list u-f animate__animated animate__fadeInLeft fast">
    <!-- 左侧头像 -->
    <view class="common-list-left">
      <image :src="item.userpic" mode="widthFix" lazy-load></image>
    </view>
    <!-- 右侧主要内容 -->
    <view class="common-list-right">
      <!-- 个人信息栏 -->
      <view class="u-f u-f-jc u-f-ac">
        <view class="u-f nickName"
          >{{ item.username
          }}<view
            class="icon iconfont u-f-asb"
            :class="[item.sex ? 'icon-nv' : 'icon-nan']"
            >{{ item.age }}</view
          ></view
        >
        <view class="icon iconfont icon-zengjia follow" v-show="!item.follow"
          >关注</view
        >
      </view>
      <!-- 文章标题 -->
      <view>{{ item.title }}</view>
      <!-- 图片视频 -->
      <view class="videoImg u-f-asb">
        <template v-if="!item.share">
          <!-- 图片 -->
          <image
            src="../../static/demo/datapic/13.jpg"
            mode="widthFix"
            lazy-load
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
          <image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
          <view>{{ item.share.title }}</view>
        </view>
      </view>
      <!-- 发布地点及阅览数据 -->
      <view class="u-f-ajb address-data">
        <view>{{ item.path }}</view>
        <view class="u-f-aje followdata">
          <view class="icon iconfont icon-zhuanfa">{{ item.sharenum }}</view>
          <view class="icon iconfont icon-pinglun1">{{ item.commentnum }}</view>
          <view class="icon iconfont icon-dianzan1">{{ item.goodnum }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
    props:{
        item:Object,
        index:Number
    }
}
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
.nickName view {
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
</style>