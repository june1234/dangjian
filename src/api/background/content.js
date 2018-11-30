import request from '@/utils/request'

export function findByPage (params) {
  return request({
    url: '/plate_artitle/findbypage',
    method: 'post',
    data: params
  })
}

export function add (params) {
  return request({
    url: '/plate_artitle/add',
    method: 'post',
    data: params
  })
}

export function update (params) {
  return request({
    url: '/plate_artitle/update',
    method: 'post',
    data: params
  })
}

export function deleteId (id) {
  return request({
    url: `/plate_artitle/delete/${id}`,
    method: 'post'
  })
}
