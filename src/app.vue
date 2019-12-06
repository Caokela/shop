<style lang="less">
	@import 'style/weui.wxss';
    @import 'style/public.wxss';
	page {
		background: #f4f5fa;
	}


</style>

<script>
	import wepy from 'wepy'
	import update from './service/update'
	import 'wepy-async-function'
	import { api } from './config'
	import http from './utils/request'



	export default class extends wepy.app {
		config = {
			pages: [

				'pages/index',
        'pages/member',
        'pages/more',
        'pages/mine',
        'pages/memberdetail',
        'pages/order',
        'pages/orderdetail',
        'pages/address',
        'pages/addaddress'







			],
			"permission": {
				"scope.userLocation": {
					"desc": "你的位置信息将被使用"
				}
			},
			"networkTimeout": {
				"request": 600000
			},
			window: {
				backgroundTextStyle: 'light',
				navigationBarBackgroundColor: '#fff',
				navigationBarTitleText: 'WeChat',
				navigationBarTextStyle: 'black'
			}


		}

		globalData = {
			userInfo: null,
			timout: ''
		}

		constructor() {
			super()
			this.use('requestfix')
			this.use('promisify')


		}

		onLaunch() {

			this.testAsync()
		}

		async onShow() {
			await update.getupdate()
		}

		sleep(s) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('promise resolved')
				}, s * 1000)
			})
		}

		async testAsync() {
			const data = await this.sleep(3)
			console.log(data)
		}

		getUserInfo(cb) {
			const that = this
			if(this.globalData.userInfo) {
				return this.globalData.userInfo
			}
			wepy.getUserInfo({
				success(res) {
					that.globalData.userInfo = res.userInfo
					cb && cb(res.userInfo)
				}
			})
		}
	}
</script>
