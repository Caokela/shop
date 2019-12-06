import wepy from 'wepy';
import { api } from '../config';
import http from '../utils/request';


const pays = {
	async payInfo(data) {
		let currentPays;
		try {
			const paysData = await http({
				method: api.record.pay.method,
				url: api.record.pay.url,

				data: data
			})
			console.log(paysData)
			if(paysData.data.code === 0) {
				currentPays = paysData.data.data
			} else if(paysData.data.code === -1) {
				wx.showToast({
					title: paysData.data.msg,
					icon: 'none',
					duration: 2000
				})
				currentPays = paysData.data
			}
		} catch(e) {
			console.log(e);
		}
		return currentPays;
	}
}

export default pays;