<template>
  <v-tab-item>
    <intro-card
      title="发展历程"
      icon="home"
      no-padding>
      <v-card>
        <v-container
          fluid
          class="pa-0">
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              d-flex>
              <v-stepper
                v-model="stepper"
                vertical>
                <v-stepper-step
                  :complete="stepper > 1"
                  color="primary"
                  step="1">
                  <div class="body-2">2016年09月</div>
                  <div class="subheading">南国信用成立</div>
                </v-stepper-step>
                <v-stepper-content step="1">
                  1
                </v-stepper-content>
                <v-stepper-step
                  :complete="stepper > 2"
                  color="primary"
                  step="2">
                  <div class="body-2">2016年12月</div>
                  <div class="subheading">获得《大数据征信系统》等四项软件著作权证书</div>
                  <v-container class="pa-0">
                    <v-img
                      :aspect-ratio="58/34"
                      src="/img/about/aptitude_work.png"
                      max-height="580"
                      contain/>
                  </v-container>
                </v-stepper-step>
                <v-stepper-content step="2">
                  2
                </v-stepper-content>
                <v-stepper-step
                  :complete="stepper > 3"
                  color="primary"
                  step="3">
                  <div class="body-2">2016年12月</div>
                  <div class="subheading">取得软件企业认证</div>
                </v-stepper-step>
                <v-stepper-content step="3">
                  2
                </v-stepper-content>
                <v-stepper-step
                  :complete="stepper > 4"
                  color="primary"
                  step="4">
                  <div class="body-2">2017年08月</div>
                  <div class="subheading">完成信息系统安全二级等级保护</div>
                  <v-container class="pa-0">
                    <v-img
                      :aspect-ratio="58/34"
                      src="/img/about/aptitude_class.png"
                      max-height="580"
                      contain/>
                  </v-container>
                </v-stepper-step>
                <v-stepper-content step="4">
                  2
                </v-stepper-content>
                <v-stepper-step
                  :complete="stepper > 5"
                  color="primary"
                  step="5">
                  <div class="body-2">2018年9月</div>
                  <div class="subheading">取得高新企业认证</div>
                </v-stepper-step>
                <v-stepper-content step="5">
                  2
                </v-stepper-content>
                <v-stepper-step
                  step="6"
                  color="primary">
                  <div class="body-2">时至今日</div>
                  <div class="subheading">一路走来，感谢有你！</div>
                </v-stepper-step>
                <v-stepper-content step="6"/>
              </v-stepper>
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
  name: 'AboutDev',
  components: {
    IntroCard
  },
  data() {
    return {
      stepper: 6
    }
  }
}
</script>

<style lang="less">
.v-stepper__label {
  flex: 1 0 auto;
}
</style>
