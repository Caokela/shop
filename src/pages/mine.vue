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

  .box{
    width:100%;
    height:100%;
    .header{
      width:100%;
      height:280rpx;
      background: @bg;
      position: relative;
      .header_img{
        width:132rpx;
        height: 132rpx;
        border-radius:66rpx;
        background:#fff;
        position: absolute;
        top:40rpx;
        left:309rpx;
      }
      .header_usname{
        font-size:28rpx;
        color:#fff;
        width:100%;
        text-align: center;
        position: absolute;
        top:190rpx;

      }

      .btn_getphone {
      	width: 250rpx;
      	height: 80rpx;
      	position: absolute;
      	top: 176rpx;
      	left: 250rpx;
      	z-index: 99;
      	opacity: 0;
      }
    }

    .joinus {
      width: 710rpx;
      height: 120rpx;
      border-radius: 14rpx;
      background: #fff;
      margin-top: 20rpx;
      margin-left: 20rpx;
      line-height: 40rpx;
      position: relative;

      .joined {
        font-size: 24rpx;
        color: @ye;
        position: absolute;
        top: 20rpx;
        left: 20rpx;

        .joined_num {
          color: @bg;
        }
      }

      .joined_des {
        font-size: 20rpx;
        color: #999;
        position: absolute;
        top: 60rpx;
        left: 20rpx;
      }

      .joined_btn {
        width: 200rpx;
        height: 80rpx;
        background: @bg;
        position: absolute;
        top: 20rpx;
        right: 20rpx;
        text-align: center;
        line-height: 80rpx;
        color: #fff;
        font-size: 24rpx;
        border-radius: 40rpx;
      }
    }
    .group{
      width:710rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;
      .list{
        width: 100%;
        height:96rpx;
        line-height: 96rpx;
        font-size:24rpx;
        color:#666;
        background: #fff;
        text-indent: 20rpx;
        position: relative;
        .list_right{
          width:32rpx;
          height:32rpx;
          position: absolute;
          top:32rpx;
          right:20rpx;
          image{
            width:32rpx;
            height:32rpx;
            position: absolute;
            top:0rpx;
            right:0rpx;
          }
        }
      }
      .list_last{
        border-top:2rpx solid #eee;
      }
    }

  }








</style>
<template>


  <view class="box">

    <view class="header">
      <view class="header_img"></view>
      <view class="header_usname" wx:if="{{!islogin}}">点击显示昵称</view>
      <view class="header_usname" wx:if="{{islogin == true}}">{{userInfo.userVo.nickname}}</view>

      <button class="btn_getphone" wx:if="{{!islogin}}" open-type="getUserInfo" bindgetuserinfo="handleUserInfo"></button>
      <button class="btn_getphone" wx:if="{{islogin == true && isPhone == false}}" open-type="getPhoneNumber" bindgetphonenumber="setPhoneNumber"></button>

    </view>

    <view class="joinus">
      <view class="joined">苹果年会员（已有<text class="joined_num">1896</text>人加入会员）</view>
      <view class="joined_des">按年订购，省心划算，每月都能收到好苹果</view>
      <view class="joined_btn" @tap="toMember">加入会员</view>
    </view>

    <view class="joinus">
      <view class="joined">苹果会员（普通会员）</view>
      <view class="joined_des">查看会员信息，配送记录</view>
      <view class="joined_btn" @tap="toMemberdetail">查看</view>
    </view>

    <view class="group">
      <view class="list" @tap="toOrder">
        <view class="list_left">我的订单（15个）</view>
        <view class="list_right"><image src="https://caokela.oss-cn-beijing.aliyuncs.com/more.png"></image></view>
      </view>
      <view class="list list_last" @tap="toAddress">
        <view class="list_left">收货地址（1个）</view>
        <view class="list_right"><image src="https://caokela.oss-cn-beijing.aliyuncs.com/more.png"></image></view>
      </view>
    </view>

    <view class="group">
      <view class="list">
        <view class="list_left">联系客服</view>
        <view class="list_right"><image src="https://caokela.oss-cn-beijing.aliyuncs.com/more.png"></image></view>
      </view>
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
  import auth from '../service/auth'


  export default class Mine extends wepy.page {
    config = {
      navigationBarTitleText: '个人中心',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      userInfo: {},
      islogin: false,
      isPhone: false


    }

    computed = {

    }

    methods = {
      async setPhoneNumber(e) {
      	const self = this
      	wx.showLoading({
      		title: '加载中...',
      		mask: true
      	})

        console.log(e)


      	let msg = e.detail.errMsg
      	await auth.setMobilePhone(e)
      	// await auth.login()
      	// self.userInfo = await wepy.getStorageSync('userInfo')
      	// if(self.userInfo.userVo.avatar.phone == '' || self.userInfo.userVo.avatar == 'undefined' || self.userInfo.userVo.avatar == null) {
      	// 	self.isPhone = false
      	// } else {
      	// 	self.isPhone = true
      	// }
      	wx.hideLoading()
      	self.$apply()
      },
      async handleUserInfo(e) {
      	const self = this
      	wx.showLoading({
      		title: '加载中...',
      		mask: true
      	})
      	let msg = e.detail.errMsg
      	if(msg === 'getUserInfo:ok') {
      		await auth.register(e.detail)
      		self.userInfo = wepy.getStorageSync('userInfo_s')
      		self.islogin = true
      	}
      	wx.hideLoading()
      	self.$apply()
      },
      toAddress(){
        wepy.navigateTo({
          url: '/pages/address'
        })
      },
      toOrder(){
        wepy.navigateTo({
          url: '/pages/order'
        })
      },
      toMember(){
        wepy.navigateTo({
          url: '/pages/member'
        })
      },
      toMemberdetail(){
        wepy.navigateTo({
          url: '/pages/memberdetail'
        })
      }
    }

    events = {

    }



    async onShow() {
      const self = this
      self.userInfo = wepy.getStorageSync('userInfo_s')
      if(self.userInfo.phone == '' || self.userInfo.phone == 'undefined' || self.userInfo.phone == null) {
      	self.isPhone = false
      } else {
      	self.isPhone = true
      }
      if(self.userInfo.userVo.avatar == '' || self.userInfo.userVo.avatar == 'undefined' || self.userInfo.userVo.avatar == null) {
      	self.islogin = false
      } else {
      	self.islogin = true
      }






    }







  }
</script>
