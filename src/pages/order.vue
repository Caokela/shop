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
    .nav {
      width: 750rpx;
      height: 100rpx;
      background: #fff;
      display: -webkit-flex;
      -webkit-justify-content: space-around;

      .list {
        width: 200rpx;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        font-size: 28rpx;
        color: #666;
      }

      .list_check {
        color: @bg;
        box-sizing: border-box;
        border-bottom: 4rpx solid @bg;
      }
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
            color:#666;
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

          }
          .bot_right {
            position: absolute;
            top: 0;
            right: 0;
            color:#666;
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

    <view class="nav">
      <view class="list {{checked == 1 ? 'list_check' : ''}}" @tap="starting">待收货</view>
      <view class="list {{checked == 2 ? 'list_check' : ''}}" @tap="start">待发货</view>
      <view class="list {{checked == 3 ? 'list_check' : ''}}" @tap="started">已完成</view>
    </view>

    <view class="cont" wx:if="{{checked == 1}}">
      <view class="clist" @tap="toOrderdetail">
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
      </view>
    </view>

    <view class="cont" wx:if="{{checked == 2}}">
      <view class="clist" @tap="toOrderdetail">
        <view class="top">
          <view class="top_left">
            待发货
          </view>
          <view class="top_right">
            10月01日
          </view>
        </view>
        <view class="cent">现货2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~85mm (24枚装)</view>
      </view>
      <view class="clist" @tap="toOrderdetail">
        <view class="top">
          <view class="top_left">
            待发货
          </view>
          <view class="top_right">
            10月01日
          </view>
        </view>
        <view class="cent">现货2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~85mm (24枚装)</view>
      </view>

    </view>


    <view class="cont" wx:if="{{checked == 3}}">
      <view class="clist" @tap="toOrderdetail">
        <view class="top">
          <view class="top_left top_left_green">
            已完成
          </view>
          <view class="top_right">
            10月01日
          </view>
        </view>
        <view class="cent">现货2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~85mm (24枚装)</view>
        <view class="btn">评价一下</view>
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

  export default class Order extends wepy.page {
    config = {
      navigationBarTitleText: '会员详情',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      checked:1


    }

    computed = {

    }

    methods = {
      toOrderdetail(){
        wepy.navigateTo({
          url: '/pages/orderdetail'
        })
      },
      starting(){
        const self = this
        self.checked = 1
      },
      start(){
        const self = this
        self.checked = 2
      },
      started(){
        const self = this
        self.checked = 3
      }
    }

    events = {

    }



    async onShow() {
      const self = this


    }







  }
</script>
