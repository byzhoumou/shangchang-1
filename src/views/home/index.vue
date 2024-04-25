<template>
  <div class="home">
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      to="/productsearch"
    >
      <template #right-icon>
        <van-button type="primary">搜索</van-button>
      </template>
    </van-search>
    <van-swipe class="home-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-image
      class="home-banner"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />

    <!-- 横向滚动卡片 -->
    <content-card></content-card>

    <div class="x-card" style="margin-top: 0.6rem" v-for="i in 6" :key="i">
      <div class="x-card-header">
        <div class="title">红包封面</div>
        <div class="more">查看更多>></div>
      </div>
      <div class="x-card-body">
        <div class="category">
          <div class="category-item" @click="toCategory">
            <div class="picture">
              <img src="" alt="" />
            </div>
            <div class="address">
              <span>福利封面</span>
              <p>立即购买>></p>
            </div>
          </div>
          <div class="category-item">商品封面</div>
          <div class="category-item">商品封面</div>
          <div class="category-item">商品封面</div>
          <div class="category-item">商品封面</div>
          <div class="category-item">商品封面</div>
        </div>
      </div>
    </div>
    <div class="qiandao"></div>
    <div class="follow-box" v-show="showFollowBox">
      <img
        src="https://imgcdn.99kami.com/FpcXiKNqDhnfgNZ0XVnDptiv8_UO"
        alt=""
      />
      <div class="bind-content">
        <div class="tips">送你会员福利大礼包！</div>
        <div class="title">关注商战网络公众号</div>
      </div>
      <van-button type="default">立即关注</van-button>
      <van-icon name="cross" @click="closeFollowBox" />
    </div>
  </div>
</template>

<script setup>
// defineOptions({
//   name: "HomeIndex",
// });
import ContentCard from "./components/ContentCard.vue";
import router from "@/router";

const toCategory = () => {
  router.push("/category");
};

// 控制关注框的显示状态
const showFollowBox = ref(true);
const closeFollowBox = () => {
  showFollowBox.value = false;
};
</script>

<style lang="scss" scoped>
// :deep() {
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 100% !important;
  .van-search {
    background-color: #4fc08d;
    .van-button {
      width: 57;
      height: 27px;
      padding: 0.15625rem 0.625rem;
      background: linear-gradient(90deg, #fe8754 0%, #fe5f4d 100%);
      border-radius: 1rem;
      color: #fff;
    }
  }
  .qiandao {
    width: 4.875rem; /* 设置元素宽度 */
    height: 4.5625rem; /* 设置元素高度 */
    position: fixed; /* 元素位置固定，不随滚动条滚动 */
    right: 20px; /* 元素相对于视口右侧的距离 */
    bottom: 170px; /* 元素相对于视口底部的距离 */
    background-size: cover; /* 背景图片覆盖整个元素，保证不留空白 */
    /* 应用名为 shake-2642a4e9 的动画，持续时间为 1 秒，无限次循环，动画速度开始快然后慢，交替反向执行 */
    animation: shake-2642a4e9 1s infinite ease-out alternate;
    transform-origin: bottom center; /* 变换的基点位于元素的底部中心 */
    background-image: url(https://www.qqkami.com/umobile/assets/btn_qiandao-e101a319.png); /* 设置元素的背景图片 */
  }

  @keyframes shake-2642a4e9 {
    0% {
      transform: rotate(-20deg); /* 动画开始时，元素向左旋转 20 度 */
    }
    20% {
      transform: rotate(20deg); /* 动画进度 20% 时，元素向右旋转 20 度 */
    }
    40% {
      transform: rotate(-20deg); /* 动画进度 40% 时，元素再次向左旋转 20 度 */
    }
    80% {
      transform: rotate(0); /* 动画进度 80% 时，元素回到初始位置 */
    }
    100% {
      transform: rotate(0); /* 动画结束时，元素保持在初始位置 */
    }
  }
  .follow-box {
    position: fixed;
    bottom: 4.6875rem;
    left: 50%;
    transform: translate(-50%);
    width: 22.3125rem;
    height: 2.8125rem;
    background: #ffffff;
    box-shadow: 0 0.0625rem 0.4375rem #dbdee4;
    border-radius: 1.71875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1.15625rem;
    img {
      width: 2.28125rem;
    }
    .bind-content {
      margin-left: 0.625rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 10rem;
      .tips {
        font-size: 0.625rem;
        font-weight: 400;
        color: #9b9fa8;
      }
      .title {
        font-size: 0.875rem;
        font-weight: 500;
        color: #191e2e;
        display: inline;
      }
    }

    .van-button {
      width: 5.8125rem;
      height: 1.9375rem;
      background: linear-gradient(270deg, #fe8c56 0%, #ff534c 100%);
      border-radius: 0.96875rem;
      font-weight: 500;
      color: #fff;
      margin-right: 3px;
    }
    .van-icon {
      font-size: 20px;
      color: #9b9fa8;
    }
  }
}

.home-swipe {
  height: 12rem;
  margin: 0.8rem;
  margin-bottom: 0;
  border-radius: 8px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 12rem;
    text-align: center;
    background-color: #39a9ed;
  }
}

.home-banner {
  box-sizing: border-box;
  width: calc(100% - 1.6rem);
  margin: 0.8rem;
  height: 7rem;
  & > img {
    border-radius: 8px;
  }
}

.x-card {
  border-radius: 0.625rem;
  padding: 0.6rem;
  background-color: #fff;
  width: 95%;
  display: flex;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .more {
      color: #9b9fa8;
    }
  }

  &-body {
    flex: 1;
  }

  .category {
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    padding-top: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.4375rem;

    flex-wrap: wrap;
    &-item {
      height: 71px;
      width: 30%;
      background: #ffffff;
      border-radius: 0.46875rem;
      box-shadow: 0 0.125rem 0.1875rem rgba(255, 128, 83, 0.14);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.40625rem;
      .picture {
        width: 41px;
        height: 41px;
        background-color: red;
        border-radius: 50%;
      }
      .address {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;

        span {
          font-weight: 550;
          color: #191e2e;
          font-size: 0.75rem;
        }
        p {
          font-weight: 400;
          color: #9b9fa8;
          font-size: 0.625rem;
        }
      }
    }
  }
}
// }
</style>
