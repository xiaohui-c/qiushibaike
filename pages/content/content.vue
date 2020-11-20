<template>
  <view>
     <!-- 自定义导航栏 -->
    <uni-nav-bar
      :fixed="true"
      :statusBar="true"
      @clickRight="bottomView"
      @clickLeft="back"
      class="head-area"
      :title="titleName"
    >
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left" >
          <view class="icon iconfont icon-fanhui"></view>
        </view>
      </block>
      <!-- 右边 -->
      <block slot="right" >
        <view class="nav-right u-f-asb">
          <view class="icon iconfont icon-gengduo"></view>
        </view>
      </block>
    </uni-nav-bar>
    <common-list
      :commentDetail="commentDetail"
      @imgDetail="imgDetail"
      :list="attention.list"
      :morePic="morePic"
    ></common-list>
    <view class="uni-padding-wrap">
      <view class="title">最新评论 1</view>
      <!-- 评论区 start -->
      <view class="uni-comment">
        <view class="uni-comment-list">
          <view class="uni-comment-face">
            <image
              src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
              mode="widthFix"
            ></image>
          </view>
          <view class="uni-comment-body">
            <view class="uni-comment-top">
              <text>小猫咪</text>
            </view>
            <view class="uni-comment-content">支持国产，支持DCloud!</view>
            <view class="uni-comment-date">
              <view>2天前</view>
              <view class="uni-comment-replay-btn">5回复</view>
            </view>
            <!-- 子组件聊天 -->
            <view class="child-comment">
              <view class="uni-comment-list">
                <view class="uni-comment-face">
                  <image
                    src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
                    mode="widthFix"
                  ></image>
                </view>
                <view class="uni-comment-body">
                  <view class="uni-comment-top">
                    <text>小猫咪</text>
                  </view>
                  <view class="uni-comment-content">支持国产，支持DCloud!</view>
                  <view class="uni-comment-date">
                    <view>2天前</view>
                    <view class="uni-comment-replay-btn">5回复</view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部input -->
    <view class="bottom-input u-f">
      <input type="text" v-model="text" placeholder="文明发言" />
      <text class="icon iconfont icon-fabu u-f-asb" @tap="sendmessage"></text>
    </view>
    <!-- 底部分享-->
    <view
      v-show="bottomShow"
      class="bottom-share u-f-dasb u-f-ac u-f-ajc animate__animated"
    >
      <view>分享到</view>
      <thirdLogin :commentDetail="commentDetail"></thirdLogin>
      <view class="share-line"></view>
      <view @tap="cancel" class="cancel">取消</view>
    </view>
    <!-- 底部分享出现全屏遮罩 -->
    <view v-show="bottomShow" class="mask"></view>
  </view>
</template>

<script>
import commonList from "../../components/common/common-list.vue";
import thirdLogin from "../../components/common/third-login.vue";
import View from "../../unpackage/hello uni-app/pages/component/view/view.vue";

export default {
  components: {
    commonList,
    thirdLogin,
  },
  data() {
    return {
      commentDetail: true,
      text: "",
      bottomShow: false,
      morePic:true,
      titleName:'',
      attention: {
        loadtext: "上拉加载更多",
        list: [
          // 图文
          {
            userpic: "../../static/demo/userpic/12.jpg",
            username: "小灰",
            sex: 1, //0 男 1 女
            age: 25,
            follow: false,
            title: "关于加强思想层面深建设",
            titlepic: "../../static/demo/datapic/13.jpg",
					morepic:["../../static/demo/datapic/13.jpg","../../static/demo/datapic/14.jpg","../../static/demo/datapic/15.jpg"],
            video: false,
            share: false,
            path: "深圳 龙岗",
            sharenum: 20,
            commentnum: 30,
            goodnum: 20,
            releaseTime: "两天前",
          },
        ],
      },
    };
  },
  onLoad(e) {
  this.titleName= e.detailData;
  },
  methods: {
    bottomView() {
      this.bottomShow = !this.bottomShow;
    },
    imgDetail(index) {
      console.log(index);
      uni.previewImage({
        current: index,
        urls: this.attention.list[0].morepic,
      });
    },
    sendmessage() {
      console.log(this.text);
    },
    cancel() {
      this.bottomShow = false;
    },
    back(){
      uni.navigateBack({
        delta: 1,
      });
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 15px;
  font-weight: 700;
  padding: 8px;
}
.child-comment {
  background: #f4f4f4;
  padding: 5px;
}
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
.bottom-share {
  box-sizing: border-box;
  position: fixed;
  height: 170px;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  background: #ffffff;
  padding: 7px 0 12px 0;
}
.share-line {
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
}
.cancel {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  box-sizing: border-box;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #b2b2b2;
  opacity: 0.4;
}
.icon{
  font-size: 18px!important;
}
</style>
