<template>
  <div class="goods">
    <div class="goods-item" v-for="i in 6" :key="i">
      <img
        src="https://imgcdn.99kami.com/FsP94pt8ovYLzoNWoFrf4ASEiEM3"
        alt=""
      />
      <div class="goods-name">
        【卡密兑换】微信红包封面-斑布猫『指谁谁发财』
      </div>
      <div class="goods-price">
        <div class="markit-price">¥100</div>
        <div class="price">3.24</div>
      </div>
      <div class="goods-info">
        <div class="info">卡密兑换</div>
        <div class="info-id">商品编号：4993</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 0.5625rem;
  justify-content: space-between;
  gap: 0.625rem 0;
  .goods-item {
    display: flex;
    height: 15.9rem;
    flex-direction: column;
    background-color: #fff;
    // max-width: 10.78125rem;
    max-width: 10.78125rem;

    border-radius: 0.625rem;
    gap: 0.3125rem;
    padding-bottom: 0.625rem;
    img {
      width: 10.78125rem;
      height: 10.78125rem;
      border-radius: 0.625rem 0.625rem 0 0;
    }
    .goods-name {
      padding: 0 0.625rem;
      width: 100%;
      box-sizing: border-box;
      color: #191e2e;
      font-weight: 600;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .goods-price {
      display: flex;
      flex-direction: row;
      padding: 0 0.625rem;
      align-items: center;
      justify-content: space-between;
      .markit-price {
        font-weight: 400;
        color: #d2d5dd;
        font-size: 0.6875rem;
        text-decoration: line-through;
      }
      .price {
        font-weight: 700;
        color: #f84d43;
        font-size: 1.125rem;
      }
    }
    .goods-info {
      display: flex;
      flex-direction: row;
      padding: 0 0.625rem;
      align-items: center;
      justify-content: space-between;
      .info {
        background-color: #0fc517;
        height: 0.9375rem;
        padding: 0 0.3125rem;
        border-radius: 0.15625rem;
        font-size: 0.5625rem;
        color: #fff;
      }
      .info-id {
        color: #9b9fa8;
        font-size: 0.65rem;
      }
    }
  }
}
</style>
