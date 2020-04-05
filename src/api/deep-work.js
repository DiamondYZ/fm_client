import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/fm-work/getList',
    method: 'post',
    data
  })
}
