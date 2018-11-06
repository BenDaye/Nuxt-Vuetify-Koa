<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout column>
      <v-img
        :height="$vuetify.breakpoint.xsOnly ? 180 : 360"
        src="/img/product/banner-3.jpg"
        gradient="to top, rgba(0, 0, 0, .1), rgba(0, 0, 0,.5)">
        <ben-container>
          <v-layout
            fill-height
            column
            justify-center>
            <div class="display-1 white--text">产品与服务</div>
            <div class="headline white--text">PRODUCT & SERVICE</div>
          </v-layout>
        </ben-container>
      </v-img>
      <v-img
        v-for="(item, index) in productList"
        :key="index"
        :id="`product${index + 1}`"
        :gradient="index % 2 == 0 ? 'to top, #FFFFFF, #FFFFFF' : 'to top, #FAFAFA, #FAFAFA'"
        src="/img/product/banner-3.jpg"
        height="400">
        <ben-container>
          <v-container
            fluid
            grid-list-lg>
            <v-layout
              :reverse="index % 2 == 0 ? true : false"
              row
              align-center
              justify-space-between
              fill-height>
              <v-flex xs4>
                <v-img
                  :src="`/img/product/product-${index + 1}.png`"
                  :aspect-ratio="1/1"
                  max-height="240"
                  contain/>
              </v-flex>
              <v-spacer/>
              <v-flex xs8>
                <div class="headline py-4">
                  <span
                    :style="{ color: '#EF6C00'}"
                    class="display-3 pr-2">{{ index | num }}</span>
                  {{ item.title }}
                </div>
                <div class="subheading text-indent">{{ item.content }}</div>
                <v-btn
                  color="orange darken-3"
                  class="white--text ml-5 mt-3"
                  large
                  depressed
                  @click="handleProduct(index)">立即使用</v-btn>
              </v-flex>
            </v-layout>

          </v-container>
        </ben-container>
      </v-img>
    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container'
export default {
  name: 'ProductPage',
  components: {
    BenContainer
  },
  filters: {
    num(index) {
      return index < 9 ? `0${index + 1}` : index + 1
    }
  },
  data() {
    return {
      productList: [
        {
          title: '信用报告',
          content:
            '南国征信为个人和企业提供信用报告服务，帮助用户缓解信息不对称，有效识别和防范信用风险。'
        },
        {
          title: '信息核查',
          content:
            '南国征信汇聚国内诸多权威部门的数据源，确保数据真实性、有效性、合法性，为社会各界提供企业、个人相关信息的核验服务，如：手机实名认证、公民身份证号码核验、银行卡核验、学历核验、企业基础信息核验等，防范风险、保护用户。'
        },
        {
          title: '信息评分',
          content:
            '利用信贷记录、政府数据、行为数据等多源大数据为信用主体进行多维度信用分析，形成信用评分。'
        },
        {
          title: '反欺诈',
          content:
            '通过专家模型和机器学习等大数据分析技术，对交易诈骗，网络诈骗，电话诈骗，盗卡盗号等欺诈行为进行识别和预警，为客户提供系列服务。'
        },
        {
          title: '黑名单',
          content:
            '为各类客户提供欠款、欠税、违法、违章、违约失信等各领域的黑名单查询。'
        },
        {
          title: '风险预警',
          content:
            '南国征信根据客户外部环境与内部环境的变化，对客户未来风险进行预测和报警。'
        },
        {
          title: '精准营销',
          content:
            '南国征信通过对合作机构的存量客户数据以及自身海量数据进行对比分析，协助企业等机构营销符合条件的存量及新增客户。'
        },
        {
          title: '模型开发',
          content:
            '南国征信利用大数据分析技术研发信用评估模型、反欺诈模型等征信相关产品，为银行、保险等各个行业提供模型解决方案。'
        },
        {
          title: '创业贷',
          content:
            '具备符合条件的创业者个人为借款人，由创业担保贷款担保基金提供担保，经办的商业银行发放，财政部门给予贴息，用于支持个人创业的贷款业务。'
        },
        {
          title: '数据清洗服务',
          content:
            '南国征信对企事业单位收集或存储的原始数据经过一系列科学分析后，对原始数据进行核实、分类、剔除不良数据项等处理后，为客户筛选出具有应用价值的数据，进行深加工后予以开发应用。'
        },
        {
          title: '信用相关软件设计与开发',
          content:
            '包括开发全部过程、活动和任务的结构框架，具体分为需求、设计、编码和测试、维护阶段，为各类机构提供征信产品实施环境。'
        },
        {
          title: '征信产品应用整体解决方案',
          content:
            '南国征信充分利用自身专业优势，结合客户实际需求，使用现代化的技术处理方式，为客户提供需要的整体解决方案，并预测客户未来之需求。'
        },
        {
          title: '地区、行业信用体系设计',
          content:
            '依托南国征信专业的技术开发体系、科学的信用评估方法、先进的信用体系建设理念，为政府机构以及各类行业平台和企事业单位提供全方位信用体系建设的方案设计与实施服务。'
        }
      ]
    }
  },
  computed: {
    hashFromRoute() {
      return this.$route.hash
    }
  },
  watch: {
    hashFromRoute(hash) {
      console.log('TCL: hashFromRoute -> hash', hash)
      this.goTo()
    }
  },
  mounted() {
    this.goTo()
  },
  methods: {
    goTo() {
      if (this.hashFromRoute) {
        this.$nextTick(() => {
          this.$vuetify.goTo(this.hashFromRoute, {
            offset: -64
          })
        })
      }
    },
    handleProduct(index) {
      console.log('TCL: handleProduct -> index', index)
      this.$router.push({
        name: 'query'
      })
    }
  }
}
</script>

<style lang="less">
.text-indent {
  text-indent: 32px;
}
</style>
