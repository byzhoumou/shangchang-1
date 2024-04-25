<template>
  <div class="User">
    <div class="user-head">
      <div class="account-info">
        <img src="../../icons/avatar.png" alt="" />
        <div class="Account">
          <div class="box">
            <span>13974920409</span>
            <p>成长值0/2000</p>
          </div>
        </div>
        <van-button>用户中心</van-button>
      </div>
      <div class="other-info">
        <div class="other-info-item">
          <span>0.00</span>
          <p>账户余额(元)</p>
        </div>
        <div class="other-info-item">
          <span>0.00</span>
          <p>佣金余额(元)</p>
        </div>
      </div>
      <div class="order-form">
        <div class="follow-duo">
          <div class="title">我的订单</div>
          <div class="more">查看更多>></div>
        </div>
        <div class="follow-duo-box">
          <div class="follow-duo-item">
            <img src="../../icons/my-icon1.svg" alt="" />
            <span>待付款</span>
          </div>
          <div class="follow-duo-item">
            <img src="../../icons/my-icon1.svg" alt="" />
            <span>待付款</span>
          </div>
          <div class="follow-duo-item">
            <img src="../../icons/my-icon1.svg" alt="" />
            <span>待付款</span>
          </div>
          <div class="follow-duo-item">
            <img src="../../icons/my-icon1.svg" alt="" />
            <span>待付款</span>
          </div>
          <div class="follow-duo-item">
            <img src="../../icons/my-icon1.svg" alt="" />
            <span>待付款</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user-tool">
      <div class="user-tool-name">常用工具</div>
      <div class="user-tool-option">
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
        <div class="tool-option-item">
          <img src="../../icons/icon_money.svg" alt="" />
          <span>分享赚钱</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
:deep() {
  .user-head {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 335px;
    padding: 1.25rem 1.375rem 0;
    background-image: url(../../icons/user-01.png);
    .account-info {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.9375rem;
      margin-top: 0;
      img {
        width: 3.6875rem;
        height: 3.6875rem;
        border-radius: 50%;
      }
      .box {
        display: flex;
        flex-direction: column;
        gap: 0.5625rem;
        span {
          color: #1e2331;
          font-size: 1.0625rem;
          font-weight: 700;
        }
        p {
          color: #985010;
          font-size: 0.5625rem;
        }
      }
      .van-button {
        float: right;
        width: 4.375rem;
        height: 2rem;
        font-weight: 500;
        font-size: 13px;
        color: #f7c994;
        background: linear-gradient(180deg, #3e3e4e 0%, #181823 100%);
        box-shadow: 0 0.09375rem 0.25rem rgba(24, 24, 35, 0.28);
        border-radius: 1rem;
        margin-left: auto;
        white-space: nowrap; /* 防止文本换行 */
      }
    }
    .other-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-size: 23.3125rem;
      border-radius: 0.9375rem 0.9375rem 0 0;
      padding: 0 2.8125rem;

      width: 21.4375rem;
      height: 4.875rem;
      margin: 17px -10px 0 -5px; /* 子盒子使用等值的负边距来撑开 */
      background-image: url(../../icons/user-02.png);
      .other-info-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span {
          font-weight: 500;
          color: #fff;
          font-size: 1.1875rem;
          margin-bottom: 10px;
        }
        p {
          font-weight: 400;
          color: #f7c994;
          font-size: 0.75rem;
        }
      }
    }
  }
  .order-form {
    width: 22.3125rem;
    height: 7.5rem;
    background-color: red;
    background: linear-gradient(180deg, #fff6f0 0%, #ffffff 100%);
    margin: 0 0px 0 -15px;
    border-radius: 0.46875rem;
    .follow-duo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      padding: 0 0.71875rem;
      .title {
        font-weight: 500;
        color: #1e2331;
        font-size: 0.875rem;
      }
      .more {
        font-weight: 400;
        color: #9b9fa8;
        font-size: 0.75rem;
      }
    }
    .follow-duo-box {
      display: flex;
      width: 100%;
      margin-top: 1.0625rem;
      padding: 0 0.625rem;
      justify-content: space-between;
      // justify-content: center;
      .follow-duo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 1.875rem;
          height: 2rem;
        }
        span {
          font-weight: 400;
          color: #1e2331;
          white-space: nowrap;
          width: 100%;
          padding: 0 0.71875rem;
          margin-top: 0.65625rem;
        }
      }
    }
  }
}
:deep() {
  .user-tool {
    width: 22.3125rem;
    background: #ffffff;
    border-radius: 0.46875rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin: 15px 10px 0 10px;
    padding: 0 0.75rem 1.25rem;
    box-sizing: border-box;
    .user-tool-name {
      margin-top: 0.84375rem;
      width: 100%;
      font-size: 0.875rem;
      font-weight: 500;
      color: #1e2331;
    }
  }
  .user-tool-option {
    width: 100%;
    padding: 0 0.625rem;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    align-content: center;
    justify-content: space-between;
    justify-items: center;
    gap: 1.28125rem 0;
    margin-top: 1.28125rem;
  }
  .tool-option-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.40625rem;
    img {
      width: 1.6875rem;
      height: 1.6875rem;
    }
    span {
      font-weight: 400;
      color: #1e2331;
    }
  }
}
</style>
