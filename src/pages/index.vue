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


    .nav {
      width: 710rpx;
      height: 120rpx;
      border-radius: 14rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;
      background: #fff;
      display: -webkit-flex;
      justify-content: space-around;

      .list {
        font-size: 24rpx;
        color: #999;

        .icon {
          width: 40rpx;
          height: 40rpx;
          border: 2rpx solid red;
          box-sizing: border-box;
          margin: 0 auto;
          margin-top: 20rpx;
        }

        .nav_tit {
          line-height: 40rpx;
        }
      }

      .list_check {
        color: @bg;
      }
    }

    .detail {
      width: 710rpx;
      padding: 0;
      font-size: 0;
      border-radius: 14rpx;
      overflow: hidden;
      background: #fff;
      margin-top: 20rpx;
      margin-left: 20rpx;
      position: relative;

      .detail_bg {
        width: 710rpx;
      }

      .barrage {
        width: 670rpx;
        height: 400rpx;
        position: absolute;
        top: 220rpx;
        left: 20rpx;
        overflow: hidden;
        z-index: 999;

        .txt {
          height: 48rpx;
          text-align: center;
          border-radius: 24rpx;
          line-height: 48rpx;
          border: 2rpx solid @bg;
          color: @bg;
          font-size: 20rpx;
          position: absolute;
          right: -560rpx;
          opacity: 1;
        }

        .txt_green {
          border: 2rpx solid green;
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
        }

        .txt_first {
          width: 540rpx;
          top: 20rpx;
          -webkit-animation: myfirst 8s linear infinite;
        }

        .txt_second {
          width: 520rpx;
          top: 100rpx;
          -webkit-animation: myfirst 4s linear infinite;
        }

        .txt_third {
          width: 320rpx;
          top: 180rpx;
          -webkit-animation: myfirst 12s linear infinite;
        }

        @keyframes myfirst {
          0% {
            right: -560rpx;
            opacity: 1;
          }



          100% {
            right: 700rpx;
            opacity: 1;
          }
        }
      }
    }

    .comm {
      width: 710rpx;

      padding-top: 20rpx;
      padding-bottom: 20rpx;
      background: #fff;
      border-radius: 14rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;

      .common_top {
        width: 670rpx;

        margin-left: 20rpx;
        height: 60rpx;
        line-height: 60rpx;
        font-size: 24rpx;
        color: #666;
        position: relative;

        .common_top_left {
          position: absolute;
          left: 0;
        }

        .common_top_right {
          position: absolute;
          right: 0;
          color: @bg;
        }
      }

      .common_cent {
        width: 670rpx;
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        margin-left: 20rpx;
        border-top: 2rpx solid #eee;

        .common_cent_list {
          width: 670rpx;
          height: 60rpx;
          margin-top: 20rpx;
          margin-bottom: 20rpx;
          display: -webkit-flex;
          -webkit-justify-content: space-between;

          .cent_list {
            width: 200rpx;
            height: 60rpx;
            text-align: center;
            line-height: 60rpx;
            color: #00cc99;
            font-size: 20rpx;
            background: #f7f7f7;
            border-radius: 30rpx;
          }

        }
      }

      .comm_bot {
        width: 670rpx;
        margin-left: 20rpx;

        .comm_bot_list {
          padding-top: 40rpx;
          padding-bottom: 40rpx;
          border-top: 2rpx solid #eee;

          .list_top {
            width: 670rpx;
            height: 80rpx;
            position: relative;

            .headimg {
              width: 80rpx;
              height: 80rpx;
              border-radius: 40rpx;
              position: absolute;
              top: 0;
              left: 0;

              image {
                width: 80rpx;
                height: 80rpx;
              }
            }

            .usname {
              font-size: 24rpx;
              color: #999;
              position: absolute;
              top: 2rpx;
              left: 110rpx;
            }

            .time {
              font-size: 20rpx;
              color: #999;
              position: absolute;
              top: 48rpx;
              left: 110rpx;
            }

            .res {
              color: @bg;
              font-size: 24rpx;
              position: absolute;
              top: 2rpx;
              right: 0;
            }
          }

          .list_cent {
            margin-top: 20rpx;
            font-size: 24rpx;
            color: #999;
            text-align: justify;
          }

          .list_bot {
            width: 670rpx;
            height: 140rpx;
            display: -webkit-flex;
            -webkit-justify-content: space-between;
            padding-bottom: 20rpx;

            .img {
              width: 140rpx;
              height: 140rpx;
              margin-top: 20rpx;
              border: 2rpx solid #eee;

              image {
                width: 140rpx;
                height: 140rpx;
              }
            }
          }
        }

        .tips {
          width: 100%;
          text-align: center;
          line-height: 60rpx;
          color: @bg;
          font-size: 24rpx;
        }
      }
    }

    .line {
      width: 100%;
      height: 240rpx;
    }

    .footer {
      width: 100%;
      height: 220rpx;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 999;
      border-top-left-radius: 14rpx;
      border-top-right-radius: 14rpx;

      .footer_tit {
        line-height: 48rpx;
        color: #999;
        font-size: 28rpx;
        position: absolute;
        top: 36rpx;
        left: 20rpx;
      }

      .footer_left {
        width: 226rpx;
        height: 48rpx;
        position: absolute;
        top: 36rpx;
        left: 240rpx;

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

      .person {
        width: 120rpx;
        height: 120rpx;
        border: 4rpx solid #fff;
        background: @ye;
        border-radius: 64rpx;
        position: absolute;
        top: -60rpx;
        right: 60rpx;

        .plist {
          line-height: 40rpx;
          font-size: 28rpx;
          color: #fff;
          position: absolute;
          top: 20rpx;
          width: 120rpx;
          text-align: center;
          letter-spacing: 2rpx;
        }

        .plist_last {
          top: 60rpx;
        }
      }

      .btns {
        width: 750rpx;
        height: 80rpx;
        position: absolute;
        top: 120rpx;

        .btn {
          width: 280rpx;
          height: 80rpx;
          text-align: center;
          line-height: 80rpx;
          background: @ye;
          color: #fff;
          border-radius: 40rpx;
          position: absolute;
          left: 40rpx;
          font-size: 28rpx;
        }

        .btn_money {
          width: 360rpx;
          position: absolute;
          left: 350rpx;
          background: @bg;
        }
      }

    }

    /*模态框*/
    .modals{position:fixed; z-index: 99999; top:0; left: 0; right:0; bottom: 0;}
    .modals-cancel{position:absolute; z-index:1000; top:0; left: 0; right:0; bottom: 0; background-color: rgba(0,0,0,.5);}
    .bottom-dialog-body{position:absolute; z-index:10001; bottom:0; left:0; right:0;  height:960rpx; background-color: #f4f5fa;}
    /*动画前初始位置*/
    .bottom-pos{-webkit-transform:translateY(100%);transform:translateY(100%);}
    .bottom-pos{

      .dcont {
        width: 710rpx;
        .dcont_top{
          width:710rpx;
          height:80rpx;
          position: relative;
          .dcont_top_left{
            line-height: 80rpx;
            color:@bg;
            position: absolute;
            top:0;
            left:20rpx;
          }
          .dcont_top_right{
            width:32rpx;
            height:32rpx;
            position: absolute;
            top:24rpx;
            right:0;
            image{
              width:32rpx;
              height:32rpx;
            }
          }
        }
        .dcont_tit{
          width:260rpx;
          height:48rpx;
          text-align: center;
          line-height: 48rpx;
          color:#fff;
          margin:0 auto;
          border-radius:24rpx;
          background: @bg;
          margin-top:30rpx;
          margin-bottom:40rpx;
          font-size:24rpx;
        }
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

      .dnav{
        width:100%;
        height:96rpx;
        position: relative;
        .dnav_cont{
          width:710rpx;
          height:40rpx;
          line-height: 40rpx;
          margin-left:20rpx;
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
             right:0rpx;
          }
        }
      }
    }

  }
</style>
<template>


  <view class="box">
    <view class="modals modals-bottom-dialog" hidden="{{hideModal}}">
      <view class="modals-cancel" @tap="hideModal"></view>
      <view class="bottom-dialog-body bottom-pos" animation="{{animationData}}">
        <view class="dcont">
          <view class="dcont_top">
            <view class="dcont_top_left">您的收货地址(购买2箱)</view>
            <view class="dcont_top_right" @tap="hideModal"><image src="https://caokela.oss-cn-beijing.aliyuncs.com/close.png"></image></view>
          </view>
          <view class="dcont_tit">填写新的地址</view>
          <view class="clist">
            <view class="top">
              <view class="top_left">
                手机号码：
              </view>
              <view class="top_center">
                <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;"
                  type="number" placeholder-style="color: #666; font-size: 24rpx" placeholder="请输入手机号" />
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
                <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;"
                  type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="收货人姓名" />
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
                <input style="position: absolute;left:180rpx;top:-2rpx;width:300rpx;height:40rpx;border:none;line-height: 40rpx;font-size:24rpx;color:#666;"
                  type="text" placeholder-style="color: #666; font-size: 24rpx" placeholder="如门牌号码、小区名称等" />
              </view>
            </view>
          </view>


        </view>



        <view class="box_pay">
          <button class="weui-btn green-btn" type="primary">保存地址</button>
        </view>
      </view>
    </view>
    <view class="header">
      <text class="bold" wx:if="{{goodsinfo.promotion_desc.length == 0}}">[产地直供、品质保证]</text><text wx:if="{{goodsinfo.promotion_desc.length == 0}}">所有商品均从陕西省洛川县产地发出</text>
      <text wx:if="{{goodsinfo.promotion_desc.length>0}}"> {{goodsinfo.promotion_desc}} </text>
    </view>

    <view class="cont">
      <view class="container">
        <view class="container_top">
          <view class="container_top_left">
            <image class="bg" src="{{goodsinfo.list_pic_url}}"></image>
          </view>
          <view class="container_top_right">
            <view class="tit">
              {{goodsinfo.showName}}
            </view>
            <view class="price" wx:if="{{userInfo.isFirst == 0}}">
              <text>尝鲜价</text>：{{goodsinfo.firstPrice}}元/箱（<text class="del">{{goodsinfo.market_price}}</text>）
            </view>

            <view class="price" wx:if="{{userInfo.isFirst > 0}}">
               <text>零售价</text>：{{goodsinfo.retail_price}}元/箱（<text class="del">{{goodsinfo.market_price}}</text>）
            </view>


            <view class="tips" wx:if="{{userInfo.isFirst == 0}}">
              您是新顾客，首单可以享受此优惠
            </view>
            <view class="sale">
              今日已售：{{goodsinfo.sell_volume}}箱
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
            <view class="btn" @tap="showModal">微信支付 {{showmoney}}元</view>
          </view>
        </view>
      </view>

    </view>

    <view class="joinus">
      <view class="joined">苹果年会员（已有<text class="joined_num">1896</text>人加入会员）</view>
      <view class="joined_des">按年订购，省心划算，每月都能收到好苹果</view>
      <view class="joined_btn" @tap="toMember">加入会员</view>
    </view>

    <view class="nav">
      <view class="list {{ checked == 1 ? 'list_check' : '' }}" @tap="checkdetail">
        <view class="icon"></view>
        <view class="nav_tit">商品详情</view>
      </view>
      <view class="list {{ checked == 2 ? 'list_check' : '' }}" @tap="checkcommon">
        <view class="icon"></view>
        <view class="nav_tit">评论（3000+）</view>
      </view>
      <view class="list" @tap="toMore">
        <view class="icon"></view>
        <view class="nav_tit">更多商品</view>
      </view>
    </view>

    <view class="detail" wx:if="{{checked == 1}}">
      <image class="detail_bg" mode="widthFix" src="https://caokela.oss-cn-beijing.aliyuncs.com/WechatIMG5.jpeg"></image>
      <image class="detail_bg" mode="widthFix" src="https://caokela.oss-cn-beijing.aliyuncs.com/WechatIMG6.png"></image>
      <image class="detail_bg" mode="widthFix" src="https://caokela.oss-cn-beijing.aliyuncs.com/WechatIMG7.jpeg"></image>
      <image class="detail_bg" mode="widthFix" src="https://caokela.oss-cn-beijing.aliyuncs.com/WechatIMG8.png"></image>
      <image class="detail_bg" mode="widthFix" src="https://caokela.oss-cn-beijing.aliyuncs.com/WechatIMG9.png"></image>
      <view class="barrage">
        <view class="txt txt_first">好新鲜，迫不及待的尝了一个，水分很足，口感很脆...</view>
        <view class="txt txt_green txt_second">口感特别，好脆，质量非常好，无坏果，物流很快</view>
        <view class="txt txt_green txt_third">味道不错，很甜，很脆超满意</view>
      </view>
    </view>

    <view class="comm" wx:if="{{checked == 2}}">
      <view class="common_top">
        <view class="common_top_left">全部评价：1566条</view>
        <view class="common_top_right">好评度：99%</view>
      </view>
      <view class="common_cent">
        <view class="common_cent_list">
          <view class="cent_list">
            口感极佳（118）
          </view>
          <view class="cent_list">
            味道一流（118）
          </view>
          <view class="cent_list">
            新鲜十足（118）
          </view>
        </view>
        <view class="common_cent_list">
          <view class="cent_list">
            色泽俱佳（118）
          </view>
          <view class="cent_list">
            营养丰富（118）
          </view>
          <view class="cent_list">
            颜色粉嫩（118）
          </view>
        </view>
      </view>

      <view class="comm_bot">
        <view class="comm_bot_list">
          <view class="list_top">
            <view class="headimg">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130006825.jpg"></image>
            </view>
            <view class="usname">
              放*****星
            </view>
            <view class="time">
              5分钟前
            </view>
            <view class="res">
              好评
            </view>
          </view>
          <view class="list_cent">
            味道不错，第一次买陕西洛川苹果，以前吃的好苹果都是阿克苏冰糖心，这次买的苹果不比冰糖心差，脆甜水水的，大小均匀。没有坏果感觉刚从冰窖出来的！买了两箱。五星好评
          </view>

        </view>
        <view class="comm_bot_list">
          <view class="list_top">
            <view class="headimg">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130006825.jpg"></image>
            </view>
            <view class="usname">
              你*****天
            </view>
            <view class="time">
              5分钟前
            </view>
            <view class="res">
              好评
            </view>
          </view>
          <view class="list_cent">
            非常好吃，新鲜的就是不一样，三年的老客户了 自从吃了洛川苹果再也不想吃烟台和阿克苏的了 ，今天小小做个总结吧，本人一直是个苹果迷，之前一直选择的是烟台和阿克苏的，这三个地方的苹果较全国而言是比较有名气的
            烟台的苹果水分较大 ，味道有点寡淡 苹果味整体来说不浓，后来百度了据说是因为靠海近 降水量过大的原因 阿克苏的苹果很甜 冰糖心也不是每个都有的只是个别，这个苹果适合喜欢特别甜的人吃，水分过少
            果肉有干，洛川的苹果相对于其他地方的来说很脆 口味是属于酸甜的 很适口，一咬能溅汁的那种，特别满意这个脆度和甜度 ，加上这个商家很诚信每次的苹果品质都能一直保持
            所以也就是他们家的老客户了，希望商家一直能这么诚信，给你们介绍了很多朋友了，不要让我失望，品质是一个商家能持续做好的原因，信任你们
          </view>
          <view class="list_bot">
            <view class="img">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130635000.jpg"></image>
            </view>
            <view class="img">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130635000.jpg"></image>
            </view>
            <view class="img">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130635000.jpg"></image>
            </view>
            <view class="img">
              <image src="https://caokela.oss-cn-beijing.aliyuncs.com/1575130635000.jpg"></image>
            </view>
          </view>
        </view>

        <view class="tips">点击加载更多评论</view>



      </view>

    </view>

    <view class="line"></view>

    <view class="footer" wx:if="{{isShowfooter}}">
      <view class="footer_tit">本次购买数量：</view>
      <view class="footer_left">
        <view class="less" @tap="less">
          <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/less.png"></image>
        </view>
        <view class="num">{{num}}箱</view>
        <view class="plus" @tap="plus">
          <image class="bg" src="https://caokela.oss-cn-beijing.aliyuncs.com/plus.png"></image>
        </view>
      </view>
      <view class="person" @tap="toMine">
        <view class="plist">会员</view>
        <view class="plist plist_last">中心</view>
      </view>
      <view class="btns">
        <view class="btn" @tap="toMember">加入会员</view>
        <view class="btn btn_money">微信支付 {{money}}元</view>
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

  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: '家有鲜果',
      navigationBarBackgroundColor: '#FF3300',
      navigationBarTextStyle: 'white'
    }
    components = {

    }

    data = {
      goodsinfo:{

      },

      num: 1,
      money: 0,
      showmoney:0,
      number: 0,
      isShowfooter: false,
      checked: 1,
      hideModal: true, //模态框的状态  true-隐藏  false-显示
      animationData: {}, //
      region: ['陕西省', '西安', '雁塔区'],
      customItem: '全部',
      phoneInfo:{},
      userInfo:{}


    }

    computed = {

    }

    methods = {

      bindRegionChange: function(e) {
        const self = this
        self.region = e.detail.value
      },
      showModal() {
        var that = this;



        that.hideModal = false
        var animation = wx.createAnimation({
          duration: 400, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
          timingFunction: 'ease', //动画的效果 默认值是linear
        })
        this.animation = animation
        setTimeout(function() {

          that.fadeIn(); //调用显示动画
        }, 200)
      },

      // 隐藏遮罩层
      hideModal() {
        var that = this;
        var animation = wx.createAnimation({
          duration: 400, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
          timingFunction: 'ease', //动画的效果 默认值是linear
        })
        that.hideModal = true
        that.animation = animation

        setTimeout(function() {


          that.fadeDown(); //调用隐藏动画

        }, 200) //先执行下滑动画，再隐藏模块

      },
      toMine() {
        wepy.navigateTo({
          url: '/pages/mine'
        })
      },
      checkdetail() {
        const self = this
        self.checked = 1
      },
      checkcommon() {
        const self = this
        self.checked = 2
      },
      toMember() {
        wepy.navigateTo({
          url: '/pages/member'
        })
      },
      toMore() {
        wepy.navigateTo({
          url: '/pages/more'
        })
      },
      less() {
        const self = this
        if (self.num > 1) {
          self.num = self.num - 1
        } else {
          self.num = 1
        }
        self.showmoney = self.money * self.num
      },
      plus() {
        const self = this
        self.num = self.num + 1
        self.showmoney = self.money * self.num
      }
    }

    events = {

    }



    async onShow() {
      const self = this

      await self.getPhoneType()

      await auth.login(self.phoneInfo)

      self.userInfo = wepy.getStorageSync('userInfo_s').userVo



      await self.getGoods()




      self.$apply()


    }




    // 获取商品信息
    async getGoods(){
      const self = this
      let data = {

      }

      try {
      	let dataInfo = await http({
      		method: api.goods.list.method,
      		url: api.goods.list.url,
      		data: data
      	})



      	if(dataInfo.data.errno == 0) {

          self.goodsinfo.list_pic_url = dataInfo.data.data.newGoodsList[0].list_pic_url
          self.goodsinfo.promotion_desc = dataInfo.data.data.newGoodsList[0].promotion_desc

          self.goodsinfo.showName = dataInfo.data.data.newGoodsList[0].showName

          self.goodsinfo.firstPrice = dataInfo.data.data.newGoodsList[0].firstPrice

          self.goodsinfo.retail_price = dataInfo.data.data.newGoodsList[0].retail_price

          self.goodsinfo.sell_volume = dataInfo.data.data.newGoodsList[0].sell_volume

          self.goodsinfo.market_price = dataInfo.data.data.newGoodsList[0].market_price

          if(self.userInfo.isFirst == 0){
            self.money = self.goodsinfo.firstPrice
            self.showmoney = self.goodsinfo.firstPrice * self.num
          }else{
            self.money = self.goodsinfo.retail_price
            self.showmoney = self.goodsinfo.firstPrice* self.num
          }





          self.$apply()

      	}

      } catch(e) {
      	console.log(e)
      }

    }





    // 获取手机型号
    async getPhoneType() {
    	const self = this
    	try {
    		const res = wx.getSystemInfoSync()

    		self.phoneInfo.phoneType = res.brand //手机品牌
    		self.phoneInfo.phoneModel = res.model //设备型号
    		self.phoneInfo.phoneVersion = res.version //微信版本号
    		self.phoneInfo.phoneSystem = res.system //操作系统及版本
    		self.phoneInfo.phoneSDKVersion = res.SDKVersion //客户端基础库版本

    	} catch(e) {
    		console.log(e)
    	}

    }

    //动画集
    fadeIn() {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
      })
    }

    fadeDown() {
      this.animation.translateY(960).step()
      this.setData({
        animationData: this.animation.export(),
      })
    }


    onPageScroll(e) {
      const self = this
      console.log('1111')
      console.log(self.hideModal)
      if (e.scrollTop > 245) {
        self.isShowfooter = true
      } else {
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
