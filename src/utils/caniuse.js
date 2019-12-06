function isuse(api) {

	let isuse = wx.canIUse(api)
	console.log(isuse);
	if(isuse) {

	} else {
		console.log(isuse);
		wx.showModal({
			title: '提示',
			confirmColor: '#00c8b3',
			showCancel: false,
			content: '当前微信版本过低，部分功能无法使用，请升级到最新微信版本后重试。'
		})

	}
	return isuse

}

module.exports = {
	isuse: isuse
}