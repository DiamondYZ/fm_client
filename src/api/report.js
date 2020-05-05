import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/fm-work/dailyData/getList',
    method: 'post',
    data
  })
}
