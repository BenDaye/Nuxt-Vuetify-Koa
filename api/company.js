import { Http } from '../utils/Http'
import qs from 'qs'
const http = new Http()

export const getCompanyList = async args => {
  const { keyword, type, pageIndex = 1, pageSize = 20 } = args
  if (!keyword) {
    throw new Error('需要关键字')
  }
  const { data } = await http.get(
    `/company?${qs.stringify({ keyword, type, pageIndex, pageSize })}`
  )
  return data
}
