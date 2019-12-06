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
    .header {
      width: 100%;
      padding-top: 20rpx;
      padding-bottom: 40rpx;
      background: @bg;

      .header_cont {
        width: 710rpx;
        margin-left: 20rpx;
        line-height: 40rpx;
        color: #fff;
        font-size: 24rpx;
        text-align: justify;
      }
    }

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
      width: 710rpx;
      margin-left: 20rpx;

      .cont_list {
        width: 710rpx;
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        background: #fff;
        border-radius: 14rpx;
        margin-top: 20rpx;

        .clist {
          width: 100%;
          height: 48rpx;
          line-height: 48rpx;
          font-size: 24rpx;
          position: relative;
          color:#999;
          .clist_left {
            position: absolute;
            top: 0;
            left: 20rpx;
          }
          .clist_right {
            position: absolute;
            top: 0;
            right: 20rpx;
            color:@bg;
          }
          .clist_gray{
            color:#999;
          }
        }

      }

      .dcont {
          width: 710rpx;

          .clist{
            width:710rpx;
            padding-top:40rpx;
            padding-bottom: 40rpx;
            background: #fff;
            margin-top: 20rpx;

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

        .dnav{
          width:100%;
          height:96rpx;
          position: relative;
          .dnav_cont{
            width:710rpx;
            height:40rpx;
            line-height: 40rpx;
            margin-left:0;
            position: absolute;
            top:28rpx;
            .dnav_cont_left{
               font-size:28rpx;
               color:#666;
            }
            .dnav_cont_right{
               font-size:24rpx;
               color:#fff;
               width:180rpx;
               height:40rpx;
               text-align: center;
               border-radius:20rpx;
               background: @bg;
               position: absolute;
               top:0;
               right:0;
            }
          }
        }

    }







  }
</style>
<template>


  <view class="box">
    <view class="header">
      <view class="header_cont">
        <view>
          [普通年会员]用户，您好：
        </view>
        <view>
          您于2019年05月22日开通普通年会员服务，我们将每月安排为您寄来自产地洛川的优质红富士苹果，请您注意查收。如有疑问请添加微信：#######，咨询客服
        </view>
      </view>
    </view>
    <view class="nav">
      <view class="list {{checked == 1 ? 'list_check' : ''}}" @tap="record">发货记录</view>
      <view class="list {{checked == 2 ? 'list_check' : ''}}" @tap="address">收货地址</view>
      <view class="list {{checked == 3 ? 'list_check' : ''}}" @tap="member">会员记录</view>
    </view>

    <view class="cont" wx:if="{{checked == 1}}">
      <view class="cont_list">
        <view class="clist">
          <view class="clist_left">2019-09-09</view>
          <view class="clist_right">送出两箱</view>
        </view>
        <view class="clist">
          <view class="clist_left">快递单号:</view>

        </view>
        <view class="clist">
          <view class="clist_left">127893718273987192837999127397198237</view>
          <view class="clist_right clist_gray">复制</view>
        </view>
        <view class="clist">
          <view class="clist_left">127893718273987192837999127397198237</view>
          <view class="clist_right clist_gray">复制</view>
        </view>
        <view class="clist">
          <view class="clist_left">地址：陕西省西安市雁塔区电子增加XXX小区</view>
        </view>


      </view>
      <view class="cont_list">
        <view class="clist">
          <view class="clist_left">2019-09-09</view>
          <view class="clist_right">送出两箱</view>
        </view>
        <view class="clist">
          <view class="clist_left">快递单号:</view>

        </view>
        <view class="clist">
          <view class="clist_left">127893718273987192837999127397198237</view>
          <view class="clist_right clist_gray">复制</view>
        </view>
        <view class="clist">
          <view class="clist_left">127893718273987192837999127397198237</view>
          <view class="clist_right clist_gray">复制</view>
        </view>
        <view class="clist">
          <view class="clist_left">地址：陕西省西安市雁塔区电子增加XXX小区</view>
        </view>


      </view>
    </view>

    <view class="cont" wx:if="{{checked == 2}}">

     <view class="dcont">
         <view class="clist">
           <view class="top">
             <view class="top_left">
               手机号码：
             </view>
             <view class="top_center">
               <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="number" placeholder-style="color: #666; font-size: 24rpx" placeholder="请输入手机号"/>
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
               <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="收货人姓名"/>
             </view>
           </view>
         </view>

         <view class="dnav">
           <view class="dnav_cont">
             <view class="dnav_cont_left">收货地址：</view>
             <view class="dnav_cont_right">获取定位</view>
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
               <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;" type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="如门牌号码、小区名称等"/>
             </view>
           </view>
         </view>


       </view>



       <view class="box_pay">
       	<button class="weui-btn green-btn" type="primary">保存地址</button>
       </view>


    </view>


    <view class="cont" wx:if="{{checked == 3}}">
      <view class="cont_list">
        <view class="clist">
          <view class="clist_left">2019-09-09</view>
        </view>
        <view class="clist">
          <view class="clist_left">开通普通会员，有效期12个月</view>
          <view class="clist_right">980.00元</view>
        </view>
      </view>
      <view class="cont_list">
        <view class="clist">
          <view class="clist_left">2019-09-09</view>
        </view>
        <view class="clist">
          <view class="clist_left">开通普通会员，有效期12个月</view>
          <view class="clist_right">980.00元</view>
        </view>
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

  export default class Memberdetail extends wepy.page {
    config = {
      navigationBarTitleText: '会员详情',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      checked:1,
      region: ['陕西省', '西安', '雁塔区'],
      customItem: '全部'


    }

    computed = {

    }

    methods = {
      bindRegionChange: function(e) {
        const self = this
        self.region = e.detail.value
      },
      record(){
        const self = this
        self.checked = 1
      },
      address(){
        const self = this
        self.checked = 2
      },
      member(){
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
