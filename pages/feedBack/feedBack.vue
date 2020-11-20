<template>
    <view>
    	<uni-collapse accordion="true">
			<uni-collapse-item title="客服什么时候在线？" open :show-animation="true">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="忘记账号/昵称/密码怎么办？" :show-animation="true">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="怎么搜索/查找，关注/取关用户？" :show-animation="true">
				<view style="padding: 30upx;">
					折叠内容主体，可自定义内容及样式
				</view>
			</uni-collapse-item>
		</uni-collapse>
    </view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
export default {
  comments:{
    uniCollapseItem,
    uniCollapse
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.bgimg{
	padding: 40px 0 20px 0;
}
.bgimg>image{
	height: 150px;
	width: 200px;
}
.version {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 20px;
  text-align: center;
}
</style>
