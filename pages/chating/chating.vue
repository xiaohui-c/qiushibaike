<template>
  <view class="container">
    <view class="chatbox">
      <view class="chatbox-list">
        <scroll-view
          id="scrollview"
          scroll-y="true"
          :scroll-top="scrollTop"
          :scroll-with-animation="true"
          :style="{ height: style.contentH + 'px' }"
        >
          <chatContain id="userItem" :chatList="chatList"></chatContain>
        </scroll-view>
      </view>
    </view>
    <!-- 底部input -->
    <view class="bottom-input u-f">
      <input type="text" v-model="text" placeholder="文明发言" />
      <text class="icon iconfont icon-fabu u-f-asb" @tap="sendmessage"></text>
    </view>
  </view>
</template>

<script>
import chatContain from "../../components/paper/chat-contain.vue";
export default {
  components: { chatContain },
  data() {
    return {
      scrollTop: 0,
      style: {
        contentH: 0,
        itemH: 0,
      },
      chatList: [
        {
          isMe: true,
          time: "11:30",
          headerimg: "../../static/demo/demo6.jpg",
          chatimg: "../../static/demo/datapic/29.jpg",
        },
        {
          headerimg: "../../static/demo/userpic/19.jpg",
          msg: "万丈高楼平地起，勿在浮沙筑高层",
          time: "20:30",
        },
      ],
      text: "",
    };
  },
  onReady() {
    this.initdata();
    this.pageToBottom();
  },
  methods: {
    sendmessage() {
      /**
       * TODO:当点击发送按钮的时候要获取该事件的时间
       * *转换时间格式添加到obj
       * **/
      let now = new Date().toLocaleTimeString();
      let obj = {
        isMe: true,
        time: now,
        headerimg: "../../static/demo/demo6.jpg",
        msg: this.text,
      };
      this.chatList.push(obj);
      this.text = "";
      this.pageToBottom();
    },
    // 初始化数据
    initdata() {
      try {
        // 获取整个屏幕的高度
        const res = uni.getSystemInfoSync();
        // 获取底部输入框的高度
        let query = uni.createSelectorQuery();
        query.select(".bottom-input").boundingClientRect();

        query.exec((resu) => {
          this.style.contentH = res.windowHeight - parseInt(resu[0].height);
        });
      } catch (e) {
        // error
      }
    },
    pageToBottom() {
      let query = uni.createSelectorQuery();
      query.select("#scrollview").boundingClientRect();
      query.select("#userItem").boundingClientRect();
      query.exec((res) => {
        this.style.itemH = res[1].height;
      });
      if (this.style.itemH > this.style.contentH) {
        this.scrollTop = this.style.itemH;
      }
    },
  },
};
</script>

<style scoped>
.bottom-input {
  border-top: 1px solid #f4f4f4;
  padding: 10px 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
}
.bottom-input input {
  padding: 7px 27px 7px 5px;
  border-radius: 6px;
  background: #f7f7f7;
  width: 70%;
}
.bottom-input text {
  margin-left: 10px;
  width: 40px;
  height: 30px;
}
.bottom-input .icon {
  font-size: 25px;
  transform: translateY(5px);
}
</style>
