<script setup lang="ts"></script>

<template>
  <div class="layout-page">
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- 这里的route路由配合 to切换路由 -->
    <van-tabbar route>
      <!-- 路由名字 -->
      <van-tabbar-item to="/home">
        首页
        <template #icon>
          <img src="../../icons/shouye.svg" alt="" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/menu">
        目录
        <template #icon>
          <img src="../../icons/mulu.svg" alt="" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/message">
        消息
        <template #icon>
          <img src="../../icons/xiaoxi.svg" alt="" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        我的
        <template #icon>
          <img src="../../icons/wode.svg" alt="" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="scss">
.layout-page {
  & > div:first-child {
    height: 100%;
    width: 100%;
    padding-bottom: 80px;
  }
  :deep() {
    .van-tabbar {
      width: 100%;
      height: 70px;
      box-shadow: 0 -1px 5px #e5e9ee;

      .van-tabbar-item {
        font-size: 16px;
        img {
          width: 28px;
          height: 30px;
        }
      }
    }
  }
}
</style>
