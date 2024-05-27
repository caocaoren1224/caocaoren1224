<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">log</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		onLoad() {
			console.log("打印日志1");
			console.info("打印日志2");
			console.debug("打印日志3");
			console.warn("打印日志4");
			console.error("打印日志5");
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
