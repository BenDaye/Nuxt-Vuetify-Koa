<template>
  <v-app :dark="dark">
    <v-toolbar
      fixed
      app
      height="64"
    >
      <ben-container no-padding>
        <v-layout
          fill-height
          align-center
        >
          <v-img
            src="/img/logo.png"
            alt="logo"
            max-height="36"
            contain
          />
          <v-flex fill-height>
            <v-layout
              fill-height=""
              justify-space-between=""
              align-center="">
              <v-toolbar-items class="hidden-sm-and-down pl-4">
                <v-btn
                  flat
                  to="/">首页</v-btn>
                <v-btn
                  flat
                  to="/query">信用查询</v-btn>
                <v-menu
                  :nudge-bottom="72"
                  transition="slide-y-transition"
                  open-on-hover
                  bottom
                  right>
                  <v-btn
                    slot="activator"
                    flat
                    to="/product">产品服务</v-btn>
                    <!-- <v-list>
                      <v-list-tile
                        v-for="(item, index) in productList"
                        :key="index"
                        @click="handleProduct(index)">
                        <v-list-tile-title>{{ item }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list> -->
                </v-menu>
                <v-btn
                  flat
                  to="/news">新闻中心</v-btn>
                <v-btn
                  flat
                  to="/about">关于我们</v-btn>
              </v-toolbar-items>
              <v-spacer/>
              <v-toolbar-items>
                <v-menu
                  :nudge-bottom="72"
                  open-on-hover
                  bottom
                  left
                  transition="slide-y-transition"
                  class="hidden-sm-and-down">
                  <v-btn
                    slot="activator"
                    flat>
                    App下载
                  </v-btn>
                  <img
                    src="/img/code_wx.png"
                    alt="code_wx">
                </v-menu>
                <v-btn
                  v-if="!user.info"
                  flat
                  to="/login">登录</v-btn>
                <v-btn
                  v-if="!user.info"
                  flat
                  to="/register">注册</v-btn>
                <v-menu
                  v-if="user.info"
                  :nudge-bottom="72"
                  bottom
                  left
                  transition="slide-y-transition">
                  <v-btn
                    slot="activator"
                    flat>
                    {{ user.info.userName }}
                  </v-btn>
                  <v-list>
                    <v-list-tile
                      @click="logout">
                      <v-list-tile-title>退出登录</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-toolbar-items>
            </v-layout>
          </v-flex>
        </v-layout>
      </ben-container>
    </v-toolbar>
    <v-content>
      <nuxt />
      <notice
        v-model="notice.show"
        :type="notice.type"
        :title="notice.title"
        :content="notice.content"/>
    </v-content>
    <v-footer
      dark
      height="auto"
    >
      <ben-container>
        <v-layout wrap>
          <v-flex>
            <v-layout
              justify-space-between
              wrap>
              <v-flex
                xs12
                md6>
                <v-layout column>
                  <span class="title py-3">联系方式</span>
                  <span class="body-1 py-1">官方电话：0771-5711786</span>
                  <span class="body-1 py-1">官方客服QQ：2907715046</span>
                  <span class="body-1 py-1">客服邮箱：ngxy-kf@ngcredit.com</span>
                  <span class="body-1 py-1">微信客服：ngxy1610</span>
                  <span class="body-1 py-1">微信公众号：ngxy1610</span>
                  <span class="body-1 py-1">地址：广西南宁市青秀区桃源路39号5楼</span>
                </v-layout>
              </v-flex>
              <v-flex
                xs12
                md6>
                <v-layout
                  class="py-3"
                  wrap>
                  <v-flex
                    text-xs-center
                    xs12
                    md6>
                    <v-img
                      src="/img/code_wx.png"
                      max-height="200"
                      contain/>
                    <div class="body-1 py-1 mb-0">微信公众号</div>
                  </v-flex>
                  <v-flex
                    text-xs-center
                    xs12
                    md6>
                    <v-img
                      src="/img/code_wx.png"
                      max-height="200"
                      contain/>
                    <div class="body-1 py-1 mb-0">App下载</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-divider class="mb-4"/>
          </v-flex>
          <v-flex
            text-xs-center
            xs12>
            <span>&copy;2018 — <strong>广西南国信用管理有限公司</strong></span>
          </v-flex>
        </v-layout>
      </ben-container>
    </v-footer>
  </v-app>
</template>

<script>
import BenContainer from '~/components/container'
import Notice from '~/components/notice'
export default {
  components: {
    BenContainer,
    Notice
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      dark: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    notice() {
      return this.$store.state.notice
    }
  }
}
</script>
