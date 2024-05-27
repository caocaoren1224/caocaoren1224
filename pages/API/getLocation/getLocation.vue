<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">getLocation</view>
		</view>
		<view>
			<map :latitude="latitude" :longitude="longitude" :marker="covers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:"",
				longitude:"",
				covers:[
					{
						latitude:"",
					    longitude:"",
					}
				]
			}
		},
		
		onLoad() {
			uni.getLocation({
				type:"wgs-84",
				success:(res)=>{
					this.latitude=res.latitude;
					this.longitude= res.longitude;
					this.covers[0].latitude=this.latitude;
					this.covers[0].longitude=this.longitude;
				}
			})
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>
