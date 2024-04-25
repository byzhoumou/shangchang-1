<template>
  <div class="category">
    <div class="header">
      <div class="header-text" @click="menuBtnClick">
        <div class="header-text-item">红包封面</div>
        <van-icon :name="showMenu ? 'arrow-up' : 'arrow-down'" />
      </div>
      <van-search placeholder="请输入你想要的上商品" to="/productsearch" />
      <img
        :src="buttons ? imagePathOn : imagePathOff"
        alt=""
        @click="onButtonClick"
        class="button-image"
      />
    </div>
    <div class="two-box">
      <template v-for="(item, index) in items" :key="index">
        <div
          class="two-box-item"
          :class="{ active: activeIndex === index }"
          @click="setActive(index)"
          v-if="index < showMenuLength"
        >
          <img
            :class="{ 'active-border': activeIndex === index }"
            src="@/icons/fuli.png"
            alt=""
          />
          <span :class="{ 'active-text': activeIndex === index }">{{
            item.name
          }}</span>
        </div>
      </template>
      <div class="two-box-item" v-if="showMoreButton" @click="loadMoreItems">
        <img src="@/icons/fuli.png" alt="" />
        <span>查看更多</span>
      </div>
    </div>
    <div class="padding-box">
      <!-- 排序组件  根据是否传shut值判断是否显示-->
      <sort-bar :showTag="true" />
      <product-card v-if="showProductCard" />
      <Card v-else />
    </div>
    <div class="menu" v-if="showMenu" @click="menuBtnClick">
      <div class="menu-panel" @click.stop="() => {}">
        <div
          class="menu-panel-item"
          v-for="i in 9"
          :key="i"
          :class="{ active: selectedItem === i }"
          @click="menuHandle(i)"
        >
          红包封面
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBar from "./components/SortBar.vue";
import ProductCard from "./components/ProductCard.vue";
import Card from "./components/Card.vue";
defineOptions({
  name: "CategoryIndex",
});

// 控制菜单的显示状态，用于展开或收起菜单
const showMenu = ref(false);

//  红包封面菜单按钮点击事件，切换菜单的显示状态
const menuBtnClick = () => {
  showMenu.value = !showMenu.value;
};

// 控制图片按钮的切换状态，用于切换显示的图标
const buttons = ref(false);
// 控制是否显示产品卡片或另一组件
const showProductCard = ref(true); // 控制产品卡片和Card组件的显示
const imagePathOn = "https://www.qqkami.com/umobile/static/list-icon.svg";
const imagePathOff = "	https://www.qqkami.com/umobile/static/grid-icon.svg";

// 图片按钮点击事件，切换显示的产品卡片或Card组件
const onButtonClick = () => {
  buttons.value = !buttons.value;
  showProductCard.value = !showProductCard.value; // 切换显示
};

// 福利封面激活的列表项索引，用于跟踪当前激活的列表项
const activeIndex = ref(0);

//  福利封面显示的菜单长度，控制初始状态下显示的列表项数量
const showMenuLength = ref(4);

//初始数据
const items = ref<any>([
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
  { name: "福利封面", icon: "@/icons/fuli.png" },
]);

// 设置激活的列表项
const setActive = (index: any) => {
  if (index < 4) {
    activeIndex.value = index;
    return;
  }

  // 如果点击的是第五个以上的项，则进行位置交换，以更改显示的数据顺序
  const record = items.value[activeIndex.value];
  items.value[activeIndex.value] = items.value[index];
  // 更换位置
  items.value[index] = record;
  // 重置显示菜单长度为4，恢复初始状态
  showMenuLength.value = 4;
  // 重新显示查看更多按钮
  showMoreButton.value = true;
};

// 控制查看更多按钮的显示状态
const showMoreButton = ref(true);

// 加载更多数据的函数，用于展示所有数据并隐藏查看更多按钮
const loadMoreItems = () => {
  // 显示列表所有内容
  showMenuLength.value = items.value.length;
  // 隐藏查看更多按钮
  showMoreButton.value = false;
};

// 下拉菜单点击
const selectedItem = ref(0);
const menuHandle = (i: any) => {
  console.log(`Menu item ${i} clicked`); // 输出点击信息，确保函数被调用
  selectedItem.value = i;
  console.log(`Selected item set to ${selectedItem.value}`);
};
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f6fc;
  .menu {
    position: absolute;
    top: 3.37rem;

    width: 100vw;
    height: calc(100vh - 0.3rem);
    background: rgba(0, 0, 0, 0.3);

    .menu-panel {
      display: grid; /* 使用CSS网格布局 */
      /* 创建三列，每列的宽度根据内容自动调整 */
      grid-template-columns: repeat(3, auto);
      align-content: start; /* 网格内容在容器的垂直方向上对齐到起点位置 */
      justify-content: center; /* 网格内容在容器的水平方向上居中对齐 */
      gap: 0.9375rem; /* 设置网格行和列之间的间隙大小 */
      padding: 0.9375rem 0; /* 设置容器在垂直方向上的内边距 */
      background-color: #fff; /* 设置容器的背景颜色为白色 */
      border-radius: 0 0 0.625rem 0.625rem; /* 设置容器的底部左右两角的圆角 */
      .menu-panel-item {
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.03125rem;
        width: 6.5625rem;
        color: #9b9fa8;
        background: #f0f3f7;
        border-radius: 0.3125rem;
      }
      .menu-panel-item.active {
        background: rgba(252, 76, 32, 0.1);
        color: #fd613a;
      }
    }
  }
  .header {
    gap: 0.625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.625rem;
    height: 3.37rem;
    background-color: #ffffff;
    .header-text {
      // margin-right: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.375rem;

      .header-text-item {
        font-weight: 550;
        font-size: 0.9375rem;
        color: #1e2331;
      }
    }
    .van-search {
      width: 14.8rem;
      height: 2.125rem;
      border-radius: 1.0625rem;
      padding: 0 0.84375rem;
      color: #9b9fa8;

      background-color: #f0f3f7;
      :deep() {
        .van-search__content {
          background-color: #f0f3f7;
        }
      }
    }
    img {
      width: 19px;
      height: 20px;
    }
  }
  .two-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: 97px;
    padding: 0.65rem 0.65rem;
    background-color: blue;
    background-color: #ffffff;
    height: 100%;

    .two-box-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      gap: 0.3125rem;
      margin-bottom: 0.65rem;
      img {
        border-radius: 50%;
        width: 48px;
        height: 50px;
      }
      .active-border {
        border: 1px solid #fd4d20;
      }
      .active-text {
        color: #fd4d20;
      }
      span {
        max-width: 3.59375rem;
        color: #9b9fa8;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        font-size: 0.85rem;
      }
    }
  }
  .padding-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.65rem 0.65rem 0;
  }
}
</style>
