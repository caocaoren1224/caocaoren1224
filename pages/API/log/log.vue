<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">log</view>
		</view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">console对象是 JavaScript 的原生对象，可向控制台输出信息。主要用于调试程序表单项。</text><br/>
			<text class="uni-h6">console.log() 用于在控制台输出信息。</text><br/>
			<text class="uni-h6">console.info() 是 console.log() 的别名，用法完全一样。只不过info会在输出信息的前面，加上一个蓝色图标的表单项。</text><br/>
			<text class="uni-h6">console.debug()与 console.log() 类似，会在控制台输出调试信息。默认情况下，输出的信息不会显示的表单项。</text><br/>
			<text class="uni-h6">console.warn()也是在控制台输出信息，输出信息时，在最前面加一个黄色三角，表示警告的表单项。</text><br/>
			<text class="uni-h6">console.error()也是在控制台输出信息，输出信息时，在最前面加一个红色的叉，表示出错。</text><br/>
		</uni-card>
	</view>
</template>

<script>
	export default {
		
		onLoad(){
			console.log("打印日志1");
			console.debug("打印日志2");
			console.info("打印日志3");
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
