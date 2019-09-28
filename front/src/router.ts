import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout/index.vue'

Vue.use(Router);

/**
 * hidden:true   if hidden is true, show in the bar
 * name: 'router-name'  router name require
 * meta : {
 *     title: 'title'     show in bar name
 *     icon: 'icon-class' show in bar icon
 *     icon library free
 * }
 */

export const asyncRouterMap = [
  {
    path: "/",
    name: "dashboard",
    component: Layout,
    hidden: true,
    redirect: "/home",
    children:[
      {
        path: "/home",
        name: "home",
        meta: { title: "ホーム", icon: "el-icon-s-home" },
        component: () => import("@/views/Home.vue")
      }
    ]
  },
  {
    path: "/dataManage",
    name: "dataManage",
    hidden: true,
    meta: {title: "Api管理", icon: "el-icon-s-data"},
    component: Layout,
    redirect: "/tableData",
    children:[
      {
        path: "/tableData",
        hidden:true,
        meta: {title: "テーブル管理", icon: "el-icon-receiving"},
        name: "tableData",
        component: () => import("@/views/DataManage/TableData.vue")
      },
      {
        path: "/chartsData",
        name: "chartsData",
        hidden:true,
        meta: {title: "グラフ管理", icon: "el-icon-data-line"},
        component: () => import("@/views/DataManage/ChartsData.vue")
      },
      {
        path: "/formData",
        name: "formData",
        hidden:true,
        meta: {title: "フォーム管理", icon: "el-icon-c-scale-to-original"},
        component: () => import("@/views/DataManage/FormData.vue")
      }
    ]
  },
  {
    path: "/userManage",
    name: "userManage",
    component: Layout,
    hidden:true,
    redirect: "/accountData",
    children:[
      {
        path: "/accountData",
        name: "accountData",
        meta: {title: "ユーザー管理", icon: "el-icon-user-solid"},
        component: () => import("@/views/UserManage/AccountData.vue")
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/userInfo",
    hidden:false,
    children:[
      {
        path: "/userInfo",
        name: "userInfo",
        meta:{ title: "マイページ" },
        component: () => import("@/views/UserManage/UserInfo.vue")
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: false,
    meta: { title: "404" },
    component: () => import("@/views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: '/login',
    name: 'login',
    hidden: false,
    meta: { title: "登録" },
    component: ()=>import("@/views/Login/Login.vue")
  },
  {
    path: "/password",
    name: "password",
    hidden: false,
    meta: { title: "パスワード再発行" },
    component: ()=>import("@/views/Login/Password.vue")
  }
];

const router:any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
});

//ルーターインタプリタ
(router as any).beforeEach((to:any,from:any,next:any)=>{
  const isLogin = localStorage.tsToken ? true: false;
  if(to.path == "/login" || to.path == "/password"){
    next();
  }else {
    isLogin ? next() :next("/login");
  }
});

export default router;
