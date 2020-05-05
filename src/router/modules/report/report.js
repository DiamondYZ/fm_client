const reportRoutes = [{
  path: 'daily-report',
  component: () => import('@/views/report/dailyReport'),
  name: 'dailyReport',
  meta: {
    title: '日报表'
  }
}]

export default reportRoutes
