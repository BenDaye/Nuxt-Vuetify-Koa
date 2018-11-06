<template>
  <v-tab-item>
    <intro-card
      title="联系我们"
      icon="home"
      no-padding>
      <v-card>
        <v-container
          fluid
          fill-height>
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              d-flex>
              <v-img
                :height="$vuetify.breakpoint.xsOnly ? 180 : 360"
                src="/img/about/location.jpg"
                contain/>
            </v-flex>
            <v-flex xs12>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="orange darken-3">phone</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>0771-5711786</v-list-tile-title>
                    <v-list-tile-sub-title>固定电话</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="orange darken-3">chat</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>2907715046</v-list-tile-title>
                    <v-list-tile-sub-title>客服QQ</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="orange darken-3">mail</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>ngxy-kf@ngcredit.com</v-list-tile-title>
                    <v-list-tile-sub-title>企业邮箱</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="orange darken-3">chat</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>ngxy1610</v-list-tile-title>
                    <v-list-tile-sub-title>微信客服</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset/>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="orange darken-3">location_on</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>广西壮族自治区南宁市青秀区桃源路39号5楼</v-list-tile-title>
                    <v-list-tile-sub-title>办公地址</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
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
  name: 'AboutContact',
  components: {
    IntroCard
  }
}
</script>
