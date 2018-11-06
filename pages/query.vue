<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout column>
      <v-img
        :height="$vuetify.breakpoint.xsOnly ? 240 : 460"
        src="/img/home-bank-1.jpg"
        gradient="to right, #EF4720, #F06B21">
        <ben-container>
          <v-container
            :grid-list-lg="$vuetify.breakpoint.xsOnly"
            fluid
            fill-height>
            <v-layout column>
              <v-flex
                :class="$vuetify.breakpoint.xsOnly ? 'pt-1' : 'pt-5'">
                <v-img
                  :aspect-ratio="16/2"
                  src="/img/query/slogan.png"
                  max-width="420"
                  class="mx-auto"
                  alt="slogan"/>
              </v-flex>
              <v-flex>
                <v-tabs
                  v-model="active"
                  color="transparent"
                  slider-color="white"
                  show-arrows>
                  <v-tab
                    v-for="(item, index) in typeList"
                    :key="index"
                    ripple>
                    <div
                      :class="$vuetify.breakpoint.xsOnly ? '' : 'subheading'"
                      class="font-weight-medium white--text">{{ item.label }}</div>
                  </v-tab>
                </v-tabs>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="keyword"
                  :placeholder="typeList[active].placeholder"
                  label="keyword"
                  append-icon="search"
                  solo
                  color="primary"
                  @click:append="handleSearch"
                  @keyup.enter="handleSearch"/>
              </v-flex>
              <v-spacer/>
            </v-layout>
          </v-container>
        </ben-container>
      </v-img>

      <ben-container :no-padding="$vuetify.breakpoint.xsOnly">
        <query-function @show-info="showInfo"/>
        <query-shortcut @show-info="showInfo"/>
      </ben-container>
    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container'
import QueryFunction from '~/components/query/function'
import QueryShortcut from '~/components/query/shortcut'
export default {
  name: 'QueryPage',
  components: {
    BenContainer,
    QueryFunction,
    QueryShortcut
  },
  data() {
    return {
      active: 0,
      type: 'default',
      keyword: null,
      typeList: [
        {
          id: 'default',
          label: '全部',
          placeholder: '请输入企业名称、人名、产品名等'
        },
        {
          id: 'name',
          label: '企业名',
          placeholder: '请输入企业名称、注册号或统一社会信用代码'
        },
        {
          id: 'opername',
          label: '法人/股东',
          placeholder: '请输入法人名称或股东名称'
        },
        {
          id: 'scope',
          label: '经营范围',
          placeholder: '请输入企业经营范围'
        },
        {
          id: 'featurelist',
          label: '品牌/产品',
          placeholder: '请输入品牌或产品的关键字'
        },
        {
          id: 'address',
          label: '公司地址',
          placeholder: '请输入企业注册地址'
        }
      ]
    }
  },
  watch: {
    active(type) {
      this.type = this.typeList[type].id
    }
  },
  methods: {
    handleSearch() {
      console.log(this.keyword, this.type)
      const keyword = this.keyword.replace(/^\s+|\s+$/g, '')
      const keywordRules = /^[\u4E00-\u9FA5A-Za-z0-9_]{2,100}$/
      if (!keywordRules.test(keyword)) {
        this.msgError('请至少输入2个关键字')
      } else {
        this.$router.push({
          name: 'list',
          query: {
            keyword,
            type: this.type,
            pageIndex: 1,
            pageSize: 20
          }
        })
      }
    },
    showInfo() {
      this.msgInfo('功能开发中，敬请期待。')
    }
  }
}
</script>

<style lang="less">
.v-tabs__icon {
  &.v-tabs__icon--prev,
  &.v-tabs__icon--next {
    top: 12px;
  }
}
</style>
