<template>
  <view>
    <view class="thirdLogin u-f">
      <view class="icon iconfont icon-weixin"></view>
      <view class="icon iconfont icon-QQ"></view>
      <view class="icon iconfont icon-xinlangweibo"></view>
    </view>
  </view>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.thirdLogin view {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  margin: 0 8px;
}
.thirdLogin view:first-child{
  background: #2bd19b;
}
.thirdLogin view:nth-child(2){
  background: #2caefc;
}
.thirdLogin view:last-child{
  background: #fc7729;
}
.thirdLogin .icon{
  font-size: 30px;
  color: #fff;
}
    
</style>