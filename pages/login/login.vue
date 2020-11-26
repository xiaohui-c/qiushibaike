<template>
  <view>
    <view class="topic-bg">
      <image
        src="https://i.loli.net/2020/11/25/7vdVk6LEBifnhDZ.png"
        lazy-load
        mode="widthFix"
      ></image>
    </view>
    <view v-if="type == '验证码'">
      <view class="login-input">
        <view class="name">
          <input type="text" placeholder="昵称/手机号/邮箱" />
        </view>
        <view class="password u-f">
          <input type="password" placeholder="请输入密码" />
          <text>忘记密码？</text>
        </view>
      </view>
    </view>
    <view v-if="type == '账号密码'">
      <view class="login-input">
        <view class="phone">
          <text>+86</text>
          <input type="text" placeholder="输入手机号码" />
        </view>
        <view class="veri-code">
          <input type="password" placeholder="请输入验证码" />
          <button>获取验证码</button>
        </view>
      </view>
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
      this.type == "验证码" ? (this.type = "账号密码") : (this.type = "验证码");
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
.login-input >view:last-child{
  position: relative;
  top: -10px;
}
.login-input > view>input {
  height: 50px;
  border-bottom: 1px solid #f7f7f7;
}
.password>input{
  flex: 4;
}
.password>text{
  flex: 1;
  border-bottom: 1px solid #f7f7f7;
  text-align: center;
  line-height: 50px;
}
.phone,.veri-code{
  position: relative;
}
.phone>text{
  position: absolute;
  top: 10px;
  font-size: 18px;
}
.phone>input{
  padding-left: 40px;
}
.veri-code{
}
.veri-code>button{
  position: absolute;
  right: 10px;
  top: 10px;
  width: 100px;
  height: 30px;
  color: #b1b1b1;
  border-radius: 5px;
  background: #f4f4f4;
  font-size: 12px;
  border: none;
  padding: 0;
  line-height: 30px;
}
</style>
