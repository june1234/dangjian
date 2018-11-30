import request from '@/utils/request'

export function content (params) {
  return request({
    url: '/plate_artitle/findmodulebypage',
    method: 'post',
    data: params
  })
}
