<template>
  <view>
    <view class="password" @tap="toLogin">
      {{type}}登录
      <text class="icon iconfont icon-jinru"> </text>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$emit("toLogin");
    },
  },
};
</script>
<style scoped>
.icon-jinru {
  color: #d6d6d6;
}
.password{
    margin-bottom: 1rem;
}
</style>