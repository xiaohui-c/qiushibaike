<template>
  <view>
    <view
      class="nearly-update-list-item u-f-ajb"
      v-for="(item, index) in nearlyObj"
      :key="index"
      @tap="opendetail"
    >
      <view class="imageBox">
        <image :src="nearlyObjImg" mode="widthFix" lazy-load></image>
      </view>
      <view class="nearly-text u-f-dasb">
        <view class="nearly-title">#{{ item.title }}#</view>
        <view class="nearly-detail">{{ item.detail }}</view>
        <view class="nearly-datebase"
          >动态 {{ item.newsnum }} 今日 {{ item.today }}</view
        >
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    nearlyObj: Array,
    nearlyObjImg:String
  },
  data() {
    return {
    //   nearlyObj: this.nearlyObj,
    };
  },
  methods: {
    opendetail(){
      uni.navigateTo({
      	url: '../../pages/topic-detail/topic-detail',
      });
    }
  },
};
</script>
<style scoped>
    .nearly-update-list-item {
  padding: 10px 4px;
  border-bottom: 1px solid #f1f1f1;
  overflow: hidden;
}
.nearly-update-list-item .imageBox {
  width: 120px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  flex: 1;
}
.nearly-update-list-item .imageBox image {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
}
.nearly-text {
  height: 100px;
  flex: 2;
  padding: 5px 10px;
}
.nearly-text .nearly-title {
  color: #000;
  font-size: 18px;
}
.nearly-detail,
.nearly-datebase {
  color: #c0c0c0;
}
</style>