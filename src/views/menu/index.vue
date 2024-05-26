<template>
  <div class="menu">
    <van-search placeholder="请输入搜索关键词" to="/productsearch" />
    <div class="sidebar">
      <van-sidebar v-model="active" ref="tabRef" @change="tabActiveChange">
        <van-sidebar-item
          :title="'标签名称' + index"
          v-for="index in 10"
          :key="index"
          @click="itemClickHandle(index - 1)"
          ref="tabItemRef"
        />
      </van-sidebar>
      <div class="content-box" ref="contextRef">
        <div
          class="title-box"
          v-for="index in 10"
          :key="index"
          ref="contextBoxItemRef"
        >
          <div class="title">腾讯会员{{ index }}</div>
          <div class="content">
            <div
              class="child"
              v-for="index in 6"
              :key="index"
              @click="toCategory"
            >
              <img src="../../icons/fuli.png" alt="" />
              <div class="child-text">福利封面</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const active = ref(0); // 当前激活的侧边栏项索引

const contextRef = ref(); // 右侧内容区的引用
const contextBoxItemRef = ref(); // 右侧内容项的引用集合

// 组件挂载后 添加滚动监听器的右侧内容区
onMounted(() => {
  if (contextRef.value) {
    contextRef.value.addEventListener("scroll", contextScrollHandle);
  }
  // console.log(contextRef.value);
  // console.log("scroll");
  // console.log(contextScrollHandle);
});

// 右侧内容区滚动时的处理函数
const contextScrollHandle = () => {
  // 获取内容盒子 滚动条顶部位置
  let scrollTop = contextRef.value.scrollTop;

  // 获取内容盒子项目列表
  let items = contextBoxItemRef.value;
  if (items.length == 0) return;

  // 设置顶部元素占用高度为零
  let topHeight = 0;

  // 设置顶部元素占用高度
  if (topHeight == 0) topHeight = items[0].offsetTop;

  // 处理点击事件来回切换的bug
  if (isClick.value) {
    if (scrollTop == items[active.value].offsetTop - topHeight) {
      isClick.value = false;
    }
    return;
  }

  for (let i = 0; i < items.length; i++) {
    // 计算滚动条是否在当前元素位置
    // 由于 滚动条不管在哪 他top都是为0
    // 所以我们需要将每个元素的距离顶部高度的值 减去顶部元素占用的高度值
    // 然后 用滚动条距离顶部的位置 去对比元素距离顶部高度值
    // 元素顶部位置 小于滚动条 就代表着滚动条滚到了元素位置
    if (items[i].offsetTop - topHeight <= scrollTop) {
      // TODO 选中定位的item
      active.value = i;
      tabActiveChange();
    }
  }
};

const isClick = ref(false); // 标记是否通过点击侧边栏项引起的滚动

// 处理点击侧边栏项的函数
const itemClickHandle = (index) => {
  // 获取内容盒子项目列表
  let items = contextBoxItemRef.value;
  // 获取第一个值距离顶部的高度 得出滚动条0的位置 及顶部占用高度
  let topHeight = items[0].offsetTop;

  // 组件项目点击之后 会选中当前你点击的项目 所以只需要滚动到 点击位置的内容盒子高度就行
  contextRef.value.scrollTo({
    top: items[index].offsetTop - topHeight,
    behavior: "smooth",
  });

  isClick.value = true;
};

const tabRef = ref(); // 侧边栏的引用
const tabItemRef = ref(); // 侧边栏项的引用集合

// 根据当前激活的侧边栏项，调整侧边栏滚动位置使其可见
const tabActiveChange = () => {
  const tabEl = tabRef.value.$el;
  const index = active.value;

  // 选中项item
  const item = tabItemRef.value[index].$el;
  // 选中项距离顶部高度
  const itemTop = item.offsetTop;

  // 设置tab滚动条高度为 item距离顶部的高度 减去 tab可见高度的一半
  tabEl.scrollTop = item.offsetTop - tabEl.clientHeight / 2;
};

// //scrollTop从0开始增大，局限在#goodListId div内
// let scrollTop = document.querySelector("#goodListId").scrollTop;
// for (let a = 0; a < state.menuList.length; a++) {
//   //offsetTop获取每块scroll的距离屏幕最顶端的值
//   //本menuList中9组元素的offsetTop固定值介于[179,1879]
//   //故offsetTop-170（店铺头部高度约140，增30余量）得到距离#goodListId最顶端的高度
//   //循环比较当scrollTop一旦大于某scroll的offsetTop-170，则切换左侧菜单选中index
//   if (document.querySelector("#scroll" + a).offsetTop - 170 < scrollTop) {
//     tabValue.value = a;
//   }
// }
import router from "@/router";
const toCategory = () => {
  router.push("/category");
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  // height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  :deep() {
    .van-search__content {
      border-radius: 1.0625rem;
      background: #f0f3f7;
    }
    .sidebar {
      flex: 1;
      display: flex;
      flex-direction: row;
      width: 100%;
      // height: 100%;
      margin-top: 8px;
      gap: 0.4375rem;

      overflow-y: scroll;
      .van-sidebar {
        width: 5rem;
        height: 100%;
        .van-sidebar-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3.4375rem;
          background-color: #ffffff;
          padding: 0;
        }
      }
      .content-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;

        .title {
          height: 2.5625rem;
          font-weight: 500;
          font-size: 0.875rem;
          color: #1e2331;
          display: flex;
          align-items: center;
        }
        .content {
          width: 18rem;
          min-height: 4.6875rem;
          background-color: #ffff;
          display: grid;
          grid-template-columns: repeat(3, 5.9375rem);
          border-radius: 0.625rem 0 0 0.625rem;

          .child {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.34375rem;
            padding: 0.78125rem 0;

            img {
              width: 2.625rem;
              height: 2.625rem;
              border-radius: 50%;
            }

            .child-text {
              color: #9b9fa8;
              font-size: 0.75rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
