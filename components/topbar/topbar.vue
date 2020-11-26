<template>
  <!-- 糗事页顶栏分类 -->
  <view class="uni-tab-bar">
    <scroll-view
      scroll-x
      :scroll-left="scroll"
      scroll-with-animation="true"
      class="scrollView"
      style="position:fixed;z-index:10000;background:#ffffff;"
    >
      <view class="container-topBar u-f-aje" :class="{ padding: newspage }">
        <view
          v-for="(tab, index) in tobBars"
          style="height: 40px;"
          :key="tab.id"
        >
          <view
            class="swiper-tab-list"
            :class="{ active: tabIndex == index }"
            style="transform:translateY(10px)"
            @tap="tabtap(index)"
          >
            {{ tab.name }}
            <text v-if="tab.num" style="margin-left: 5px">{{ tab.num }}</text>
            <view
              id="wxtopbar"
              class="swiper-tab-line"
              :style="{ width: linewidth + 'px' }"
            ></view>
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
    linewidth: Number,
    scroll: Number,
    tabIndex: {
      type: Number,
      default: 0,
    },
    newspage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tobBars: this.tabBars,
      topIndex: this.tapIndex,
    };
  },
  methods: {
    tabtap(index) {
      this.topIndex = index;
      this.$emit("topBar", index);
    },
  },
};
</script>

<style scoped>
/* #ifdef H5 */
.scrollView {
  top: 40px;
}
/* #endif */
.container-topBar {
  height: 100%;
  align-items: center;
}
.padding {
  margin-left: 70px !important;
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

.isfixedconfirm {
  position: fixed !important;
  z-index: 10000;
  background: #ffffff;
}
/* #ifdef MP-WEIXIN */
#wxtopbar {
  position: absolute;
  top: 100px;
}
/* #endif */
</style>
