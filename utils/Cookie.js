const CookieParse = require('cookie').parse
const ClientCookie = require('js-cookie')

class Cookie {
  constructor(context) {
    this.context = context
  }
  /**
   * set cookie
   * @param {*} key
   * @param {*} value
   * @param {*} expires
   */
  set(key, value, expires = 7) {
    if (process.client) {
      ClientCookie.set(key, value, { expires })
      return
    }

    const res = this.context.res

    if (!res) {
      return
    }

    const now = Date.now().getTime()

    res.setHeader(
      'Set-Cookie',
      `${key}=; path=/; expires=${new Date(
        now + expires * 1000 * 3600 * 24
      ).toUTCString()};`
    )
  }
  /**
   * get cookie
   * @param {*} key
   */
  get(key) {
    if (process.client) {
      return ClientCookie.get(key) || ''
    }

    const req = this.context.req

    if (!req) {
      return
    }

    const headers = req.headers

    const cookie = CookieParse(headers.cookie || '') || {}

    const value = cookie[key]

    return value
  }
  remove(key) {
    if (process.client) {
      ClientCookie.remove(key)
      return
    }

    const res = this.context.res

    res.setHeader(
      'Set-Cookie',
      `${key}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    )
  }
}

export { Cookie }
