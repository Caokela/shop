import wepy from 'wepy';
import auth from '../service/auth';
import { api } from '../config';
// import evmri from '../utils/evmri'

export default async function request(options) {

	let userInfo = await wepy.getStorageSync('userInfo_s')

	if(options.header) {
		options.header['X-Nideshop-Token'] = userInfo.userVo.weixin_openid
	} else {
		options.header = {
			'X-Nideshop-Token': userInfo.userVo.weixin_openid
		}
	}
	// options.data.appkey = userInfo.appkey
	// options.data.timestamp = new Date().getTime().toString()
	// options.data = evmri.signature(options.data)
	let response = await wepy.request(options)

	if(response.data.code === 401) {
		await auth.login()
		return await request(options)
	} else if(response.data.code === 1) {
		wepy.showModal({
			title: '提示',
			msg: response.data.errmsg
		})
	} else {
		return response
	}
}
