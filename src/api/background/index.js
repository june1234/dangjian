import request from '@/utils/request'

export function findByPage (params) {
  return request({
    url: 'home_artitle/findbypage',
    method: 'post',
    data: params
  })
}

export function add (params) {
  return request({
    url: '/home_artitle/add',
    method: 'post',
    data: params
  })
}

export function update (params) {
  return request({
    url: '/home_artitle/update',
    method: 'post',
    data: params
  })
}

export function deleteID (id) {
  return request({
    url: `home_artitle/delete/${id}`,
    method: 'post'
  })
}
