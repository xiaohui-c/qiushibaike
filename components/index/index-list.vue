<template>
	<view >
		<view class="index-list animate__animated animate__fadeInUp" v-for="(item,index) in list" :key="index" >
					<!-- 个人信息 -->
					<view class="index-list1 u-f u-f-ac">
						<view class="u-f u-f-ac">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
							{{item.username}}
						</view>
						<view v-show="item.follow===false" @tap="follow(index)">
							<view class="icon iconfont icon-zengjia">
								<!-- <text >已关注</text> -->
								<text>关注</text>
								</view>
						</view>
					</view>
					<!-- 标题 -->
					<view class="index-list2" @tap="opendetail">{{item.title}}</view>
					<!-- 视频图像 -->
					<view class="index-list3" @tap="opendetail">
						<image :src="item.titlepic" mode="widthFix" lazy-load></image>
						<template v-if="item.type=='video'">
							<view  class="icon iconfont icon-bofang index-list-play"></view>
						<view  class="index-list-playinfo">{{item.playnum}}次播放 {{item.long}}</view>
						</template>
					</view>
					<!-- 底部点赞评论 -->
					<view class="index-list4 u-f u-f-ac u-f-jc">
						<!-- 底部左边笑哭脸 -->
						<view class="u-f u-f-ac u-f-jc" >	
							<view class="u-f u-f-ac u-f-jc" :class="[item.infonum.index==1?'active':'']" @tap="control('ding',index)"><view class="icon iconfont icon-icon_xiaolian-mian" ></view>{{item.infonum.dingnum}}</view>
							<view class="u-f u-f-ac u-f-jc" :class="[item.infonum.index==2?'active':'']" @tap="control('cai',index)"><view class="icon iconfont icon-kulian"></view>{{item.infonum.cai}}</view>
						</view>
						<!-- 底部右边评论转发 -->
						<view class="u-f u-f-ac u-f-jc">
							<view class="u-f u-f-ac u-f-jc"><view class="icon iconfont icon-pinglun"></view>{{item.commentnum}}</view>
							<view class="u-f u-f-ac u-f-jc"><view class="icon iconfont icon-zhuanfa"></view>{{item.forward}}</view>
						</view>
					</view>
					
				</view>
		
	</view>
</template>

<script>
	export default {
		props: {
		list:{
			type:Array,
			default:()=>{
				return [];
			}
		}
  },
		data() {
			return {
				
			};
		},
		methods: {
			// 关注
			follow(index){
				this.list[index].follow=!this.list[index].follow;
				uni.showToast({
					title:'关注成功'
				})
			},
			// 顶踩
			control(type,index){
				switch (type){
					case 'ding':
					// 如果已经顶过了就不能再顶，直接return
					if(this.list[index].infonum.index===1){return;}
					// 如果此时的状态是踩，那么点击顶就会让踩减1
					if(this.list[index].infonum.index===2){
						this.list[index].infonum.cai--;
					}
					// 如果顶和踩都没有操作，或者已经操作了踩，就让顶加一
					this.list[index].infonum.dingnum++;
					// 并且修改状态为顶
					this.list[index].infonum.index=1;
						break;
					case 'cai':
					if(this.list[index].infonum.index===2){return;}
						
					if(this.list[index].infonum.index===1){
						this.list[index].infonum.dingnum--;
					}
					this.list[index].infonum.cai++;
					this.list[index].infonum.index=2;
						break;
				}
			},
		// 进入详情页
		opendetail(){
			console.log('进入详情页')
		}
		},
	}
</script>

<style scoped>
	
	.index-list{
		padding: 10px 8px 1rem;
		font-size: 14px;
		border-bottom:1px solid #ccc;
	}
	.index-list1{
			justify-content: space-between;
				}
	.index-list1>view{
			color:#d5d5d5;
				}
	.index-list1>view:last-child{
			background: #f4f4f4;
			color:#000;
			border-radius: 3px;
				}
	.index-list1>view:last-child>view{
			font-size: 10px;
			padding: 5px 10px;
			
				}
	.index-list1>view>image{
			width:40px;
			height:40px;
			border-radius:100%;
			margin-right:0.7rem;
				}
	

	.index-list2{
		padding: .6rem 0;
	}
	.index-list3{
		position: relative;
	}
	.index-list3>view{
		position: absolute;
	}
	.index-list3>.index-list-play{
		position: absolute;
		font-size: 60px;
		color: #ffffff;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.index-list3>.index-list-playinfo{
		position: absolute;
		left: 80%;
		top: 85%;
		transform: translate(-50%,-50%);
		background: rgba(0, 0, 0, 0.3);
		padding: 5px 10px;
		font-size: 10px;
		color: #ffffff;
		width: 80px;
		border-radius: 12px;
		text-align: center;
	}
	.index-list3>image{
 		width: 100%;
 		border-radius:5px;
	}
	.index-list4{
		color:#d5d5d5;
		padding-top: 5px;
	}
	.index-list4>view{
	}
	.index-list4>view>view{
		margin-right:.3rem;
	}
	.index-list4>view>view>view{
		margin-right:.3rem;
	}
	.index-list4>view>.active{
		color:#fede33!important;
	}
</style>
