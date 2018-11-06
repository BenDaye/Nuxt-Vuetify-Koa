import axios from 'axios'
import get from 'lodash.get'
import axiosRetry from 'axios-retry'
// import { Token } from './Token'

class HttpError extends Error {
  constructor(message, response) {
    super(message)
    for (const attr in response) {
      this[attr] = response[attr]
    }
  }
}

class Http {
  constructor(context, config) {
    this.context = context
    const store = (this.store =
      context.$store ||
      context.store ||
      (context.app ? context.app.store : null))

    if (!store) {
      return
    }

    const defaultConfig = {
      baseURL: process.client
        ? store.state.config.API_HOST
        : process.env.API_HOST || store.state.config.API_HOST,
      timeout: 30 * 1000,
      retry: process.server ? 3 : 0 // 请求重试次数
    }

    if (process.server) {
      const https = require('https')
      // 在服务端忽略证书错误
      defaultConfig.httpsAgent = new https.Agent({
        rejectUnauthorized: false
      })
    }
    this.config = { ...defaultConfig, ...(config || {}) }
    this.http = axios.create(this.config)
    axiosRetry(this.http, {
      retries: this.config.retry
    })
    // this.token = new Token(context)
  }
  create(context, config) {
    return new Http(context || this.context, config)
  }
  request(config) {
    const headers = {}
    // if (process.server) {
    //   const clientHeaders = this.context.req.headers
    //   headers['User-Agent'] = clientHeaders['user-agent']
    //   headers['Accept-Language'] = clientHeaders['accept-language']
    // }
    const data = config.data || null
    if (process.env.DEBUG) {
      console.info(`[${config.method}]: ${config.url} ${Date.now()}`)
    }
    return this.http
      .request({
        ...config,
        headers: {
          ...headers
          // [this.token.key]: this.token.get(),
          // ...config.headers
        },
        data
      })
      .then(res => {
        // const data = res.data
        // if (!data) {
        //   return Promise.reject(new HttpError(`未知错误`, res))
        // }

        // const status = data.status

        // if (typeof status === 'number' && status !== 1) {
        //   switch (status) {
        //     // token 过期或未登陆
        //     case -1:
        //       // 清除token
        //       this.token.clear(this.context)
        //       // 清除用户相关的信息
        //       this.store && this.store.dispatch('clear')
        //       if (process.client) {
        //         const router = get(this, ['context', 'app', 'router'])
        //         router && router.push({ name: '404' })
        //       } else if (process.server) {
        //         // 如果是登陆页的话
        //         // 什么都不做，不用跳转到404
        //         if (this.context.req.url === '/auth/login') {
        //           return
        //         }
        //         this.context.redirect('/404')
        //       }
        //       return Promise.reject(new HttpError(data.message, res))
        //     // 其他的错误统一处理
        //     default:
        //       return Promise.reject(
        //         new HttpError(data.message || '错误代码 ' + status, res)
        //       )
        //   }
        // }
        return Promise.resolve(res)
      })
      .catch(err => {
        if (process.env.DEBUG) {
          console.error(
            `[${config.method}]: ${config.url} ${Date.now()} ${err}`
          )
        }
        if (err instanceof HttpError) {
          return Promise.reject(err)
        }
        const response = err.response || {}
        const data = response.data
        if (
          typeof data === 'object' &&
          data !== null &&
          typeof data.message === 'string'
        ) {
          err = new HttpError(data.message, err)
        }

        const message = data
          ? data.message || err.message || '未知错误'
          : err.message

        if (/Network\sError/.test(message)) {
          err.message = '网络故障，请检查您的网络'
        } else if (/timeout\sof/.test(message)) {
          err.message = '请求超时，请检查您的网络'
        }

        const errors = get(response, ['data', 'errors'])

        if (errors) {
          for (const attr in errors) {
            const val = errors[attr]
            err.message = Array.isArray(val) ? val[0] : String(val)
            break
          }
        }

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
  getList(url, query = {}, config = {}) {
    query.limit = query.limit || 10
    query.page = query.page || 1
    return this.request({
      url,
      method: 'GET',
      ...config,
      headers: config.headers ? { ...config.headers } : {},
      params: {
        ...query,
        page: query.page,
        per_page: query.limit,
        ...(config.params || {})
      },
      data: config.data ? { ...config.data } : null
    }).then(response => {
      const data = get(response, ['data', 'data'])
      const total = Number(get(response, ['data', 'total']))
      const currentPage = Number(get(response, ['data', 'current_page']))
      const perPage = Number(get(response, ['data', 'per_page']))

      const meta = {
        limit: perPage,
        page: currentPage,
        total
      }

      const result = { data, meta }

      Object.defineProperty(result, '$response', { value: response })

      return result
    })
  }
  download(url, params) {
    const query = [`token=${this.token.get()}`]
    for (const attr in params) {
      const value = params[attr]
      if (value !== undefined && value !== null) {
        query.push(attr + '=' + value)
      }
    }
    const downloadUrl = this.config.baseURL + url + '?' + query.join('&')
    window.location.href = downloadUrl
  }
}

export { Http }
