// 农机作业数据相关路由
// 深松作业子路由及次级子路由

const deepWorkRoutes = [{
  path: 'season-data',
  component: () => import('@/views/data/deep-work/season-data/index'),
  name: 'SeasonData',
  meta: {
    title: '当季数据'
  }
},
{
  path: 'season-report',
  component: () => import('@/views/data/deep-work/season-report/index'),
  name: 'SeasonReport',
  meta: {
    title: '当季报表'
  }
},
{
  path: 'history-data',
  component: () => import('@/views/data/deep-work/history-data/index'),
  name: 'HistoryData',
  meta: {
    title: '历史数据'
  }
}]

export default deepWorkRoutes
