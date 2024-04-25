<template>
  <div class="box">
    <div class="top-box">
      <span>您好</span>
      <span>欢迎来到商战网络</span>
    </div>
    <div class="middle-box">
      <div class="login">
        <!-- <div class="tabs"> -->
        <div class="tab">登录/注册</div>
        <div class="tab2">账号登录</div>
        <div class="highlight-line"></div>
        <!-- </div> -->
      </div>
      <div class="form-container">
        <div class="login-input">
          <el-input placeholder="请输入手机号" maxlength="11" />
        </div>
        <div class="login-input">
          <el-input placeholder="请输入验证码">
            <template #suffix>
              <button class="button-box">获取验证码</button>
            </template>
          </el-input>
        </div>
        <div class="agreement-box">
          <el-checkbox v-model="agree" />
          <span> 请你阅读并同意 </span>
          <a href="javascript:;"> 用户协议 </a>
          <span> 和 </span>
          <a href="javascript:;"> 隐私条款</a>
        </div>
        <el-button type="primary" block round>立即登录 </el-button>
        <div class="segmentation">
          <el-divider><span>OR</span></el-divider>
        </div>
        <div class="more-login">
          <div class="more-login-box">
            <img src="../../assets/mings/weixin.svg" alt="" />

            <img src="../../assets/mings/qq.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const agree = ref(false);
defineOptions({ name: "LoginIndex" });
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-color: #ff5f01;

  .top-box {
    width: 100%;
    height: 12.5rem;
    background-color: #ff5f01;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.25rem 3.125rem;
    span {
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      width: 100%;
    }
  }

  .middle-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    border-radius: 2.5rem 2.5rem 0 0;

    .login {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 3.75rem;

      // .tabs {
      //   display: flex;
      //   flex-direction: row;
      // }
      .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        // width: 103px;
        // height: 69px;
        font-size: 1.25rem;
        font-weight: 700;
        color: #ff5f01;
        margin-right: 15px;
      }
      .tab2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        // width: 93px;
        // height: 69px;
        font-size: 1.25rem;
        font-weight: 700;
        color: #ff5f01;
      }
    }
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%px;
      margin-top: 1.25rem;
      .login-input {
        display: flex;
        align-items: center;
        margin: 0.56rem 0 0.56rem 0;
        width: 344px;
        // height: 58px;

        // border-radius: 100px;
        :deep() {
          .el-input__wrapper {
            border-radius: 1.4625rem;

            background-color: #f4f8fb;
            padding: 0 0.8rem 0 1.25rem;
            height: 3.125rem;

            box-shadow: none;

            .el-input__inner::-webkit-input-placeholder {
              color: #d8dbe3;
              font-size: 1rem;
            }

            .button-box {
              width: 6.6rem;
              height: 2.45rem;
              // border-radius: 20px;
              color: #ff594d;
              background-color: #fff;
              font-size: 0.9375rem;
              border-radius: 0.9375rem;
              .active {
                background-color: #ff594d;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
  :deep() {
    .agreement-box {
      margin-top: 0.56rem;
      .el-checkbox {
        height: 1.155rem;
        border-radius: 50%;
      }

      .el-checkbox__inner {
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        border: 0.0625rem solid #d1d4dc;
      }

      a {
        color: #ff594d;
        text-decoration: none;
        font-size: 0.75rem;
      }
    }
  }

  :deep() {
    .el-button {
      width: 19.3125rem;
      height: 2.75rem;
      border-radius: 1.53125rem;
      margin: 0.82rem 0 1rem 0;
      background: linear-gradient(90deg, #fe8a55 0%, #ff5d4d 100%);
      color: #fff;
      font-size: 0.9375rem;
      border: none;
    }
  }
  .segmentation {
    padding: 0 5.5rem 0 5.5rem;
    width: 100%;
    // height: 50px;
    .el-divider {
      margin: 0.52rem 0 0.52rem 0;
      span {
        font-size: 1rem;
        color: #9b9fa8;
        font-size: 0.875rem;
      }
    }
  }
  .more-login {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.6rem 0 0.6rem 0;
    .more-login-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 8rem;
      height: 2.1875rem;
    }
    s .img {
      width: 2.1875rem;
      height: 2.1875rem;
    }
  }
}
</style>
