<template>
  <div class="x-card">
    <div class="x-card-header">
      <div class="title">今日上新</div>
      <div class="more">查看更多>></div>
    </div>
    <div class="x-card-body">
      <div class="x-scroll" ref="scrollContainer">
        <div class="x-scroll-item">
          <div class="picture">
            <img
              src="https://imgcdn.99kami.com/FrthWseEIb86sC537adI-aEFB9VT"
              alt=""
            />
          </div>
          <div class="name">爱奇艺</div>
          <div class="price">17.97</div>
        </div>
        <div class="x-scroll-item">2</div>
        <div class="x-scroll-item">3</div>
        <div class="x-scroll-item">4</div>
        <div class="x-scroll-item">5</div>
        <div class="x-scroll-item">6</div>
        <div class="x-scroll-item">7</div>
        <div class="x-scroll-item">8</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollContainer = ref(null);
const scrollVal = ref(1);

const autoScroll = () => {
  // 如果scrollContainer.value.scrollLeft的值是0，这意味着容器没有向右滚动，也就是说它处于最左端的位置。
  if (scrollContainer.value.scrollLeft === 0) {
    scrollVal.value = 1;
  }
  if (
    //表示滚动容器当前向右滚动的距离          滚动容器可视区域的宽度
    scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >=
    // 是滚动容器的总宽度，包括那部分你需要滚动才能看到的内容。
    scrollContainer.value.scrollWidth
  ) {
    scrollVal.value = -1;
  }

  scrollContainer.value.scrollLeft += scrollVal.value;
  setTimeout(autoScroll, 20);
};

onMounted(() => {
  autoScroll();
});
</script>

<style lang="scss" scoped>
.x-card {
  padding: 0.6rem;
  background-color: #fff;
  width: 100vw;
  // background-color: red;

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

  .x-scroll {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    height: 100%;

    // 隐藏滚动条
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    &-item {
      background-color: red;
      width: 91px;
      // width: 6rem;
      height: 8rem;
      flex-basis: 6rem;
      flex-shrink: 0;
    }

    .x-scroll-item + .x-scroll-item {
      margin-left: 0.6rem;
    }

    .x-scroll-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .picture {
        width: 95px;
        height: 95px;
        img {
          width: 95px;
          height: 95px;
          border-radius: 0.3125rem;

          border: 1px solid rgba(0, 0, 0, 0.08);
          // .
        }
      }
      .name {
        color: #9b9fa8;
        font-size: 0.6875rem;
        text-align: center;
      }
      .price {
        color: #f84d43;
        font-weight: 700;
        font-size: 1.1rem;
      }
    }
  }
}
</style>
