const consola = require('consola')
const router = require('koa-router')()
const axios = require('axios')
// const axiosRetry = require('axios-retry')

const KEY = 'a1f13c58a20645b0892517e6760e626e'

const getList = async args => {
  try {
    const { keyword, type, pageIndex, pageSize } = args
    const { data } = await axios.get('http://dev.i.yjapi.com/ECIV4/SearchWide', {
      params: { key: KEY, keyword, type, pageIndex, pageSize },
      timeout: 3000
    })
    return data
  } catch (err) {
    consola.error(err)
    return err
  }


}

router.get('/', async (ctx, next) => {
  const res = await getList(ctx.query)
  ctx.body = res
})

module.exports = router
