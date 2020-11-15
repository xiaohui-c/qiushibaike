<template>
  <view>
    <view
      v-for="item in setList"
      :key="item.id"
      class="configbox u-f-ajb"
      @tap="config(item.id)"
    >
      <view style="font-size: 14px">{{ item.configname }}</view>
      <view class="icon iconfont icon-jinru" style="color: #d8d8d8"></view>
    </view>
    <view class="outLOginBtn u-f-asb">
      <button>退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      setList: [
        { id: 0, configname: "账号与安全" },
        { id: 1, configname: "绑定邮箱" },
        { id: 2, configname: "资料编辑" },
        { id: 3, configname: "小纸条" },
        { id: 4, configname: "清除缓存" },
        { id: 5, configname: "意见反馈" },
        { id: 6, configname: "关于仿糗百" },
      ],
    };
  },
  methods: {
    config(id) {
      console.log(id);

      if (id == 6) {
        uni.navigateTo({
          url: "../about/about",
        });
      }
      if (id == 5) {
        uni.navigateTo({
          url: "../feedBack/feedBack",
        });
      }
      if (id == 2) {
        uni.navigateTo({
          url: "../editmeans/editmeans",
        });
      }
      if (id == 1) {
        uni.navigateTo({
          url: "../emailbind/emailbind",
        });
      }
      if (id == 0) {
        uni.navigateTo({
          url: "../changepassword/changepassword",
        });
      }
    },
  },
};
</script>

<style scoped>
.configbox {
  padding: 15px 15px;
  border-bottom: 1px solid #f7f7f7;
}
.configbox:hover {
  transition: 250ms;
  background: #f0f2f5;
}
.outLOginBtn {
  margin-top: 1rem;
}
.outLOginBtn button {
  width: 80%;
  background: #ffe933;
}
</style>
