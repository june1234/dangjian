import request from '@/utils/request'

export function findPdf (form) {
  console.log(form)
  return request({
    url: `/findpdfpath/find`,
    method: 'post',
    data: form
  })
}
