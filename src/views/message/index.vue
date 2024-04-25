<template>
  <div class="message">
    <div class="message-box">
      <div class="message-item">
        <div class="img-box">
          <img src="../../icons/icon_announcement.svg" alt="" />
        </div>
        <div class="notice-box">
          <span>平台消息通知</span>
          <p>这里是平台消息通知</p>
        </div>
      </div>
      <div class="message-item">
        <div class="img-box">
          <img src="../../icons/icon_announcement.svg" alt="" />
        </div>
        <div class="notice-box">
          <span>平台消息通知</span>
          <p>这里是平台消息通知</p>
        </div>
      </div>
      <div class="message-item">
        <div class="img-box">
          <img src="../../icons/icon_announcement.svg" alt="" />
        </div>
        <div class="notice-box">
          <span>平台消息通知</span>
          <p>这里是平台消息通知</p>
        </div>
      </div>
      <div class="message-item">
        <div class="img-box">
          <img src="../../icons/icon_announcement.svg" alt="" />
        </div>
        <div class="notice-box">
          <span>平台消息通知</span>
          <p>这里是平台消息通知</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "MessageIndex",
});
</script>

<style lang="scss" scoped>
:deep() {
  .message-box {
    width: 100%;
    height: 100%;
    padding: 0.65625rem;
    display: flex;
    flex-direction: column;
    gap: 1.3125rem;
    .message-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      height: 3.4375rem;
      gap: 0.34375rem;
      .img-box {
        display: flex;
        flex-direction: column;
        img {
          width: 3.25rem;
          height: 3.25rem;
        }
      }
      .notice-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.34375rem;
        span {
          color: #1e2331;
          font-weight: 500;
          font-size: 0.875rem;
        }
        p {
          color: #9b9fa8;
          font-weight: 400;
          font-size: 0.6875rem;
        }
      }
    }
  }
}
</style>
