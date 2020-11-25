<template>
  <view class="container">
      <uni-nav-bar
      :fixed="true"
      :statusBar="true"
      @clickRight="openAdd"
      @clickLeft="chatListView"
      class="head-area"
      :title="titleName"
    >
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left" >
          <view class="icon iconfont icon-user-detail" style="font-size:20px;margin-left:8px;"></view>
        </view>
      </block>
      <!-- 右边 -->
      <block slot="right" >
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-zengjia" style="font-size:20px;"></view>
        </view>
      </block>
    </uni-nav-bar>
    <!--遮罩层 -->
    <view class="mask" v-show="dropMeun" @tap="dropclick"></view>
    <!-- 下拉列表 -->
    <view class="drop-down-menu" v-show="dropMeun" @tap="dropclick">
      <view id="1"><text class="icon iconfont icon-sousuo"></text>加好友</view>
      <view id="2"
        ><text class="icon iconfont icon-qingchu"></text>清除未读</view
      >
    </view>
    <!-- 聊天列表 -->
    <view class="chatting-box">
      <view
        class="chating-item u-f"
        v-for="(item, index) in chatList"
        :key="index"
        @tap="chatclick"
      >
        <view class="header-img">
          <image :src="item.img" mode="widthFix" lazy-load></image>
        </view>
        <view class="chat-right">
          <view class="username">{{ item.username }}</view>
          <view class="finaltime">{{ item.finaltime }}</view>
          <view class="ellipses-msg">{{ item.ellipsesmsg }}</view>
          <uni-badge
            class="uni-badge-left-margin"
            :text="item.msgnum"
            type="error"
            size="small"
          />
        </view>

      </view>

    </view>

  </view>
</template>

<script>
import uniBadge from "../../components/uni-badge/uni-badge.vue";
import loadMore from "../../components/common/load-more.vue";
import { statMixin } from "../../Mixin/loadmore.js";
 import {mapState} from 'vuex';
export default {
  mixins: [statMixin],
  components: {
    uniBadge,
    loadMore
  },
  data() {
    return {
      dropMeun: false,
      titleName:'小纸条',
      chatList: [
        {
          img: this.$store.state.demo.userpic.four,
          username: "JIA一勺",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 1,
        },
        {
          img: "../../static/demo/userpic/15.jpg",
          username: "低头看鱼",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 3,
        },
        {
          img: "../../static/demo/userpic/12.jpg",
          username: "刘小慧",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 18,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
        {
          img: "../../static/demo/userpic/6.jpg",
          username: "鲁大师",
          finaltime: "13:58",
          ellipsesmsg:
            "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
          msgnum: 28,
        },
      ],
    };
  },
  // 监听原生标题导航按钮点击事件
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 0:
        // 打开发布页面
        uni.navigateTo({
          url: "../chat-list/chat-list",
        });
        break;
      case 1:
        this.dropMeun = !this.dropMeun;
        break;
    }
  },
  onPullDownRefresh() {
    this.getData();
  },
   computed:{
            ...mapState(['demo'])
        },
  methods: {
    getData() {
      setTimeout(() => {
        let arr = [
          {
            img: "../../static/demo/userpic/4.jpg",
            username: "一勺",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 1,
          },
          {
            img: "../../static/demo/userpic/15.jpg",
            username: "低头看鱼",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 3,
          },
          {
            img: "../../static/demo/userpic/12.jpg",
            username: "刘小慧",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 18,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
          {
            img: "../../static/demo/userpic/6.jpg",
            username: "鲁大师",
            finaltime: "13:58",
            ellipsesmsg:
              "三个代表重要思想是江泽民同志2000年2月25日在广东省考察工作时，从全面总结党的历史经验和如何适应新形势新任务的要求出发，首次对“三个代表”重要思想进行了比较全面的阐述。具体内容为中国共产党始终代表中国先进生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益，是我们党的立党之本、执政之基、力量之源。",
            msgnum: 28,
          },
        ];
        this.chatList = arr;

        uni.stopPullDownRefresh();
      }, 2000);
    },
    // 采用事件委托
    dropclick(e) {
      console.log(e.target);
      setTimeout(() => {
        this.dropMeun = false;
      }, 260);
    },
    chatclick() {
      uni.navigateTo({
        url: "../chating/chating",
      });
    },
    chatListView(){
       uni.navigateTo({
          url: "../chat-list/chat-list",
        });
    },
    openAdd(){
      this.dropMeun = !this.dropMeun;
    }
  },
};
</script>

<style scoped>
.title {
  width: 100%;
}
.chatting-box {
  margin-top: 1rem;
}
.chating-item {
  border-bottom: 1px solid #f6f6f6;
  padding: 6px 5px;
}
.header-img {
  flex: 1;
}
.header-img image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.chat-right {
  flex: 10;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: repeat(2, 1fr);
}
.chat-right view {
  padding-left: 10px;
}
.chat-right .username {
  color: #000;
  font-weight: 600;
  transform: scale(0.8, 0.8) translateX(-14%);
  font-size: 16px;
}
.chat-right .finaltime {
  color: #dbdbdb;
}
.chat-right .ellipses-msg {
  width: 240px;
  height: 15px;
  padding: 5px 10px;
  line-height: 10px;
  font-size: 13px;
  overflow: hidden;
  color: #ababab;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chat-right .msgnum {
  color: #fff;
}
.chat-right .msgnum text {
  background: red;
  padding: 2px 10px;
  transform: scale(0.5, 0.5) translateY(-10px);
  border-radius: 50%;
}
.drop-down-menu {
  position: fixed;
  z-index: 2000;
  right: 0;
  background: #fff;
  box-shadow: 0 0 15px #dfdfdf;
  width: 150px;
}
.drop-down-menu view {
  padding: 8px;
}
.drop-down-menu view:hover {
  transition: 250ms;
  background: #f0f2f5;
}
.drop-down-menu .icon {
  margin: 0 10px;
  font-size: 14px;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1999;
}
</style>
