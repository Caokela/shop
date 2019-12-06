// ENV
const env = 'development'; // 'development' or 'production'

// WXAPP VERSION
const version = '1.0.1';

// development and production host
const hosts = {
		// development: 'https://ourmrc.com',
//			development: 'http://192.168.134.77', //wu
// development: 'http://longxing208.eicp.net:44234',    //c
//development: 'http://39.108.53.149',    //线上
// development:'http://10.10.10.104:8080',   //d



	development: 'http://192.168.1.118:8080/', //chang
	production: 'https://evmri.com'
};




// apis


const api = {

	user: {
		login: {
			method: 'POST',
			url: '/platform-framework/api/auth/login_by_weixin'
		},
		register: {
			method: 'POST',
			url: '/platform-framework/api/auth/regist_by_weixin'
		},
		getcode: {
			method: 'POST',
			url: '/m/sys/initSet/sendSMS?noSign=1&pileCharging=1'
		},
		setMobile: {
			method: 'POST',
			url: '/platform-framework/api/auth/phone_by_weixin?noSign'
		},
		changphone: {
			method: 'POST',
			url: '/m/mm/carowner/updateNewPhone?noSign=1&pileCharging=1'
		}
	},
  address:{
    getinfo:{
      method:'GET',
      url:'/platform-framework/api/address/addressUserlist'
    },
    save:{
      method:'POST',
      url:'/platform-framework/api/address/save'
    },
    detail:{
      method:'GET',
      url:'/platform-framework/api/address/detail'
    }
  },
  goods:{
    list:{
      method:'GET',
      url:'/platform-framework/api/index/newGoods'
    }
  }

};

const downloadApi = {
	download: {
		file: {
			method: 'GET',
			url: 'https://yyf.xcxhdj.hagongyi.com/storage'
		}
	}
};

module.exports = {
	env,
	version,
	api: disposeUrl(api, hosts[env]),
	downloadApi: disposeUrl(downloadApi, '')
};

function disposeUrl(obj, prefix) {
	Object.keys(obj).forEach(v => {
		if(obj[v].url) {
			obj[v].url = prefix + obj[v].url;
		} else {
			obj[v] = disposeUrl(obj[v], prefix);
		}
	});

	return obj;
}
