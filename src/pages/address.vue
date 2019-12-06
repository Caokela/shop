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
    padding-bottom: 140rpx;
    .tips{
      font-size:28rpx;
      width:100%;
      text-align: center;
      line-height: 120rpx;
      color:#999;
    }
    .cont {
      width: 750rpx;

      .clist{
        width:750rpx;
        padding-top:40rpx;
        padding-bottom: 40rpx;
        background: #fff;
        margin-top: 20rpx;
        .top{
          width:750rpx;
          height:40rpx;
          position: relative;
          .top_left{
            width:120rpx;
            height:40rpx;
            font-size:24rpx;
            color:#fff;
            line-height: 40rpx;
            text-align: center;
            background:@bg;
            border-radius:20rpx;
            position: absolute;
            top:0;
            right:20rpx;
          }
          .top_left_green{
            background:#00CC00;
          }
          .top_right{
            position: absolute;
            top:0;
            left:20rpx;
            font-size:24rpx;
            color:#666;
            line-height: 40rpx;
          }
        }

        .bot{
          margin-top: 20rpx;
          width:710rpx;
          margin-left: 20rpx;
          height:60rpx;
          line-height: 40rpx;
          position: relative;

          font-size:24rpx;
          border-top:2rpx solid #eee;
          .bot_left {
            position: absolute;
            top: 20rpx;
            left: 0;
            color:#666;

          }
          .bot_right {
            position: absolute;
            top: 20rpx;
            right: 0;
            color:#999;
          }
        }
        .btn{
          width:200rpx;
          height:60rpx;
          text-align: center;
          line-height: 60rpx;
          border-radius: 30rpx;
          background: @bg;
          color:#fff;
          font-size:24rpx;
          margin:0 auto;
          margin-top:20rpx;
        }

      }



    }







  }
</style>
<template>


  <view class="box">



    <view class="cont" wx:if="{{list.length > 0}}">
      <view class="clist" wx:for="{{list}}" wx:key="id">
        <view class="top">
          <view class="top_left" @tap="toAddaddress('{{item.id}}')">
            修改
          </view>
          <view class="top_right">
            {{item.userName}} {{item.telNumber}}
          </view>
        </view>
        <view class="bot">
          <view class="bot_left">{{item.address}}</view>
        </view>
      </view>

    </view>
    <view class="cont" wx:if="{{list.length == 0}}">
      <view class="tips">暂无收货地址</view>
    </view>



    <view class="box_pay">
    	<button class="weui-btn green-btn" type="primary" @tap="toAddaddress(-1)">添加收货地址</button>
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

  export default class Address extends wepy.page {
    config = {
      navigationBarTitleText: '地址管理',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      userInfo:{},
      list:[]


    }

    computed = {

    }

    methods = {
      toAddaddress(id){
        console.log(id)
        wepy.navigateTo({
          url: '/pages/addaddress?id=' + id
        })
      }
    }

    events = {

    }



    async onShow() {
      const self = this
      self.userInfo = wepy.getStorageSync('userInfo_s')
      await self.getList()


    }

    // 保存收货地址
    async getList(){
      const self = this
      let data = {
        userId:self.userInfo.userVo.userId
      }

      try {
      	let dataInfo = await http({
      		method: api.address.getinfo.method,
      		url: api.address.getinfo.url,
      		data: data
      	})



      	if(dataInfo.data.errno == 0) {
          self.list = []
          dataInfo.data.data.forEach((item)=>{

            self.list.push({
              id:item.id,
              userName:item.userName,
              address:item.provinceName + item.cityName + item.countyName + item.detailInfo,
              telNumber:item.telNumber
            })
          })



          self.$apply()

      	}

      } catch(e) {
      	console.log(e)
      }

    }






  }
</script>
