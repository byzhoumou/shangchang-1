import "./assets/style.scss";
import { useRem } from "./useRem";
import pinia from ".//stores";
import { createApp } from "vue";
import App from "./App.vue";
// 导入路由
import router from "./router";
// 组件库样式
import "element-plus/dist/index.css";
import "vant/lib/index.css";
const app = createApp(App);

// 使用路由
app.use(router);
// 挂载app实例
app.mount("#app");
useRem(); // 调用useRem以应用REM适配
// 挂载状态管理仓库
app.use(pinia);
