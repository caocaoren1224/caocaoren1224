<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">navigateTo</view>
		</view>
		<view class="uni-btn-v">
			<button type="primary" @tap="navigate">跳转到test页面</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//在起始页跳转到test.vue页面，传参，并监听test.vue发送过来的事件数据
			navigate:function(){
				uni.navigateTo({
					url:'../test/test?id=1&name=uniapp',
					events:{
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: function(data) {
						  console.log(data)
						},
						someEvent: function(data) {
						  console.log(data)
						}
					},
					success:function(res){
						//通过eventChannel向被打开页面传递参数
						res.eventChannel.emit("acceptDataFromOpenedPage",{data:'data from starter page'})
					}	
				});
			}
			
			
		}
	}
</script>

<style>

</style>
