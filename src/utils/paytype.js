	function tipsFun(paytype) {
		let paytxt = ''
		switch(0) {
			case 0:
				paytxt = '未选择支付方式';
				break;
			case 1:
				paytxt = '微信支付';
				break;	
			case 2:
				paytxt = '支付宝支付';
				break;
			case 3:
				paytxt = '企业账户';
				break;
			case 4:
				paytxt = '账户扣除';
				break;	
		}

		return paytxt;
	}

	module.exports = {
		tipsFun: tipsFun

	}