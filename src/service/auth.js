import wepy from 'wepy';
import { api } from '../config';
//import http from '../utils/request';

const auth = {

	async getCode() {
		const loginData = await wepy.login()
		const userinfo = loginData
		userinfo.code = loginData.code
		return userinfo;
	},
	async login(dataInfo) {
		console.log(dataInfo)
		let loginInfo = {}
		let userinfo = {}
		loginInfo = await auth.getCode()

    

		if(dataInfo) {
			userinfo = await wepy.request({
				url: api.user.login.url,
				method: api.user.login.method,
				data: {
					'code': loginInfo.code,
					'phoneType': dataInfo.phoneType, //手机品牌
					'phoneModel': dataInfo.phoneModel, //设备型号
					'phoneVersion': dataInfo.phoneVersion, //微信版本号
					'phoneSystem': dataInfo.phoneSystem, //操作系统及版本
					'phoneSDKVersion': dataInfo.phoneSDKVersion //客户端基础库版本
				}
			})

			await wepy.setStorageSync('auth_key', userinfo.data.exData)

			await wepy.setStorageSync('userInfo_s', userinfo.data.data)

			//

		} else {
			userinfo = await wepy.request({
				url: api.user.login.url,
				method: api.user.login.method,
				data: {
					'code': loginInfo.code
				}
			})
			await wepy.setStorageSync('auth_key', userinfo.data.exData)
			await wepy.setStorageSync('userInfo_s', userinfo.data.data)

		}

	},
	async register(userinfoRaw) {

		this.resetUserInfo()
		let loginInfo = {}
		let userinfo = {}
    let userInfo = wepy.getStorageSync('userInfo_s')
    


		try {
			loginInfo = await auth.getCode()
			userinfo = await wepy.request({
				url: api.user.register.url,
				method: api.user.register.method,
        header: {
          'X-Nideshop-Token':userInfo.userVo.weixin_openid
        },
				data: {
					'code': loginInfo.code,
					'iv': userinfoRaw.iv,
					'encryptedData': userinfoRaw.encryptedData
				}
			})
			await wepy.setStorageSync('auth_key', userinfo.data.exData)
			await wepy.setStorageSync('userInfo_s', userinfo.data.data)

			return userinfo
		} catch(e) {
			wepy.showModal({
				title: '提示',
				content: `获取用户信息失败，请关闭重新进入。${e.message}`
			});
		}
	},
	async resetUserInfo() {
		await wepy.removeStorageSync('userInfo_s');
		await wepy.removeStorageSync('auth_key');
	},
	async setMobilePhone(e) {
		let loginInfo = {}

		try {
			loginInfo = await auth.getCode()



			let userinfo = await wepy.request({
				url: api.user.setMobile.url,
				method: api.user.setMobile.method,
        header: {
          'X-Nideshop-Token':'oeufq0ASdbYrGrMpalFR12eBWhMo'
        },
				data: {
					'code': loginInfo.code,
					'iv': e.detail.iv,
					'encryptedData': e.detail.encryptedData
				}
			})


			return userinfo
		} catch(e) {
			wepy.showModal({
				title: '提示',
				content: `获取用户手机失败，请稍后再试，或自行填入。${e.message}`
			});
		}
	}
}
export default auth;
