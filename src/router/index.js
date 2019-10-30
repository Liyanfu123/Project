import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Comment from "../views/comment/Comment";
import Login from "../views/login/Login";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    //首页框架
    path: "/home", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "Home", // 子路由
        component: Home
      }
    ]
  },
  {
    //分页表格
    path: "/paging", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "paging", // 子路由
        component: () => import("../views/paging/Paging")
      }
    ]
  },
  {
    //标签页
    path: "/tabs", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "tabs", // 子路由
        component: () => import("../views/tabs/Tabs")
      }
    ]
  },
  {
    //图片上传
    path: "/pictures", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "pictures", // 子路由
        component: () => import("../views/pictures/Pictures")
      }
    ]
  },
  {
    //已发表
    path: "/publish", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "publish", // 子路由
        component: () => import("../views/publish/Publish")
      }
    ]
  },
  {
    //发布文章
    path: "/article", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "article", // 子路由
        component: () => import("../views/article/Article")
      }
    ]
  },
  {
    //统计
    path: "/census", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "census", // 子路由
        component: () => import("../views/census/Census")
      }
    ]
  },
  {
    //导出excel
    path: "/excel", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "excel", // 子路由
        component: () => import("../views/excel/Excel")
      }
    ]
  },
  {
    //导出excel
    path: "/exit", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "exit", // 子路由
        component: () => import("../views/exit/Exit")
      }
    ]
  },
  {
    //查看文章
    path: "/check", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "check", // 子路由
        component: () => import("../views/check/Check")
      }
    ]
  },
  {
    //编辑文章
    path: "/editpost", // 子路由
    component: Comment, //父路由
    children: [
      {
        path: "",
        name: "editpost", // 子路由
        component: () => import("../views/editpost/EditPost")
      }
    ]
  },
  {
    //登录页面路由
    path: "/login",
    name: Login,
    component: () => import("../views/login/Login")

  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
