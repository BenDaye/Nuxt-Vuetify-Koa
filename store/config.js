// const pkg = process.server ? require('../package.json') : {}

export const DEFAULT_API_HOST = 'http://localhost:3000/api'

export const state = () => ({
  API_HOST: DEFAULT_API_HOST
})
