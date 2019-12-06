import wepy from 'wepy';
import HmacSHA1 from 'crypto-js/hmac-sha1';
import enc from 'crypto-js/enc-utf8'

function signature(json) { // 签名
	var jsonObj = JSON.stringify(json)
	var appsecret = wepy.getStorageSync('userInfo_c').appsecret

	if(jsonObj == "{}" || jsonObj == null || jsonObj == "" || appsecret == null || appsecret == "") {
		throw new Error("参数或密钥为空......");
	}
	var arr = []
	for(var i in json) {
		arr.push(i + json[i])
	}
	json.signature = HmacSHA1(arr.sort().join(""), appsecret).toString(enc.Base64).toUpperCase();
	return JSON.stringify(json);
}

module.exports = {
	signature: signature
}