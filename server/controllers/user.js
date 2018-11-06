const consola = require('consola')
const router = require('koa-router')()
const axios = require('axios')
const axiosRetry = require('axios-retry')
const querystring = require('querystring')

class Http {
  constructor() {
    const defaultConfig = {
      baseURL: 'http://180.141.91.221:7002/api/client/v1',
      timeout: 30 * 1000,
      retry: 3
    }
    this.config = { ...defaultConfig }
    this.http = axios.create(this.config)
    axiosRetry(this.http, {
      retries: this.config.retry
    })
  }
  request(config) {
    const data = config.data || null
    return this.http.request({
      ...config,
      data
    }).then(res => {
      const data = res.data
      if (!data) {
        return Promise.reject(new HttpError('未知错误', res))
      }
      return Promise.resolve(res)
    }).catch(err => {
      return Promise.reject(err)
    })
  }
  get(url, config = {}) {
    return this.request({ url, method: 'GET', ...config })
  }
  post(url, data = null, config = {}) {
    return this.request({ url, method: 'POST', data, ...config })
  }
  put(url, data = null, config = {}) {
    return this.request({ url, method: 'PUT', data, ...config })
  }
  ['delete'](url, config = {}) {
    return this.request({ url, method: 'DELETE', ...config })
  }
}

class HttpError extends Error {
  constructor(message, response) {
    super(message)
    for (const attr in response) {
      this[attr] = response[attr]
    }
  }
}

const http = new Http()


router.get('/vcode', async (ctx, next) => {
  const res = await vcode(ctx.query)
  ctx.body = res
})

const vcode = async args => {
  const { userName, type } = args
  const data = await http.get(`/vcode?userName=${userName}&type=${type}`)
  return data
}

module.exports = router
