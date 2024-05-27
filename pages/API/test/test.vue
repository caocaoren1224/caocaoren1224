<template>
	<view>
		<view class="uni-list-cell">
			<view class="uni-list-cell-left">
				<view class="uni-label-text">姓名：</view>
			</view>
			<view class="uni-list-cell-db">
				<input  class="uni-input" type="text" :disabled="true" :value="name" name="name"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:""
			}
		},
		onLoad:function(option){//option 为object类型，会序列化上个页面传递过来的参数
			console.log(option.id);   //在控制台打印上个页面传递过来的参数id
			console.log(option.name);  //在控制台打印上个页面传递过来的参数name
			this.name=option.name;
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
