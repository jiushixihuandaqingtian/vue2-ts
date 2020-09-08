import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router);

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

/** 公共路由 首页和登录页和一些不用权限的公用页面 */
const constantRouterMap: RouteConfig[] = [
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true
    }
  }
];

const router = new Router({
  routes: constantRouterMap
});

export default router
