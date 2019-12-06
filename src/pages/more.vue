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

    .header {
      width: 100%;
      height: 60rpx;
      text-align: center;
      font-size: 24rpx;
      line-height: 60rpx;
      color: #fff;

      .bold {
        font-weight: 600;
        margin-right: 40rpx;
      }
    }

    .cont {
      width: 710rpx;
      background: #fff;
      border-radius: 14rpx;
      margin-left: 20rpx;
      margin-top: 20rpx;

      .container {
        width: 670rpx;
        height: 392rpx;
        margin-left: 20rpx;
        padding-top: 20rpx;

        position: relative;

        .container_top {
          width: 670rpx;

          .container_top_left {
            width: 240rpx;
            height: 240rpx;
            box-sizing: border-box;
            position: absolute;
            top: 20rpx;
            left: 0;

            .bg {
              width: 240rpx;
              height: 240rpx;
            }
          }

          .container_top_right {
            width: 410rpx;
            height: 240rpx;
            position: absolute;
            top: 20rpx;
            left: 260rpx;

            .tit {
              font-size: 24rpx;
              color: #666;
              text-align: justify;
              line-height: 36rpx;
            }

            .price {
              color: @bg;
              font-size: 28rpx;
              line-height: 60rpx;

              .del {
                color: #999;
                text-decoration: line-through;
              }
            }

            .tips {
              font-size: 24rpx;
              color: #999;
              line-height: 40rpx;
            }

            .sale {
              font-size: 24rpx;
              color: #999;
              line-height: 40rpx;
            }
          }
        }

        .container_bot {
          width: 670rpx;
          height: 120rpx;
          position: absolute;
          top: 290rpx;
          border-top: 2rpx solid #eee;

          .bot_left {
            width: 226rpx;
            height: 48rpx;
            position: absolute;
            top: 36rpx;
            left: 20rpx;

            .less {
              width: 48rpx;
              height: 48rpx;
              position: absolute;
              top: 0;
              left: 0;

              .bg {
                width: 48rpx;
                height: 48rpx;
              }
            }

            .num {
              width: 130rpx;
              line-height: 48rpx;
              font-size: 32rpx;
              color: @bg;
              text-align: center;
              position: absolute;
              top: 0;
              left: 48rpx;
            }

            .plus {
              width: 48rpx;
              height: 48rpx;
              position: absolute;
              top: 0;
              right: 0;

              .bg {
                width: 48rpx;
                height: 48rpx;
              }
            }
          }

          .bot_right {
            width: 300rpx;
            height: 70rpx;
            position: absolute;
            top: 25rpx;
            right: 20rpx;

            .btn {
              width: 320rpx;
              height: 70rpx;
              color: #fff;
              line-height: 70rpx;
              text-align: center;
              background: @ye;
              border-radius: 35rpx;
              font-size: 24rpx;
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

    .person{
      width:120rpx;
      height:120rpx;
      border:4rpx solid #fff;
      background: #00cc99;
      border-radius: 64rpx;
      position: fixed;
      bottom:60rpx;
      right:60rpx;
      .plist{
        line-height: 40rpx;
        font-size:28rpx;
        color:#fff;
        position: absolute;
        top:20rpx;
        width:120rpx;
        text-align: center;
        letter-spacing:2rpx;
      }
      .plist_last{
        top:60rpx;
      }
    }




  }
</style>
<template>


  <view class="box">

    <view class="header">
      <text class="bold">[产地直供、品质保证]</text><text>所有商品均从陕西省洛川县产地发出</text>
    </view>

    <view class="joinus">
      <view class="joined">苹果年会员（已有<text class="joined_num">1896</text>人加入会员）</view>
      <view class="joined_des">按年订购，省心划算，每月都能收到好苹果</view>
      <view class="joined_btn" @tap="toMember">加入会员</view>
    </view>

    <view class="cont">
      <view class="container">
        <view class="container_top">
          <view class="container_top_left">
            <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/shop.jpg"></image>
          </view>
          <view class="container_top_right">
            <view class="tit">
              2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~80中大型个头(24枚装)约10斤
            </view>
            <view class="price">
              尝鲜价：16.00元/箱（<text class="del">18.00</text>）
            </view>
            <view class="tips">
              您是新顾客，首单可以享受此优惠
            </view>
            <view class="sale">
              今日已售：{{number}}箱
            </view>
          </view>
        </view>
        <view class="container_bot">
          <view class="bot_left">
            <view class="less" @tap="less">
              <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/less.png"></image>
            </view>
            <view class="num">{{num}}箱</view>
            <view class="plus" @tap="plus">
              <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/plus.png"></image>
            </view>
          </view>
          <view class="bot_right">
            <view class="btn">微信支付 {{money}}元</view>
          </view>
        </view>
      </view>
    </view>

    <view class="cont">
      <view class="container">
        <view class="container_top">
          <view class="container_top_left">
            <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/shop.jpg"></image>
          </view>
          <view class="container_top_right">
            <view class="tit">
              2019当季新鲜陕西洛川红富士苹果冰糖心脆甜直径75~80中大型个头(24枚装)约10斤
            </view>
            <view class="price">
              尝鲜价：16.00元/箱（<text class="del">18.00</text>）
            </view>
            <view class="tips">
              您是新顾客，首单可以享受此优惠
            </view>
            <view class="sale">
              今日已售：{{number1}}箱
            </view>
          </view>
        </view>
        <view class="container_bot">
          <view class="bot_left">
            <view class="less" @tap="less1">
              <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/less.png"></image>
            </view>
            <view class="num">{{num1}}箱</view>
            <view class="plus" @tap="plus1">
              <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/plus.png"></image>
            </view>
          </view>
          <view class="bot_right">
            <view class="btn">微信支付 {{money1}}元</view>
          </view>
        </view>
      </view>
    </view>

    <view class="person" @tap="toMine">
      <view class="plist">会员</view>
      <view class="plist plist_last">中心</view>
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

  export default class More extends wepy.page {
    config = {
      navigationBarTitleText: '家有鲜果',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      num: 1,
      num1: 1,
      money: '16.00',
      money1: '16.00',
      number:0,
      number1:0,
      isShowfooter:false


    }

    computed = {

    }

    methods = {
      toMine(){
        wepy.navigateTo({
          url: '/pages/mine'
        })
      },
      toMember(){
        wepy.navigateTo({
          url: '/pages/member'
        })
      },
      less() {
        const self = this
        if (self.num > 1) {
          self.num = self.num - 1
        } else {
          self.num = 1
        }
        self.money = (16 * self.num).toFixed(2)
      },
      plus() {
        const self = this
        self.num = self.num + 1
        self.money = (16 * self.num).toFixed(2)
      },
      less1() {
        const self = this
        if (self.num1 > 1) {
          self.num1 = self.num1 - 1
        } else {
          self.num1 = 1
        }
        self.money1 = (16 * self.num1).toFixed(2)
      },
      plus1() {
        const self = this
        self.num1 = self.num1 + 1
        self.money1 = (16 * self.num1).toFixed(2)
      }
    }

    events = {

    }



    async onShow() {
      const self = this
      let date = new Date().getTime()
      self.number = parseInt(util.timeFormat3(date).replace(':','')) + 55
      self.number1 = parseInt(self.number * 0.8)

    }

    onPageScroll(e){
      const self = this
      if(e.scrollTop > 245){
        self.isShowfooter = true
      }else{
        self.isShowfooter = false
      }
      self.$apply()
    }



    //  分享小程序
    onShareAppMessage() {
      return {
        title: '家有鲜果',
        path: '/pages/index',
        //				imageUrl: 'https://caoke.oss-cn-beijing.aliyuncs.com/share_img.png',
        success(res) {
          wx.getShareInfo({

            complete(res) {
              wepy.showToast({
                title: '分享成功',
                icon: 'success',
                duration: 2000
              })
              wepy.navigateTo({
                url: '/pages/index'
              });
            }
          })
        }
      }
    }

  }
</script>
