import request from '@/utils/request'

export function login (formLabelAlign) {
  return request({
    url: '/login',
    method: 'post',
    data: formLabelAlign
  })
}

export function logout () {
  return request({
    url: '/gologout',
    method: 'post'
  })
}
