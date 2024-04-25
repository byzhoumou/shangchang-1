<template>
  <div class="goods">
    <div class="goods-content" v-for="i in 10" :key="i">
      <div class="goods-item">
        <img
          src="https://imgcdn.99kami.com/FrVb3rT_5wAl4EYfE7p8plSUU8uu"
          alt=""
        />
        <div class="content">
          <div class="name">【卡密兑换】微信红包封面-福利封面『诸事顺利』</div>
          <div class="uid">商品编号：5457</div>
          <div class="fun">
            <div class="money-box">
              <div class="money">¥0.98</div>
              <div class="discount">¥5.00</div>
            </div>
            <van-button size="small">提取卡密</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.goods {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  .goods-content {
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    .goods-item {
      display: flex;
      flex-direction: row;
      gap: 0.625rem;

      img {
        width: 103px;
        height: 103px;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .name {
          color: #191e2e;
          font-weight: 400;
          font-size: 0.8125rem;
        }
        .uid {
          color: #191e2e;
          font-weight: 400;
          font-size: 0.8125rem;
        }
        .fun {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .money-box {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            .money {
              font-weight: 700;
              color: #f84d43;
              font-size: 23px;
            }
            .discount {
              font-weight: 400;
              color: #d2d5dd;
              font-size: 0.75rem;
              // 文字删除线
              text-decoration: line-through;
            }
          }

          .van-button {
            background: linear-gradient(90deg, #fe8a56 0%, #ff504b 100%);
            width: 4.0625rem;
            height: 1.5625rem;
            border-radius: 0.78125rem;
            :deep() {
              .van-button__text {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
