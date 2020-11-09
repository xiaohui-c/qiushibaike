<template>
	<!-- 底部加载更多功能 -->
	 <view class="load-text">{{loadtext}}</view>
</template>
<script>
export default {
  props: {
    
    loadtext: String,
  },
  data() {
    return {};
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
.load-text {
  text-align: center;
  padding: 0.7rem 0;
}
</style>
