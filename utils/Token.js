import { Cookie } from './Cookie'

export const TOKEN_FIELD = 'Authorization'

export class Token {
  constructor(context) {
    this.context = context
    this.cookie = new Cookie(context)
  }
  static get key() {
    return TOKEN_FIELD
  }
  get key() {
    return TOKEN_FIELD
  }
  get() {
    return this.cookie.get(TOKEN_FIELD)
  }
  set(token, expires) {
    // 默认保存7天
    return this.cookie.set(TOKEN_FIELD, token, expires || 7)
  }
  clear() {
    return this.cookie.remove(TOKEN_FIELD)
  }
  toString() {
    return this.get()
  }
  valueOf() {
    return this.get()
  }
}
