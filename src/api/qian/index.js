import request from '@/utils/request'

export function find () {
  return request({
    url: '/home_artitle/findall',
    method: 'post'
  })
}

export function findMould () {
  return request({
    url: '/plate_artitle/findall',
    method: 'post'
  })
}
