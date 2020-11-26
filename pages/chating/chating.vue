<template>
  <view class="container status_bar">
       <!-- 自定义导航栏 -->
    <uni-nav-bar
      :fixed="true"
      :statusBar="true"
      @clickRight="userDetail"
      @clickLeft="back"
      class="head-area"
      :title="titleName"
    >
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left" >
          <view class="icon iconfont icon-fanhui" style="font-size:20px;margin-left:8px;"></view>
        </view>
      </block>
      <!-- 右边 -->
      <block slot="right" >
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-geren"></view>
        </view>
      </block>
    </uni-nav-bar>
    <view class="chatbox">
      <view class="chatbox-list">
        <scroll-view
          id="scrollview"
          scroll-y="true"
          :scroll-top="scrollTop"
          :scroll-with-animation="true"
          :style="{ height: style.contentH + 'px' }"
        >
          <chatContain id="userItem" :objHead="objHead" :chatList="chatList"></chatContain>
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
import time from "../../util/time.js";
export default {
  components: { chatContain },
  data() {
    return {
      scrollTop: 0,
      style: {
        contentH: 0,
        itemH: 0,
      },
      chatList: [],
      objHead:[],
      list: [
        {
          isMe: true,
          time: "1554970014",
          headerimg: "../../static/demo/demo6.jpg",
          chatimg: "../../static/demo/datapic/29.jpg",
        },
        {
          headerimg: "../../static/demo/userpic/19.jpg",
          msg: "万丈高楼平地起，勿在浮沙筑高层",
          time: "1555146414",
        },
      ],
      text: "",
      titleName:'聊天页'
    };
  },
  onReady() {
    this.initdata();
    this.pageToBottom();
  },
  onLoad() {
    this.getData();
  },
    onShow() {
    this.getPersonImgInfo();
  },
  methods: {
    sendmessage() {
      /**
       * TODO:当点击发送按钮的时候要获取该事件的时间
       * *转换时间格式添加到obj
       * **/
      let now = new Date().getTime()
      let obj = {
        isMe: true,
        // time: time.gettime.getChatTime(now,this.list[this.list.length-1].time),
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
     getPersonImgInfo(){
      uni.request({
        url: "https://www.xiaohui.ac.cn/netdata/api/paper/chat", 
        success: (res) => {
          console.log(res);
          this.objHead = res.data.objHead;
        },
      });
    },
    // 发送信息，页面滑动
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
    getData() {
      let arr = this.list;
      arr.forEach((element,index,arr) => {
        element.time = time.gettime.getChatTime(element.time,index>0?arr[index-1].time:0);
      });
      this.chatList=arr
    },
    back(){
      uni.navigateBack({
        delta: 1,
      });
    },
    userDetail(){
      console.log('clicked right');
    }
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
