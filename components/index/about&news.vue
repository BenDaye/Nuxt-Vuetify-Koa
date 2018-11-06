<template>
  <v-container
    fluid
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        order-xs1
        md4
        order-md1
        d-flex>
        <intro-card
          title="关于我们"
          icon="home"
          no-padding/>
      </v-flex>
      <v-flex
        xs12
        order-xs3
        md8
        order-md2
        lg5
        d-flex>
        <intro-card
          title="新闻中心"
          icon="fiber_new"
          no-padding>
          <v-btn
            slot="more"
            flat
            color="grey"
            to="/news">查看更多</v-btn>
        </intro-card>
      </v-flex>
      <v-flex
        xs12
        order-xs5
        md12
        order-md5
        lg3
        order-lg3
        d-flex>
        <intro-card
          title="人才招聘"
          icon="group"
          no-padding/>
      </v-flex>
      <v-flex
        xs12
        order-xs2
        md4
        order-md3
        lg4
        order-lg4
        d-flex
        class="pt-3">
        <v-card
          hover
          to="/about">
          <v-img
            :aspect-ratio="10/4"
            src="/img/about.jpg"
            max-height="240"/>
          <v-card-text>
            <strong>广西南国信用管理有限公司</strong>（简称“南国信用” ）是一家独立的第三方征信和商业信息服务机构，公司以“让信用实现商业价值”为使命，坚持守法、守信、守心的发展理念，充分利用地方政府在大数据资源上整合的优势，通过技术和业务的创新，以征信业务为核心，逐步建立涵盖征信服务、信用评估、风险控制和精准获客等信用价值链。
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        order-xs4
        md8
        order-md4
        lg5
        order-lg5
        d-flex
        class="pt-3">
        <v-card>
          <v-tabs
            v-model="newsTab"
            slider-color="orange darken-2">
            <v-tab :class="newsTab === 0 ? 'orange--text text--darken-3' : ''">
              公司新闻
            </v-tab>
            <v-tab :class="newsTab === 1 ? 'orange--text text--darken-3' : ''">
              行业动态
            </v-tab>
          </v-tabs>
          <v-divider/>
          <v-tabs-items v-model="newsTab">
            <v-tab-item>
              <v-list two-line>
                <template v-for="(item, index) in newsItems">
                  <v-divider
                    v-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  />

                  <v-list-tile
                    v-else
                    :key="index"
                    @click="handleNews(index)"
                  >

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"/>
                      <v-list-tile-sub-title v-html="item.subtitle"/>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <div class="body-1 grey--text">2018年09月04日</div>
                    </v-list-tile-action>
                  </v-list-tile>
                </template>
              </v-list>
            </v-tab-item>
            <v-tab-item>
              <v-list two-line>
                <template v-for="(item, index) in newsItems">
                  <v-divider
                    v-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  />

                  <v-list-tile
                    v-else
                    :key="index"
                    @click="handleNews(index)"
                  >

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"/>
                      <v-list-tile-sub-title v-html="item.subtitle"/>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <div class="body-1 grey--text">2018年09月04日</div>
                    </v-list-tile-action>
                  </v-list-tile>
                </template>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        order-xs6
        md12
        order-md6
        lg3
        order-lg6
        d-flex
        class="pt-3">
        <v-card
          hover
          to="/about">
          <v-img
            :aspect-ratio="10/8"
            src="/img/employment.jpg"
            max-height="360"/>
          <v-flex>
            <v-btn
              color="error"
              flat
              block
              large
              class="mt-4"
              to="/about">南国征信欢迎您的加入</v-btn>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IntroCard from '~/components/index/intro-card'
export default {
  name: 'IndexAboutNews',
  components: {
    IntroCard
  },
  data() {
    return {
      newsTab: 0,
      newsItems: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '新闻标题1',
          subtitle:
            "<span class='text--primary'>副标题1</span> &mdash; 新闻内容1"
        },
        { divider: true, inset: false },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: '新闻标题2',
          subtitle:
            "<span class='text--primary'>副标题2</span> &mdash; 新闻内容2"
        },
        { divider: true, inset: false },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: '新闻标题3',
          subtitle:
            "<span class='text--primary'>副标题3</span> &mdash; 新闻内容3"
        }
      ]
    }
  },
  methods: {
    handleNews(index) {
      console.log('TCL: handleNews -> index', index)
      this.$router.push({
        name: 'news'
      })
    }
  }
}
</script>
