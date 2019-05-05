import Axios from 'axios'
import AxiosRetry from 'axios-retry'

class Http {
  constructor(context, config) {
    this.context = context
    const store = this.store = context.$store || context.store || (context.app ? context.app.store : null)

    if (!store) return

    const defaultConfig = {
      baseURL: (process.client ? store.state.API_HOST : process.env.API_HOST ? process.env.API_HOST : store.state.API_HOST) + '/ng/api',
      timeout: 30 * 1000,
      retry: process.server ? 3 : 0
    }

    // if (process.server) {
    //   const https = require('https')
    //   // 在服务端忽略证书错误
    //   defaultConfig.httpsAgent = new https.Agent({
    //     rejectUnauthorized: false
    //   })
    // }

    this.config = { ...defaultConfig, ...(config || {}) }
    this.http = Axios.create(this.config)
    AxiosRetry(this.http, {
      retries: this.config.retry
    })
    // this.token = new Token(context)
  }
  create(context, config) {
    return new Http(context || this.context, config)
  }
  request(config) {
    const
  }
}
