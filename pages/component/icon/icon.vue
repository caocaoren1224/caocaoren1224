<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">icon</view>
		</view>
		<view v-for="(value,index) in iconType" :key="index">
			<icon :type="value"></icon>
			<text> {{value}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconType:['success','success_no_circle','info','warn','waiting','cancel','download','search','clear']
			}
		},
		onLoad(){
			//#ifdef APP-PLUS||MP-WEIXIN
			   this.iconType=['success','success_no_circle','info','warn','waiting','cancel','download','search','clear']
			//#endif
			//#// #ifdef MP-ALIPAY
			    this.iconType=['info','warn','waiting','cancel','download','search','clear','success','success_no_circle','loading']
			// #endif
			//#// #ifdef MP-BAIDU
			   this.iconType=['success','info','warn','success_no_circle','clear','search','personal','setting','top','close','cancel','download','checkboxSelected','radioSelected','radioUnselect']
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
