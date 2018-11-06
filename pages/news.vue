<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout column>
      <v-img
        :height="$vuetify.breakpoint.xsOnly ? 180 : 360"
        src="/img/news/banner-1.jpg"
        gradient="to top, rgba(0, 0, 0, .1), rgba(0, 0, 0,.5)">
        <ben-container>
          <v-layout
            fill-height
            column
            justify-center>
            <div class="display-1 white--text">新闻中心</div>
            <div class="headline white--text">NEWS</div>
          </v-layout>
        </ben-container>
      </v-img>
      <ben-container>
        <v-container
          :grid-list-lg="!$vuetify.breakpoint.xsOnly"
          fluid>
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              lg2>
              <v-card :flat="$vuetify.breakpoint.xsOnly">
                <v-list v-if="!$vuetify.breakpoint.xsOnly">
                  <v-list-tile
                    @click="newsTab = 0">
                    <v-list-tile-content>
                      <v-btn
                        :flat="newsTab !== 0"
                        block
                        depressed
                        color="orange darken-3 white--text"
                        large>企业新闻</v-btn>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider/>
                  <v-list-tile
                    @click="newsTab = 1">
                    <v-list-tile-content>
                      <v-btn
                        :flat="newsTab !== 1"
                        block
                        depressed
                        color="orange darken-3 white--text"
                        large>行业动态</v-btn>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-tabs
                  v-if="$vuetify.breakpoint.xsOnly"
                  v-model="newsTab"
                  centered
                  slider-color="orange darken-3">
                  <v-tab :class="newsTab === 0 ? 'orange--text text--darken-3' : ''">企业新闻</v-tab>
                  <v-tab :class="newsTab === 1 ? 'orange--text text--darken-3' : ''">行业动态</v-tab>
                </v-tabs>
              </v-card>

            </v-flex>
            <v-flex
              xs12
              lg10>
              <v-tabs-items v-model="newsTab">
                <v-tab-item>
                  <v-card>
                    <v-responsive :aspect-ratio="16/10">
                      <v-card-text>
                        <v-list two-line>
                          <template v-for="(item, index) in newsList">
                            <v-list-tile
                              :key="item.title"
                              @click="handleNews(index)">
                              <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <div class="body-1 grey--text">{{ item.update }}</div>
                              </v-list-tile-action>
                            </v-list-tile>
                            <v-divider :key="index"/>
                          </template>
                        </v-list>
                        <v-container>
                          <v-layout justify-center>
                            <v-pagination
                              v-model="pageIndex"
                              :length="1"
                              color="primary"
                              total-visible="10"/>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                    </v-responsive>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>
                    <v-responsive :aspect-ratio="16/10">
                      <v-card-text>
                        <v-list two-line>
                          <template v-for="(item, index) in trendsList">
                            <v-list-tile
                              :key="item.title"
                              @click="handleNews(index)">
                              <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <div class="body-1 grey--text">{{ item.update }}</div>
                              </v-list-tile-action>
                            </v-list-tile>
                            <v-divider :key="index"/>
                          </template>
                        </v-list>
                        <v-container>
                          <v-layout justify-center>
                            <v-pagination
                              v-model="pageIndex"
                              :length="1"
                              color="primary"
                              total-visible="10"/>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                    </v-responsive>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-flex>
          </v-layout>
        </v-container>
      </ben-container>
    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container'
export default {
  name: 'NewsPage',
  components: {
    BenContainer
  },
  data() {
    return {
      newsTab: 0,
      pageIndex: 1,
      newsList: [
        {
          title: '新闻标题1',
          subtitle: '副标题1',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题2',
          subtitle: '副标题2',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题3',
          subtitle: '副标题3',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题4',
          subtitle: '副标题4',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题5',
          subtitle: '副标题5',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题6',
          subtitle: '副标题6',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题7',
          subtitle: '副标题7',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题8',
          subtitle: '副标题8',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题9',
          subtitle: '副标题9',
          update: '2018年09月04日'
        },
        {
          title: '新闻标题10',
          subtitle: '副标题10',
          update: '2018年09月04日'
        }
      ],
      trendsList: [
        {
          title: '动态标题1',
          subtitle: '副标题1',
          update: '2018年09月04日'
        },
        {
          title: '动态标题2',
          subtitle: '副标题2',
          update: '2018年09月04日'
        },
        {
          title: '动态标题3',
          subtitle: '副标题3',
          update: '2018年09月04日'
        },
        {
          title: '动态标题4',
          subtitle: '副标题4',
          update: '2018年09月04日'
        },
        {
          title: '动态标题5',
          subtitle: '副标题5',
          update: '2018年09月04日'
        },
        {
          title: '动态标题6',
          subtitle: '副标题6',
          update: '2018年09月04日'
        },
        {
          title: '动态标题7',
          subtitle: '副标题7',
          update: '2018年09月04日'
        },
        {
          title: '动态标题8',
          subtitle: '副标题8',
          update: '2018年09月04日'
        },
        {
          title: '动态标题9',
          subtitle: '副标题9',
          update: '2018年09月04日'
        },
        {
          title: '动态标题10',
          subtitle: '副标题10',
          update: '2018年09月04日'
        }
      ]
    }
  },
  methods: {
    handleNews(index) {
      console.log('TCL: handleNews -> index', index)
    }
  }
}
</script>
