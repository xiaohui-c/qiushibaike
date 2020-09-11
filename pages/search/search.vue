<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e){
			if(e.index==0){
				uni.navigateBack({
					delta: 1
				});
			}
			},
			// 监听搜索框文本变化
			onNavigationBarSearchInputChanged(){
				console.log(e.text)
			},
			// 监听点击搜索按钮事件
			onNavigationBarSearchInputConfirmed(){
				console.log(e.text)
				
			},
		methods: {
			
		}
	}
</script>

<style>

</style>
