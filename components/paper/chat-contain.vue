<template>
  <view class="user-chat-item">
    <view v-for="(item, index) in chatList" :key="index">
      <view class="lasttime u-f-asb">{{ item.time }}</view>
      <view class="msg u-f" :class="{ mestyle: item.isMe }">
        <view class="imgbox">
          <image v-if="item.isMe" :src="objHead[0]" mode="widthFix" lazy-load></image>
          <image v-else :src="objHead[1]" mode="widthFix" lazy-load></image>
        </view>
        <view class="msg-detail u-f-asb animate__animated animate__bounceIn">
          <text v-if="item.msg">{{ item.msg }}</text>
          <image
            v-if="item.chatimg"
            :src="objHead[2]"
            mode="widthFix"
            lazy-load
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    chatList: Array,
    objHead:Array
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.lasttime {
  color: #dddddd;
  padding: 10px;
}
.msg {
  padding: 10px 10px;
}
.imgbox image {
  width: 50px;
  min-height: 50px;
  border-radius: 50%;
}
.msg-detail {
  padding: 10px 13px;
  border-radius: 12px;
  background: #f4f4f4;
  margin-left: 10px;
  position: relative;
  margin-right: 40px;
}
.msg-detail::before {
  content: "";
  width: 10px;
  height: 10px;
  background: #f4f4f4;
  position: absolute;
  left: -2px;
  top: 10px;
  border-radius: 2px;
  transform: rotate(45deg);
}
.mestyle {
  flex-direction: row-reverse;
}
.mestyle .msg-detail {
  margin-right: 10px;
  margin-left: 40px;
}
.mestyle .msg-detail::before {
  display: none;
}
.mestyle .msg-detail::after {
  content: "";
  width: 10px;
  height: 10px;
  background: #f4f4f4;
  position: absolute;
  right: -2px;
  top: 10px;
  border-radius: 2px;
  transform: rotate(45deg);
}
.msg-detail image {
  width: 120px;
  height: 120px;
}
</style>