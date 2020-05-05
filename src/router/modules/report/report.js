const reportRoutes = [{
  path: 'org-report',
  component: () => import('@/views/report/orgReport'),
  name: 'orgReport',
  meta: {
    title: '机构报表'
  }
},
{
  path: 'daily-report',
  component: () => import('@/views/report/dailyReport'),
  name: 'dailyReport',
  meta: {
    title: '日报表'
  }
}]

export default reportRoutes
