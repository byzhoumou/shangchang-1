import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 一级路由
      path: "/login",
      name: "LoginIndex",
      component: () => import("@/views/login/index.vue"),
      // 设置路由标题
      meta: { title: "登录" },
    },
    {
      // 一级路由
      path: "/productsearch",
      name: "LoginIndex",
      component: () => import("@/components/ProductSearch.vue"),
      // 设置路由标题
      meta: { title: "搜索" },
    },

    {
      // 一级路由
      path: "/",
      redirect: "/home",
      component: () => import("@/views/layout/index.vue"),
      // 2级路由
      children: [
        {
          // 一级路由
          path: "/category",
          name: "categoryinIndex",
          component: () => import("@/views/category/index.vue"),
          // 设置路由标题
          meta: { title: "分类" },
        },
        {
          path: "/home",
          // name: "HomeIndex",
          component: () => import("@/views/home/index.vue"),
          meta: { title: "首页" },
        },
        {
          path: "/message",
          name: "MessageIndex",
          component: () => import("@/views/message/index.vue"),
          meta: { title: "消息通知" },
        },
        {
          path: "/user",
          component: () => import("@/views/user/index.vue"),
          meta: { title: "我的" },
        },
        {
          path: "/menu",
          component: () => import("@/views/menu/index.vue"),
          meta: { title: "我的" },
        },
      ],
    },
  ],
});
router.afterEach((to) => {
  //                                 默认字符窜拼接 防止没有title他就undefined
  document.title = `${to.meta.title || ""}`;
  // 关闭进度条
});

export default router;
