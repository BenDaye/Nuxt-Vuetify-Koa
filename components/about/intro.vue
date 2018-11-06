<template>
  <v-tab-item>
    <intro-card
      title="公司简介"
      icon="home"
      no-padding>
      <v-card>
        <v-container
          fluid>
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              order-xs2
              lg6
              order-lg1>
              <v-card-text>
                <div
                  :style="{ textIndent: '32px' }"
                  class="subheading py-2"><strong class="title">广西南国信用管理有限公司</strong>（简称“南国信用” ）是一家独立的第三方征信和商业信息服务机构，公司以“让信用实现商业价值”为使命，坚持守法、守信、守心的发展理念，充分利用地方政府在大数据资源上整合的优势，通过技术和业务的创新，以征信业务为核心，逐步建立涵盖征信服务、信用评估、风险控制和精准获客等信用价值链。</div>
                <div
                  :style="{ textIndent: '32px' }"
                  class="subheading py-2">公司拥有来自银行、TransUnion、阿里、腾讯等熟悉征信、风险管理和大数据等高端技术人才，其中博士研究生3名，硕士研究生3名。</div>
                <div
                  :style="{ textIndent: '32px' }"
                  class="subheading py-2">公司依托中国-东盟的区位优势，积极开展大湾区征信和东盟征信一体化合作，现分别与菲律宾征信协会、诺华（香港）诚信有限公司签署战略合作协议。</div>
              </v-card-text>
            </v-flex>
            <v-flex
              xs12
              order-xs1
              lg6
              order-lg2>
              <v-img
                src="/img/product/banner.jpg"
                max-height="360"
                class="my-4"/>
            </v-flex>
            <v-flex
              xs12
              order-xs3>
              <v-container
                fluid
                grid-list-lg>
                <v-layout
                  row
                  justify-space-around
                  wrap>
                  <v-flex
                    v-for="(item, index) in 3"
                    :key="index"
                    xs12
                    lg3>
                    <v-hover>
                      <v-card slot-scope="{ hover }">
                        <v-img
                          :src="`/img/about/culture-${ index + 1 }.png`"
                          :aspect-ratio="1/1"
                          :gradient="hover ? 'to top, rgba(0,0,0,.4), rgba(0,0,0,.4)' : 'to top, rgba(0,0,0,.6), rgba(0,0,0,.6)'">
                          <v-container
                            v-if="!hover"
                            fluid
                            fill-height>
                            <v-layout
                              align-center
                              justify-center>
                              <div
                                v-if="index < 2"
                                class="title white--text">{{ textDefault[index] }}</div>
                              <div
                                v-for="(textItem, textIndex) in textDefault[index]"
                                v-else
                                :key="textIndex"
                                class="title white--text">{{ textItem }}</div>
                            </v-layout>
                          </v-container>
                          <v-expand-transition>
                            <transition name="scale-transition">
                              <div
                                v-if="hover"
                                :style="{ height: '100%' }"
                                class="d-flex">
                                <v-container
                                  fluid
                                  fill-height>
                                  <v-layout
                                    column
                                    align-center
                                    justify-center>
                                    <div
                                      v-if="index < 2"
                                      class="title white--text">{{ textHover[index] }}</div>
                                    <div
                                      v-for="(textItem, textIndex) in textHover[index]"
                                      v-else
                                      :key="textIndex"
                                      class="title white--text">{{ textItem }}</div>
                                  </v-layout>
                                </v-container>
                              </div>
                            </transition>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </intro-card>
  </v-tab-item>
</template>

<script>
import IntroCard from '~/components/index/intro-card'
export default {
  name: 'AboutIntro',
  components: {
    IntroCard
  },
  data() {
    return {
      textDefault: ['公司的使命', '核心理念', ['企业价值观']],
      textHover: [
        '让信用实现商业价值',
        '守法 守信 守心',
        [
          '德为员工之根',
          '能是效率之本',
          '勤为事业之基',
          '绩为工作之础',
          '廉为团结之源'
        ]
      ]
    }
  }
}
</script>

<style lang="less">
.v-card--reveal {
  opacity: 0.5;
}
</style>
