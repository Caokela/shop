//二维码进入预处理
const qrcode = {

	getQrcode(options) {

		let scene = decodeURIComponent(options);
		let str = scene.split("pay/?")

		let strs = str[1].split("&") //多参数以&连接
		let theRequest = new Object()
		//取得全部并赋值
		for(let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
		}
		return theRequest;
	}
}

export default qrcode;