<template>
  <div class="search-page">
    <div class="search-box">
      <div class="search">
        <van-search placeholder="请输入搜索关键词" />
        <span @click="cancel">取消</span>
      </div>
    </div>
    <div class="search-history">
      <div class="search-history-item">
        <div class="search-history-box">搜索历史</div>
        <img src="../icons/icon_delete.svg" alt="" />
      </div>
      <div class="search-text">
        <div class="search-text-item">1</div>
        <div class="search-text-item">2</div>
        <div class="search-text-item">3</div>
      </div>
    </div>
    <div class="search-history">
      <div class="search-history-item">
        <div class="search-history-box">热门搜索</div>
      </div>
      <div class="search-text">
        <div class="search-text-item">
          <img src="../icons/icon_hot_search.svg" alt="" />
          1
        </div>
        <div class="search-text-item">2</div>
        <div class="search-text-item">3</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入路由
import { useRouter } from "vue-router";
const router = useRouter();

const cancel = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.search-page {
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .search-box {
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    .search {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 0.625rem;
      padding: 0 0.5625rem;
      gap: 0.625rem;
      :deep() {
        .van-search {
          width: 19.375rem;
          height: 2.125rem;
          padding: 0 0 0 0.9375rem;
          background: #f0f3f7;
          border-radius: 1.0625rem;
          .van-search__content {
            margin: 0 20px 0 0;
            background: #f0f3f7;
            .van-cell {
              background: #f0f3f7;
            }
          }
        }
      }

      span {
        color: #9b9fa8;
      }
    }
  }
  .search-history {
    margin-top: 0.625rem;
    display: flex;
    flex-direction: column;
    .search-history-item {
      padding: 0 0.53125rem;

      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .search-history-box {
        font-size: 0.9375rem;
        font-weight: 700;
        color: #1e2331;
      }
      img {
        margin-right: 1rem;
        width: 0.9375rem;
        height: 0.96875rem;
      }
    }
    .search-text {
      padding: 0 0.875rem;
      margin-top: 0.625rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 0.625rem;
      .search-text-item {
        color: #71747c;
        font-weight: 400;
        font-size: 0.8125rem;
        background: #f4f7fa;
        border-radius: 0.9375rem;
        padding: 0.375rem 0.875rem;
        & > img {
          width: 0.6875rem;
          height: 0.875rem;
        }
      }
    }
  }
}
</style>
