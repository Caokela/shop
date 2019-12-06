import caniuse from '../utils/caniuse'

const update = {
	getupdate() {
		let isuse = caniuse.isuse('getUpdateManager')

		if(isuse == false) {
			return
		}
		const updateManager = wx.getUpdateManager()

		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
			console.log(res.hasUpdate)
		})

		updateManager.onUpdateReady(function() {
			wx.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启应用？',
				showCancel: false,
				confirmColor: '#00c8b3',
				success: function(res) {
					if(res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate()
					}
				}
			})

		})

		updateManager.onUpdateFailed(function() {
			// 新的版本下载失败
			wx.showModal({
				title: '已经有新版本了呦！',
				content: '新版本已经上线啦，请您删除当前小程序，重新搜索打开或者扫描二维码打开！',
				showCancel: false
			})
		})
	}
}

export default update;