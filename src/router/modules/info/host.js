// 主机管理子路由及次级子路由
const hostRoutes = [{
  path: 'host-info',
  component: () => import('@/views/info/host/host-info/index'),
  name: 'HostInfo',
  redirect: 'host-info/list',
  meta: {
    title: '主机信息'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/info/host/host-info/add'),
      name: 'Add',
      meta: {
        title: '主机信息-新增'
      },
      hidden: true
    },
    {
      path: 'list',
      component: () => import('@/views/info/host/host-info/list'),
      name: 'List',
      meta: {
        title: '主机信息-列表'
      },
      hidden: true
    }
  ]
},
{
  path: 'host-car',
  component: () => import('@/views/nested/menu1/menu1-2'),
  name: 'HostCar',
  meta: {
    title: '主机车辆信息'
  },
  children: [{
    path: 'menu1-2-1',
    component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    name: 'Menu1-2-1',
    meta: {
      title: 'Menu1-2-1'
    }
  },
  {
    path: 'menu1-2-2',
    component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
    name: 'Menu1-2-2',
    meta: {
      title: 'Menu1-2-2'
    }
  }
  ]
},
{
  path: 'install-info',
  component: () => import('@/views/nested/menu1/menu1-3'),
  name: 'InstallInfo',
  meta: {
    title: '主机安装信息'
  }
},
{
  path: 'user-bond',
  component: () => import('@/views/nested/menu1/menu1-3'),
  name: 'UserBond',
  meta: {
    title: '主机用户关联'
  }
}
]

export default hostRoutes
