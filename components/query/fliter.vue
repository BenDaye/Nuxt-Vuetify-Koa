<template>
  <v-flex>
    <v-card flat>
      <v-tabs
        v-model="activeFilterTab"
        color="transparent"
        slider-color="primary"
        show-arrows
        class="px-4">
        <v-tab ripple>
          <div class="subheading font-weight-medium">公司</div>
        </v-tab>
        <v-tab
          ripple
          disabled>
          <div class="subheading font-weight-medium">风险信息</div>
        </v-tab>
        <v-tab
          ripple
          disabled>
          <div class="subheading font-weight-medium">知识产权</div>
        </v-tab>
      </v-tabs>
      <!-- <v-divider :style="{marginTop: '-1px'}"/> -->
      <transition name="slide-y-transition">
        <v-tabs-items
          v-show="showFilter"
          v-model="activeFilterTab">
          <v-tab-item>
            <!-- {{query}} -->
            <v-layout
              column
              class="py-3">
              <v-flex>
                <v-container fluid>
                  <v-layout
                    row
                    wrap
                    align-center>
                    <div class="grey--text body-2 pr-4">已选条件</div>
                    <v-chip
                      label
                      close
                      color="primary"
                      text-color="white">TEST</v-chip>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-divider class="mb-3"/>
              <filter-item
                v-for="(item, index) in filterList"
                :key="index"
                :title="item.title"
                :list="item.list"/>
            </v-layout>
          </v-tab-item>
        </v-tabs-items>
      </transition>

      <v-btn
        :style="{ left: '50%', marginLeft: '-44px', color: '#424242' }"
        small
        absolute
        bottom
        left
        depressed
        color="white"
        @click="handleFilterVisible">
        {{ showFilter ? '收起' : '展开' }}
        <v-icon>{{ showFilter ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card>
  </v-flex>
</template>

<script>
import FilterItem from './fliter-item.vue'
export default {
  name: 'QueryFilter',
  components: {
    FilterItem
  },
  data() {
    return {
      activeFilterTab: 0,
      filterList: [
        {
          title: '查找范围',
          list: [
            '企业名',
            '法人或股东',
            '高管',
            '品牌/产品',
            '联系方式',
            '经营范围'
          ]
        },
        {
          title: '机构类型',
          list: ['企业', '社会组织', '香港公司', '台湾公司']
        },
        {
          title: '企业类型',
          list: [
            '有限责任公司',
            '股份有限公司',
            '国企',
            '外商投资企业',
            '独资企业',
            '合伙制企业',
            '个体工商户'
          ]
        },
        {
          title: '企业状态',
          list: ['存续']
        },
        {
          title: '注册资本',
          list: ['500万以下', '500~1000万', '1000~5000万', '5000万以上']
        },
        {
          title: '成立日期',
          list: ['2018', '2017']
        },
        {
          title: '省份地区',
          list: ['广西']
        },
        {
          title: '行业门类',
          list: ['信息传输、软件和信息技术服务业', '科学研究和技术服务业']
        }
      ],
      showFilter: false
    }
  },
  methods: {
    handleFilterVisible() {
      this.msgInfo('功能开发中，敬请期待。')
    }
  }
}
</script>
