<style lang="less">
  @bg : #FF3300;
  @ye : #FF9900;

  page {
    width: 100%;
    height: 100%;
    background: #f4f5fa;
    position: relative;
    top: 0;
    left: 0;
  }

  .box {

    .cont {
      width: 710rpx;

      .clist{
        width:710rpx;
        padding-top:40rpx;
        padding-bottom: 40rpx;
        background: #fff;
        margin-top: 20rpx;
        margin-left:20rpx;
        .top{
          width:710rpx;
          height:40rpx;
          position: relative;
          .top_left{
            width:160rpx;
            height:40rpx;
            font-size:24rpx;
            color:#666;
            line-height: 40rpx;
            position: absolute;
            top:0;
            left:20rpx;
          }
          .top_cent{
            width:300rpx;
            height:40rpx;
            position: absolute;
            top:0;
            left:180rpx;


          }
          .top_right{
            position: absolute;
            top:0;
            right:20rpx;
            font-size:24rpx;
            color:#666;
            line-height: 40rpx;
          }
          .top_icon{
            width:28rpx;
            height:28rpx;
            position: absolute;
            top:6rpx;
            right:20rpx;
            image{
              width:28rpx;
              height:28rpx;
              position: absolute;
              top:0;
              right:0;
            }
          }
        }

        .bot{
          margin-top:20rpx;
          height:60rpx;
          border-top:2rpx solid #eee;
          position: relative;

        }


      }
      .clist_last{
        margin-top:0;
        border-top:2rpx solid #eee;
      }



    }

    .nav{
      width:100%;
      height:96rpx;
      position: relative;
      .nav_cont{
        width:710rpx;
        height:40rpx;
        line-height: 40rpx;
        margin-left:20rpx;
        position: absolute;
        top:28rpx;
        .nav_cont_left{
           font-size:28rpx;
           color:#666;
        }
        .nav_cont_right{
           font-size:24rpx;
           color:#fff;
           width:180rpx;
           height:40rpx;
           text-align: center;
           border-radius:20rpx;
           background: @bg;
           position: absolute;
           top:0;
           right:0rpx;
        }
      }
    }






  }
</style>
<template>


  <view class="box">



    <view class="cont">
      <view class="clist">
        <view class="top">
          <view class="top_left">
            手机号码：
          </view>
          <view class="top_center">
            <input value="{{phone}}" style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="number" placeholder-style="color: #666; font-size: 24rpx" placeholder="请输入手机号"/>
          </view>
          <view class="top_right">
            获取手机号
          </view>
        </view>

      </view>
      <view class="clist clist_last">
        <view class="top">
          <view class="top_left">
            收货人姓名：
          </view>
          <view class="top_center">
            <input bindinput="bindNameInput" value="{{usname}}" style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="收货人姓名"/>
          </view>
        </view>
      </view>

      <view class="nav">
        <view class="nav_cont">
          <view class="nav_cont_left">收货地址：</view>
          <view class="nav_cont_right">获取定位</view>
        </view>
      </view>

      <view class="clist" style="margin-top:0;">
        <view class="top">
          <view class="top_left">
            所在地区：
          </view>
          <view class="top_center">
            <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
              <view class="picker" style="font-size:24rpx;color:#666;margin-left:180rpx;">
                  {{region[0]}} {{region[1]}} {{region[2]}}
              </view>
            </picker>
          </view>
          <view class="top_icon">
            <image src="https://caokela.oss-cn-beijing.aliyuncs.com/more.png"></image>
          </view>

        </view>

      </view>
      <view class="clist clist_last">
        <view class="top">
          <view class="top_left">
            详细地址：
          </view>
          <view class="top_center">
            <input bindinput="bindKeyInput" value="{{detailInfo}}" style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="如门牌号码、小区名称等"/>
          </view>
        </view>
      </view>


    </view>



    <view class="box_pay" @tap="save">
    	<button class="weui-btn green-btn" type="primary">保存地址</button>
    </view>




  </view>


</template>

<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {
    api
  } from '../config'
  import util from '../utils/util'

  export default class Addaddress extends wepy.page {
    config = {
      navigationBarTitleText: '添加收货地址',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {

      region: ['陕西省', '西安市', '雁塔区'],
      customItem: '全部',
      detailInfo:'',
      usname:'',
      userInfo:{},
      phone:'',
      id:0

    }

    computed = {

    }

    methods = {
      async save(){
        const self = this
        await self.saveAddress()
      },

      bindRegionChange: function (e) {
        const self = this
        self.region = e.detail.value
      },
      bindKeyInput: function (e) {

        const self = this
        self.detailInfo = e.detail.value

      },
      bindNameInput: function (e) {

        const self = this
        self.usname = e.detail.value

      }

    }

    events = {

    }



    async onLoad(options) {
      const self = this

      self.userInfo = wepy.getStorageSync('userInfo_s')
      if(options.id != -1){
        self.id = options.id
        await self.getAddress(options.id)
      }else{
        self.id = 0
      }




    }

    //获取当前位置
    async getAddress(id){
      const self = this
      let data = {
        id:parseInt(id),
        userId:self.userInfo.userVo.userId
      }

      console.log(data)

      try {
      	let dataInfo = await http({
      		method: api.address.detail.method,
      		url: api.address.detail.url,
      		data: data
      	})
      	if(dataInfo.data.errno == 0) {
          self.phone = dataInfo.data.data.telNumber
          self.region[0] = dataInfo.data.data.detailInfo
          self.region[1] = dataInfo.data.data.provinceName
          self.region[2] = dataInfo.data.data.countyName
          self.detailInfo = dataInfo.data.data.detailInfo
      	}
        self.$apply()

      } catch(e) {
      	console.log(e)
      }
    }



    // 保存收货地址
    async saveAddress(){
      const self = this

      let data = {
        "id": self.id,
        "userName": self.usname,//收货人姓名
        "telNumber": "17521012504",//手机号
        "province_id": 0,//默认0
        "city_id": 0,//默认0
        "district_id": 0,//默认0
        "isdefault": 1,//是否默认地址   1默认  0不默认
        "provinceName": self.region[0],//省
        "cityName": self.region[1],//市
        "countyName": self.region[2],//县区
        "detailInfo": self.detailInfo, //详细地址
        "userId": self.userInfo.userVo.userId
      }

      try {
      	let dataInfo = await http({
      		method: api.address.save.method,
      		url: api.address.save.url,
      		data: JSON.stringify(data)
      	})
      	if(dataInfo.data.errno == 0) {
          wx.showToast({
          	title: '保存成功！',
          	icon: 'none',
          	duration: 3000
          })

      	}

      } catch(e) {
      	console.log(e)
      }
    }







  }
</script>
