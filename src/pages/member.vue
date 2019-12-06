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
    background: @bg;



  }

  .box {
    width: 100%;
    height: 100%;

    .htit{
      width:670rpx;
      color:#fff;
      font-size: 24rpx;
      text-align: justify;
      text-indent: 48rpx;
      margin-left:40rpx;
    }

    .cont {
      width: 710rpx;
      background: #fff;
      border-radius: 14rpx;
      margin-left: 20rpx;
      margin-top: 20rpx;

      .container {
        width: 670rpx;

        margin-left: 20rpx;
        padding-top: 20rpx;
        height:180rpx;
        position: relative;

        .container_top {
          width: 670rpx;

          .container_top_left {
            width: 160rpx;
            height: 160rpx;
            box-sizing: border-box;
            position: absolute;
            top: 20rpx;
            left: 20rpx;

            .bg {
              width: 160rpx;
              height: 160rpx;
            }
          }

          .container_top_right {
            width: 470rpx;
            height: 240rpx;
            position: absolute;
            top: 30rpx;
            left: 200rpx;

            .tit {
              font-size: 24rpx;
              color: #666;
              text-align: justify;
              line-height: 36rpx;
            }

            .des{
              font-size: 24rpx;
              color: #666;
              text-align: justify;
              line-height: 36rpx;
            }

          }
        }




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
        font-size: 28rpx;
        color: #333;
        position: absolute;
        top: 20rpx;
        left: 20rpx;

        .joined_num {
          color: @bg;
        }
      }
      .join_qs{
        color:#00CC00;
      }
      .join_zz{
        color:@bg;
      }

      .joined_des {
        font-size: 20rpx;
        color: #999;
        position: absolute;
        top: 60rpx;
        left: 20rpx;
      }

      .joined_btn {
        width: 260rpx;
        height: 80rpx;
        background: @ye;
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








  }
</style>
<template>


  <view class="box">

    <view class="htit">
      年会员有效期为12个月，我们将每月定期为您安排快递来自产地洛川的优质红富士苹果，还有神秘惊喜哦，作为会员您将享受到最优惠的价格，最优质的服务。
    </view>

    <view class="cont">
      <view class="container">
        <view class="container_top">
          <view class="container_top_left">
            <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/shop.jpg"></image>
          </view>
          <view class="container_top_right">
            <view class="tit">
              陕西洛川红富士苹果冰糖心脆甜直径75#~80#中大型个头(24枚装)
            </view>
            <view class="des">
              每箱约10-12斤左右，实惠快递包装，双层发泡网包裹防磕碰
            </view>
          </view>
        </view>

      </view>

    </view>

    <view class="joinus">
      <view class="joined">普通会员（988.00元/年）</view>
      <view class="joined_des">每月送出1箱，全年共12箱</view>
      <view class="joined_btn">加入此会员</view>
    </view>

    <view class="joinus">
      <view class="joined join_qs">轻奢会员（1888.00元/年）</view>
      <view class="joined_des">每月送出2箱，全年共24箱</view>
      <view class="joined_btn">加入此会员</view>
    </view>

    <view class="joinus">
      <view class="joined join_zz">至尊会员（2668.00元/年）</view>
      <view class="joined_des">每月送出e箱，全年共36箱</view>
      <view class="joined_btn">加入此会员</view>
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

  export default class Member extends wepy.page {
    config = {
      navigationBarTitleText: '加入会员',
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
