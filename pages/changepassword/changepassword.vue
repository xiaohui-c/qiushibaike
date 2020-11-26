<template>
  <view>
    <view style="transform: translateX(15px)">
      <input type="password" placeholder="输入旧密码" />
      <input type="password" placeholder="输入新密码" />
      <input type="password" placeholder="确认密码" />
    </view>
    <button>完成</button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
input {
  border-bottom: 1px solid #f5f5f5;
  padding: 18px 10px;
  font-size: 13px;
}
button {
  margin-top: 15px;
  width: 90%;
}
</style>
