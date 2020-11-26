<template>
  <!-- 糗事页无内容默认显示 -->
  <view class="nothing">
    <image
      src="https://i.loli.net/2020/11/25/bvVgLux13KqzapA.png"
      mode="widthFix"
      :class="{ smallless: smallPic }"
    ></image>
  </view>
</template>
<script>
export default {
  props: {
    smallPic: Boolean,
  },
};
</script>
<style scoped>
.nothing {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.nothing > image {
  width: 40%;
  height: 30%;
}
.smallless {
transform: translateY(-60%);
}
</style>