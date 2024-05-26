import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VantResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // imports: ["vue"],
      dts: "src/auto-import.d.ts",
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),
    vueJsx(),
    // 组件库下面是自动按需导入   就不用在入口文件 里面和组件里面引入elementt组件了
  ],
  resolve: {
    alias: {
      // 这里控制路由的基准地址的  默认值是（/）
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // src 路径配置
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
