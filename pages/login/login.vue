<template>
  <view>
    <view class="topic-bg">
      <image
        src="../../static/demo/login.png"
        lazy-load
        mode="widthFix"
      ></image>
    </view>

    <view class="login-input">
      <input type="text" placeholder="昵称/手机号/邮箱" />
      <input type="password" placeholder="请输入密码" />
    </view>

    <view class="loginBtn u-f-asb">
      <button type="default">登录</button>
    </view>
    <view class="u-f-dasb u-f-ac u-f-jc">
      <tip-login @toLogin="toLogin" :type="type"></tip-login>
      <view class="middle-line u-f-asb">
        <text>第三方登录</text>
      </view>
      <thirdLogin></thirdLogin>
      <view>注册即代表您同意《仿糗事百科用户协议》</view>
    </view>
  </view>
</template>

<script>
import thirdLogin from "../../components/common/third-login.vue";
import tipLogin from "../../components/common/tip-login.vue";

export default {
  components: { thirdLogin, tipLogin },
  data() {
    return {
      type: "验证码",
    };
  },
  methods: {
    toLogin() {
		console.log(1);
      this.type == "验证码" ? this.type == "账号密码" : this.type == "验证码";
    },
  },
};
</script>

<style scoped>
.topic-bg image {
  width: 100%;
  height: 100%;
}
view {
  margin-bottom: 25px;
}
.loginBtn button {
  width: 90%;
}
.middle-line {
  width: 50%;
  border-bottom: 1px solid #9c9c9c;
  position: relative;
}
.middle-line text {
  color: #9c9c9c;
  position: absolute;
  top: -10px;
  background: #ffffff;
  padding: 0 10px;
}
</style>
