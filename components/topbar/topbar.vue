<template>
  <view class="uni-tab-bar">
    <scroll-view scroll-x class="uni-swiper-tab">
      <view class="container-topBar">
        <view v-for="(tab,index) in tobBars" :key="tab.id">
          <view class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabtap(index)">
            {{tab.name}}
            <view class="swiper-tab-line"></view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    tabBars: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tabIndex: Number,
  },
  data() {
    return {
      tobBars:this.tabBars,
      // topIndex:this.tapIndex
    };
  },
  methods: {
    tabtap(index) {
      this.tabIndex = index;
      this.$emit("topBar", index);
    },
  },
};
</script>

<style scoped>
.container-topBar {
  display: flex;
  height: 100%;
  align-items: center;
}
.swiper-tab-list {
  color: #969696;
  font-weight: bold;
}

.uni-tab-bar .active {
  color: #343434;
  transition: all 250ms;
}

.active .swiper-tab-line {
  border-bottom: 6upx solid #fede33;
  width: 30px;
  margin: auto;
  border-top: 6upx solid #fede33;
  border-radius: 20upx;
  position: relative;
  top: -7px;
  transition: all 250ms;
}
</style>
