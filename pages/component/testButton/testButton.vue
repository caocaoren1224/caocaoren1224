<template>
	<view>
		<button size="mini" :disabled="buttondisable" hover-start-time="100" @click="goto('/pages/index/index')">
			{{buttonText}}
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"buttonText":"按钮",  //组件内容
				"buttondisable":false  //组件属性
			}
		},
		methods: {
			goto(url){
				uni.showToast({
					title:"触发了按钮点击时间，跳转到"+url,
					icon:"success",
					duration:2000
				});
			    setTimeout(function(){
				uni.redirectTo({
					url:url
				})
			    },2000);
				
			}
		}
	}
</script>

<style>

</style>
