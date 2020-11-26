<template>
	<view class="status_bar">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="back" @clickLeft="back" @clickRight="submit">
			<view class="title u-f-asb" @tap="changelook">
				{{Privacy}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view style="padding:15px 15px 0 15px">
			<textarea v-model="text" placeholder="说一句话吧~" />
		</view>
		<!-- 上传多图 -->
		<uploud-images @uploud="uploud"></uploud-images>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="gonggao" v-show="showpopup">
				<view class="u-f-asb">
					<image src="https://i.loli.net/2020/11/25/ogPRUafQ5FOlErL.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及人身攻击</view>
				<view>3.留联系方式，透露他人隐私</view>
				<view>一经核实将被封禁，情节严重者永久封禁</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uploudImages from "../../components/common/upload-images";
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	let changelook= ['所有人可见', '仅自己可见'];
	export default {
		components:{
			uniNavBar,
			uploudImages,
			uniPopup
		},
		data() {
			return {
				Privacy:"所有人可见",
				text:"",
				imglist:[],
				showpopup:true,
				isget:false
			};
		},
		onBackPress() {
			if(!this.text&&this.imglist.length<1){return}
			if(!this.isget){
				this.savafile()
			return true
			}
		},
		
		methods:{
			// 返回
			back(){
				uni.navigateBack({ delta: 1 });
			},
			// 发布
			submit(){
				console.log("发布")
			},
			// 隐私
			changelook(){
				uni.showActionSheet({
					itemList:changelook,
					success: (res)=> {
						this.Privacy=changelook[res.tapIndex]
					}
				});
			},
			uploud(arr){
				this.imglist=arr;
				console.log(this.imglist)
			},
			hidePopup(){
				this.showpopup=false;
				console.log('yes ok');
			},
			// 保存为草稿
		savafile(){
			uni.showModal({
				content: '是否要保存为草稿？',
				showCancel: true,
				cancelText: '不保存',
				confirmText: '保存',
				success: res => {
					if(res.confirm){
						console.log('保存')
					}else{
						console.log('不保存')
						
					}
						this.isget=true
					uni.navigateBack({
						delta: 1
					});
				}
			});
		},
	}
	}
</script>

<style>
.title {
  width: 100%;
}
.textarea {
  border-bottom: 1px solid #f5f5f5;
  height: 30vh;
}
.gonggao{
	width: 500upx;
}
.gonggao image{
	width: 75%;
	margin-bottom: 20upx;
}
.gonggao button{
	margin-top: 20upx;
	background: #FFE934;
	color: #171606;
}
</style>
