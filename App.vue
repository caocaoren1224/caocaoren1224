<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			uni.onTabBarMidButtonTap(() => {
			      // 中间按钮被点击时的处理逻辑
			      console.log('中间按钮被点击');
			    });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
		
	}
</script>

<style>
	/*每个页面公共css */
	@import "common/uni.css";
	@import "common/uniUi.css"
</style>
