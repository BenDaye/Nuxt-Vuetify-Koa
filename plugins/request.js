import Vue from 'vue'
import qs from 'qs'
import { Http } from '../utils/Http'

const plugin = {
  instance: null,
  install(options) {
    function requireUrl() {
      throw new Error('组件需要指定URL')
    }

    async function changePage(page) {
      try {
        const options = this.$options || {}
        const params = this.params || {}

        if (!options.url) {
          return requireUrl()
        }

        const { data, meta } = await this.$http.getList(options.url, {
          page,
          limit: this.meta.limit,
          ...params
        })
        this.data = data
        this.meta = meta
        // change router
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.meta.page
          }
        })
      } catch (err) {
        this.$error(err.message)
      }
    }

    async function search(page, _params) {
      try {
        page = isNaN(Number(page)) ? 1 : Number(page)
        const options = this.$options || {}
        const params = this.params || {}

        if (!options.url) {
          return requireUrl()
        }

        const { data, meta } = await this.$http.getList(options.url, {
          page,
          limit: this.meta.limit,
          ...params,
          ..._params
        })

        this.data = data
        this.meta = meta
        // change router
        this.$router.push({
          query: {
            ...params,
            page: meta.page,
            limit: meta.limit
          }
        })
      } catch (err) {
        this.$error(err.message)
      }
    }

    function reset(options = {}) {
      this.filterForm = {}
      const currentPage = 1 // 重置搜索需要跳回到第一页
      const currentLimit = this.meta.limit
      const newQuery = {
        page: currentPage,
        limit: currentLimit,
        ...(options.query || {})
      }
      this.$router.push({ query: newQuery })
      this.search(currentPage, newQuery)
    }

    async function getCode(args) {
      console.log('TCL: getCode -> args', args)
      const { userName, type } = args
      if (!userName || !type) {
        throw new Error('缺少userName或type')
      }
      const res = await this.$http.get(`/user/vcode?${qs.stringify(args)}`)
      return res
    }

    Vue.mixin({
      created() {
        const hasStore = this.$store || this.store
        if (!plugin.instance && hasStore) {
          plugin.instance = new Http(this)
        }
        this.$http = plugin.instance
      },
      methods: {
        /**
         * 翻页
         * @param {*} page
         */
        changePage,
        _changePage: changePage,
        /**
         * 搜索
         * 需要组件配置有 url
         * @param {*} page
         */
        search,
        _search: search,
        /**
         * 重置筛选表单
         */
        reset,
        _reset: reset,
        getCode
      }
    })
  }
}

Vue.use(plugin)

export default context => {
  context.$http = new Http(context)
}
