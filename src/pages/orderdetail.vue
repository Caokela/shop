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
            left:20rpx;
          }
          .top_left_green{
            background:#00CC00;
          }
          .top_right{
            position: absolute;
            top:0;
            right:20rpx;
            font-size:24rpx;
            color:#999;
            line-height: 40rpx;;
          }
        }
        .cent{
          margin-top: 20rpx;
          padding-top:20rpx;
          width:710rpx;
          margin-left: 20rpx;
          border-top:2rpx solid #eee;
          font-size:24rpx;
          color:@bg;
          text-align: justify;
        }
        .bot{
          margin-top: 20rpx;
          width:710rpx;
          margin-left: 20rpx;
          height:40rpx;
          line-height: 40rpx;
          position: relative;
          font-size:24rpx;
          .bot_left {
            position: absolute;
            top: 0;
            left: 0;
            color:#999;

          }
          .bot_right {
            position: absolute;
            top: 0;
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
        .dete{
          width:750rpx;
          border-top:2rpx solid #eee;
          margin-top:20rpx;
          .list{
            margin-top: 20rpx;
            width:710rpx;
            margin-left: 20rpx;
            height:40rpx;
            line-height: 40rpx;
            position: relative;
            font-size:24rpx;
            color:#999;
            .list_left {
              position: absolute;
              top: 0;
              left: 0;
            }
            .list_right {
              position: absolute;
              top: 0;
              right: 0;
              color:#666;
            }
          }
          .list_red{
            color:@bg;
            .list_right{
              color:@bg;
            }
          }
          .list_last{
            margin-top: 40rpx;
          }
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
            已发货
          </view>
          <view class="top_right">
            10月01日
          </view>
        </view>
        <view class="cent">现货2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~85mm (24枚装)</view>
        <view class="bot">
          <view class="bot_left">顺丰速运单号：278937182739871928379991</view>
          <view class="bot_right">复制单号</view>
        </view>

        <view class="dete">
          <view class="list">
            <view class="list_left">数量：</view>
            <view class="list_right">2箱</view>
          </view>
          <view class="list">
            <view class="list_left">单价：</view>
            <view class="list_right">98.00元</view>
          </view>
          <view class="list list_red">
            <view class="list_left">订单金额：</view>
            <view class="list_right">196.00元</view>
          </view>
        </view>

        <view class="dete">
          <view class="list">
            <view class="list_left">收货信息：</view>
          </view>
          <view class="list">
            <view class="list_left">地址：陕西省西安市雁塔区电子正街？？？小区</view>
          </view>
          <view class="list">
            <view class="list_left">收货人：XXXXXX</view>
          </view>
          <view class="list">
            <view class="list_left">手机号码：XXXXXXXXXXX</view>
          </view>
        </view>

        <view class="dete">
          <view class="list list_last">
            <view class="list_left">客服微信：XXXXXXXXXXX</view>
          </view>
        </view>





      </view>
    </view>



    <view class="box_pay">
    	<button class="weui-btn green-btn" type="primary">评价</button>

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

  export default class Orderdetail extends wepy.page {
    config = {
      navigationBarTitleText: '订单详情',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {



    }

    computed = {

    }

    methods = {

    }

    events = {

    }



    async onShow() {
      const self = this


    }







  }
</script>
