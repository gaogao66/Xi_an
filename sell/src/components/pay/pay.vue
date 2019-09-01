<template>
    <transition name="gotoPay">
      <div class="pay" v-show="fold">
          <div class="pay-list">
            <div class="list-header">
              <div class="back" @click="hide">
                <i class="icon-arrow_lift"></i>
                <span>确认订单</span>
              </div>
              <div class="main">
                <div class="send">
                  <div class="sendArea">
                    <span>订单配送至</span>
                    <span>选择收货地址<i class="icon-keyboard_arrow_right"></i></span>
                  </div>
                  <div class="sendMessage">
                    <div class="sendTime">
                      <span>送达时间</span>
                      <span>尽快送达（13：10送达）<i class="icon-keyboard_arrow_right"></i></span>
                    </div>
                    <div class="payType">
                      <span>支付方式</span>
                      <span>在线支付</span>
                    </div>
                  </div>
                </div>
                <div class="list-content" ref="listContent">
                  <div class="mainContent">
                    <div class="sellHeader">
                      <span class="title">咖啡的美味世界</span>
                    </div>
                    <ul>
                      <li class="foods sellItem" v-for="(food,index) in foods" :key="index">
                        <div class="icon">
                          <img width="30px" height="30px" :src="food.icon">
                        </div>
                        <div class="content">
                          <div class="txt">
                            <p class="name">{{food.name}}</p>
                            <p class="desc" v-if="food.description">{{food.description}}</p>
                          </div>
                          <span class="count">x{{food.count}}</span>
                          <div class="price">
                            <span class="new">￥{{food.price}}</span>
                            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="box sellItem">
                      <span class="bag">包装</span>
                      <span>餐盒</span>
                      <span>￥2</span>
                    </div>
                    <div class="sendCount sellItem">
                      <span class="bag">商家</span>
                      <span>配送费</span>
                      <span>￥0.6</span>
                    </div>
                    <div class="remind sellItem">
                      <span>满减活动与折扣商品不同享</span>
                      <div class="clear"></div>
                    </div>
                    <div class="redbag sellItem">
                      <span>红包</span>
                      <span class="red">选择地址后使用红包</span>
                    </div>
                    <div class="lastRemind sellItem">
                      <span>优惠说明</span>
                      <span>小计￥</span>
                      <span>{{totalPrice}}</span>
                    </div>
              </div>
                </div>
              </div>
              <div class="sure">
                <button type="submit" id="sub" @click="submitlist">支付</button>
                <button type="button" id="certain" @click="recieve">接收</button>
              </div>
            </div>
            </div>
      </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import split from '../../components/split/split';
const ERR_OK = 0;
export default {
  props: {
    foods: {
      type: Array,
      default() {
        return [];
      }
    },
    totalPrice: {
      type: Number
    }
  },
  data () {
    return {
      fold: false
    };
  },
  computed: {
  },
  methods: {
    show () {
      this.fold = true;
      let show = this.fold;
      console.log(this.foods);
      if (show) { // true为展示状态
        this.$nextTick(() => {
          if (!this.scroll) { // 没有scroll的时候才需要new，否则只需要刷新一下即可
            // eslint-disable-next-line
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    },
    hide () {
      this.fold = false;
    },
    submitlist() {
      window.alert(`支付${this.totalPrice}元`);
      // this.$http.post('/').then((response) => {
      //   response = response.body;
      //   if (response.errno === ERR_OK) {
      //     window.alert('订单发送成功');
      //   }
      // });
    },
    recieve() {
      console.log('recieve');
    }
  },
  components: {
    split
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .pay
    position: fixed
    top: 0
    left: 0
    botttom: 48px
    z-index: 30
    width: 100%
    height: 100%
    background: #fff
    .list-header
      position: fixed
      top: 0
      left: 0
      width: 100%
      .back
        position: fixed
        top: 0
        left: 0
        width: 100%
        height:41px
        line-height:41px
        font-size:25px;
        i
          display inline-block
          margin-left:18px
          color:#1793f9
          font-size:13px
        span
          display:inline-block
          margin-left:16px
      .main
        position:relative
        top:41px;
        width:100%;
        height:100%
        background:-webkit-linear-gradient(left,#11abfa,#1487f9)
        .send
          width:100%
          height:150px
          .sendArea
            width:100%
            height:66px
            color:white
            span:nth-child(1)
              display:inline-block
              margin:14px 0 14px 18px
              font-size:12px
            span:nth-child(2)
              display:block
              margin-left:18px
              font-size:22px
          .sendMessage
            height:81px
            margin:14px 5px 5px 5px
            background:white
            font-size:12px
            .sendTime
              padding:15px 20px
              border-1px(rgba(7,17,27,0.1))
              span:nth-child(2)
                float:right
                color:#0d7df9
            .payType
              padding:15px 20px
              span:nth-child(2)
                float:right
                color:#0d7df9
        .list-content
          position:relative
          height:300px
          margin: 20px 5px 5px 5px
          background:white
          overflow:hidden
          .mainContent
            padding:15px 20px
            .sellHeader
              padding-bottom :15px
              font-size:20px
              border-1px(rgba(7,17,27,0.1))
            .sellItem
              padding:15px 0
              font-size:12px
              border-1px(rgba(7,17,27,0.1))
              &:last-child
                border-none()
               .bag
                display:inline-block
                width:27px
                heigth:11px
                line-height:11px
                font-size:10px
                background:#eff2f6
                text-align:center
                margin-right:12px
              & span
                font-size:12px
                &:last-child
                  float:right
              .red
                padding:2px
                color:white
                background:-webkit-linear-gradient(left,#f17e3b,#e05138)
            .foods
              display:flex
              align-items center
              &:last-child
                border-1px(rgba(7,17,27,0.1))
              .icon
                width:30px
                height:30px
                display:inline-block
                margin-right:12px
              .content
                flex:1
                width: 100%
                height:30px
                padding:0
                line-height:30px
                display:flex
                justify-content:space-between
                .txt
                  height:30px
                  .name
                    height:17px
                    font-size:14px
                    line-height:17px
                  .desc
                    height:13px
                    font-size:10px
                    line-height:13px
                & span
                  display:inline-block
                .price
                  float:right
            .remind
              color:#c4c4c3
              &.clear
                clear:both
      .sure
        width:100%
        height:100px
        font-size:25px
        margin:40px 5px -5px 0
        padding:15px 0 0 0
        display:-webkit-flex
        justify-content:space-around
        background:-webkit-linear-gradient(left,#11abfa,#1487f9)
        button
          width:30%
          height:40px
          background:-webkit-linear-gradient(left,#11abfa,#1487f9)
</style>
