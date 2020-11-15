<template>
  <view>
    <view
      class="userchat-list u-f"
      v-for="(item, index) in userlist"
      :key="index"
    >
      <view class="headerimg">
        <image :src="item.headerimg" mode="widthFix" lazy-load></image>
      </view>
      <view class="username">
        <view class="name">{{ item.name }}</view>
        <view
          style="text-align: center"
          class="age icon iconfont"
          :class="[item.sex ? 'icon-nv' : 'icon-nan']"
          >{{ item.age }}
        </view>
      </view>
      <view
        class="isfollow icon iconfont icon-xuanze-yixuan"
        style="color: #c0c0c0"
      >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    userlist: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.userchat-list {
  border-bottom: 1px solid #f2f2f2;
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
.age {
  width: 30px;
  height: 15px;
  position: relative;
  border-radius: 20px;
  color: #fff;
  font-size: 7px;
  top: 5px;
  left: 4px;
  line-height: 15px;
}
.icon-nv {
  background: pink;
}
.icon-nan {
  background: #44b3ff;
}
.userchat-list .isfollow {
  justify-self: flex-end;
  align-self: center;
}
</style>
