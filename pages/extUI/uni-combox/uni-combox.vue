<template>
	<view class="container">
		<uni-card :isShadow="false" is-full>
			<text class="uni-h5">组合框一般用于可以选择也可以输入的表单项</text>
		</uni-card>
		<uni-section title="基本用法" type="line" >
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
				<view class="result-box">
					<text>所选城市：{{city}}</text>
				</view>
			</view>
		</uni-section>
		
		<uni-section title="无边框" sub-title="使用border-false 取消边框" type="line" >
			<view class="example-body">
				<uni-combox :border="false"  :candidates="candidates"  placeholder="请选择所在城市" ></uni-combox>
			</view>
		</uni-section>
		
		<uni-section title="设置无匹配项的提示语" sub-title="使用emptyTips属性设置无匹配项时的提示语" type="line" >
			<view class="example-body">
				<uni-combox empty-tips="这里什么都没有"  placeholder="请选择所在城市" ></uni-combox>
			</view>
		</uni-section>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				candidates:['北京','南京','武汉','天津','上海','海口'],
				city:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
