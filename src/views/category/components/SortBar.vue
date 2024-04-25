<template>
  <div class="goods-out-container">
    <div class="filter-box">
      <div
        class="item"
        v-for="(option, index) in options"
        :key="index"
        @click="toggleMenu(index)"
        :class="{ active: optionActive === index }"
      >
        {{ option.name }}
        <van-icon :name="'arrow-' + option.sort" />
      </div>
    </div>
    <div class="scroll-out-box" v-if="props.showTag">
      <div class="kind-item">全部</div>
      <div class="kind-item">自动充值</div>
      <div class="kind-item">卡密兑换</div>
      <div class="kind-item">腾讯视频vip</div>
      <div class="kind-item">腾讯视频Svip</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
//滚动框传值控制是否使用
const props = defineProps<{
  showTag?: boolean;
}>();
const options = ref([
  { name: "默认", sort: "down" },
  { name: "新品排序", sort: "down" },
  { name: "价格排序", sort: "down" },
  { name: "销量排序", sort: "down" },
]);

const optionActive = ref(0);

const toggleMenu = (index: number) => {
  const option = options.value[index];

  // 切换选中项目的 index
  optionActive.value = index;

  // 设置选中项目的排序规则
  if (option.sort == "down") option.sort = "up";
  else option.sort = "down";
};
</script>

<style lang="scss" scoped>
.goods-out-container {
  border-radius: 0.2rem 0.2rem 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.65rem 0.625rem;
  background-color: #ffffff;
  gap: 0.625rem;

  .filter-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      font-size: 0.85rem;
      color: #9b9fa8;
      cursor: pointer; // 添加鼠标指针变化，增强用户体验
    }
    & > .active {
      color: red; // 当筛选项激活时变为红色
    }
  }
  .scroll-out-box {
    display: flex;
    gap: 0.625rem;
    width: 100%; /* 容器宽度，根据需要调整 */
    overflow-x: auto; /* 水平滚动 */

    white-space: nowrap;

    // 隐藏滚动条
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .kind-item {
      padding: 0.3125rem 0.625rem;
      background-color: #9b9fa8;
      border-radius: 0.625rem;
      color: #fff;
      font-size: 0.875rem;
    }
  }
}
</style>
