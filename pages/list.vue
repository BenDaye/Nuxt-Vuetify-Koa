<template>
  <ben-container>
    <v-container
      fluid
      fill-height
      class="pa-0">
      <v-layout column>
        <v-responsive :aspect-ratio="16/12">
          <query-filter/>
          <query-list
            :list-data="result"
            @changePageIndex="handlePageIndex" />
        </v-responsive>
      </v-layout>
    </v-container>
  </ben-container>
</template>

<script>
import BenContainer from '~/components/container'
import QueryFilter from '~/components/query/fliter'
import QueryList from '~/components/query/list'
// import { getList, mock } from '@/api/query'
import qs from 'qs'
import get from 'lodash.get'
export default {
  name: 'QueryListPage',
  components: {
    BenContainer,
    QueryFilter,
    QueryList
  },
  data() {
    return {
      result: {}
    }
  },
  async asyncData({ $http, query }) {
    const result = await $http.get(`/company?${qs.stringify(query)}`)
    console.log('TCL: asyncasyncData -> result', result)
    return {
      result
    }
  },
  computed: {
    query() {
      return this.$route.query
    }
  },
  watch: {
    query(newRoute, oldRoute) {
      console.log('​query -> newRoute, oldRoute', newRoute, oldRoute)
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      // await getList(this.query)
      //   .then(result => {
      //     console.log('​getList -> result', result)
      //     if (result.errno !== 0) {
      //       this.$Notice.error(result.errmsg)
      //     } else if (result.data.Status !== '200') {
      //       this.$Notice.error(result.data.Message)
      //     } else {
      //       this.result = result.data
      //     }
      //   })
      //   .catch(err => {
      //     this.$Notice.error(err.toString())
      //     console.log('​getList -> err', err)
      //   })
      // const { data } = await this.$http.get('/company')
      // console.log('TCL: async asyncData -> data', data)
    },
    mock() {
      this.result = mock().data
    },
    handlePageIndex(index) {
      console.log('​handlePageIndex -> index', index)
      let query = { ...this.$route.query }
      query.pageIndex = index
      this.$router.push({
        name: 'search',
        query
      })
    }
  }
}
</script>
