import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/fm-work/getList',
    method: 'post',
    params
  })
}
