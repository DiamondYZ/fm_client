import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// $$ add sub and long routes here
import deepWorkRoutes from './modules/works/deep-work'
import hostRoutes from './modules/info/host'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},

{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/main',
  children: [{
    path: 'main',
    name: 'Main',
    component: () => import('@/views/main/index'),
    meta: {
      title: '首页',
      icon: 'hexagon'
    }
  }
  ]
},
{
  path: '/dash',
  component: Layout,
  redirect: '/dash/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: '仪表盘',
      icon: 'monitor-dashboard'
    }
  }
  ]
},
// 作业数据
{
  path: '/data',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: '作业数据',
    icon: 'chart-bar'
  },
  children: [
    {
      path: 'deep-work',
      name: 'DeepWork',
      component: () => import('@/views/data/deep-work/index'),
      meta: {
        title: '深松作业',
        icon: 'truck-fast-outline'
      },
      children: deepWorkRoutes
    }]
},
// 信息管理
{
  path: '/info',
  component: Layout,
  redirect: '/info/host',
  name: 'Info',
  meta: {
    title: '信息管理',
    icon: 'database-settings'
  },
  children: [{
    path: 'host',
    component: () => import('@/views/info/host/index'), // Parent router-view
    name: 'Host',
    meta: {
      title: '主机管理',
      icon: 'truck'
    },
    children: hostRoutes
  },
  {
    path: 'agent',
    component: () => import('@/views/info/agent/index'),
    meta: {
      title: '机构管理',
      icon: 'office-building'
    },
    children: [{
      path: 'agent-manage',
      component: () => import('@/views/info/agent/agent-manage/index'),
      name: 'AgentManage',
      meta: {
        title: '机构管理'
      }
    },
    {
      path: 'co-manage',
      component: () => import('@/views/nested/menu1/menu1-2'),
      name: 'CoManage',
      meta: {
        title: '合作社管理'
      }
    }
    ]
  },
  {
    path: 'user',
    component: () => import('@/views/info/user/index'),
    meta: {
      title: '用户管理',
      icon: 'account-badge-horizontal'
    },
    children: [{
      path: 'agent-admin',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'AgentAdmin',
      meta: {
        title: '机构管理员'
      }
    },
    {
      path: 'co-admin',
      component: () => import('@/views/info/user/co-admin/index'),
      name: 'CoAdmin',
      meta: {
        title: '合作社管理员'
      }
    },
    {
      path: 'fm-admin',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'FmAdmin',
      meta: {
        title: '农机大户'
      }
    }, {
      path: 'host-admin',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'AgentAdmin',
      meta: {
        title: '主机用户'
      }
    },
    {
      path: 'install-admin',
      component: () => import('@/views/nested/menu1/menu1-1'),
      name: 'InstallAdmin',
      meta: {
        title: '安装用户'
      }
    }]
  }
  ]
},
{
  path: '/product',
  component: Layout,
  redirect: '/product/name',
  name: 'Product',
  meta: {
    title: '产品运维',
    icon: 'settings-transfer'
  },
  children: [{
    path: 'name',
    name: 'Name',
    component: () => import('@/views/product/name/index'),
    meta: {
      title: '产品名称定制',
      icon: 'file-edit'
    }
  },
  {
    path: 'state',
    name: 'State',
    component: () => import('@/views/tree/index'),
    meta: {
      title: '作业点状态修改',
      icon: 'content-save-edit'
    }
  },
  {
    path: 'area',
    name: 'Area',
    component: () => import('@/views/tree/index'),
    meta: {
      title: '主机面积添加',
      icon: 'file-document-box-plus'
    }
  }
  ]
},

{
  path: '/market',
  component: Layout,
  meta: {
    title: '市场运营',
    icon: 'scale-balance'
  },
  children: [{
    path: 'init-info',
    name: 'InitInfo',
    component: () => import('@/views/form/index'),
    meta: {
      title: '主机初始安装信息',
      icon: 'file-settings-variant'
    }
  },
  {
    path: 'annual-fee',
    name: 'AnnualFee',
    component: () => import('@/views/market/annual-fee/index'),
    meta: {
      title: '设备年费管理',
      icon: 'sale'
    }
  }]
},

// {
//   path: '/nested',
//   component: Layout,
//   redirect: '/nested/menu1',
//   name: 'Nested',
//   meta: {
//     title: 'Nested',
//     icon: 'nested'
//   },
//   children: [{
//     path: 'menu1',
//     component: () => import('@/views/nested/menu1/index'), // Parent router-view
//     name: 'Menu1',
//     meta: {
//       title: 'Menu1'
//     },
//     children: [{
//       path: 'menu1-1',
//       component: () => import('@/views/nested/menu1/menu1-1'),
//       name: 'Menu1-1',
//       meta: {
//         title: 'Menu1-1'
//       }
//     },
//     {
//       path: 'menu1-2',
//       component: () => import('@/views/nested/menu1/menu1-2'),
//       name: 'Menu1-2',
//       meta: {
//         title: 'Menu1-2'
//       },
//       children: [{
//         path: 'menu1-2-1',
//         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//         name: 'Menu1-2-1',
//         meta: {
//           title: 'Menu1-2-1'
//         }
//       },
//       {
//         path: 'menu1-2-2',
//         component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//         name: 'Menu1-2-2',
//         meta: {
//           title: 'Menu1-2-2'
//         }
//       }
//       ]
//     },
//     {
//       path: 'menu1-3',
//       component: () => import('@/views/nested/menu1/menu1-3'),
//       name: 'Menu1-3',
//       meta: {
//         title: 'Menu1-3'
//       }
//     }
//     ]
//   },
//   {
//     path: 'menu2',
//     component: () => import('@/views/nested/menu2/index'),
//     meta: {
//       title: 'menu2'
//     }
//   }
//   ]
// },

// {
//   path: 'external-link',
//   component: Layout,
//   children: [{
//     path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
//     meta: {
//       title: 'External Link',
//       icon: 'link'
//     }
//   }]
// },

// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
