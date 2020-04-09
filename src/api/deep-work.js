import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/fm-work/getList',
    method: 'post',
    data
  })
}

export function getDetailList(data) {
  return request({
    url: '/fm-work-details/getList',
    method: 'post',
    data
  })
}

export function getStatisticList(data) {
  return request({
    url: '/fm-work-total/getList',
    method: 'post',
    data
  })
}
