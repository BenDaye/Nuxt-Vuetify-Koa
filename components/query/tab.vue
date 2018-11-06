<template>
  <v-flex class="mt-4">
    <v-card>
      <v-container
        fluid
        class="pa-0">
        <v-menu
          transition="slide-y-transition"
          offset-y
          bottom
          open-on-hover
          lazy
          :nudge-bottom="2"
          full-width
          :z-index="100">
          <v-tabs
            slot="activator"
            slider-color="orange darken-3"
            v-model="activeTab">
            <v-tab
              v-for="(item, index) in navList"
              :key="index"
              :disabled="index > 10">
              <div
                class="px-4"
                :class="activeTab === index ? 'orange--text text--darken-3' : ''">{{ item.name }}</div>
            </v-tab>
          </v-tabs>
          <v-container
            fluid
            class="pa-0 white">
            <v-layout row>
              <v-flex
                class="tab-menu"
                v-for="(item, index) in navList"
                :key="index">
                <v-layout column>
                  <v-btn
                    :disabled="index > 10"
                    small
                    flat
                    v-for="(childItem, childIndex) in item.children"
                    :key="childIndex"
                    @click="handleClick(item.id, childItem.id)">
                    <div class="body-1">{{ childItem.name }}</div>
                  </v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-menu>
        <v-divider/>
        <v-tabs-items
          v-model="activeTab"
          :style="{ minHeight: '100vh' }">
          <v-tab-item
            v-for="(item, index) in navList"
            :id="item.id"
            :key="index">
            <keep-alive>
              <router-view :name="item.id"/>
            </keep-alive>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import DetailTabItem from "./tab-item.vue";
const _ = require("lodash");
export default {
  name: "DetailTab",
  components: {
    DetailTabItem
  },
  props: {
    value: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      activeTab: 0,
      navList: [
        {
          id: "detailBase",
          name: "基本信息",
          children: [
            { id: "gongshangxinxi", name: "工商信息" },
            { id: "gudongxinxi", name: "股东信息" },
            { id: "duiwaitouzi", name: "对外投资" },
            { id: "zhuyaochengyuan", name: "主要成员" },
            { id: "fenzhijigou", name: "分支机构" },
            { id: "biangengjilu", name: "变更记录" },
            { id: "gongsijianjie", name: "公司简介" }
          ]
        },

        {
          id: "detailLaw",
          name: "法律诉讼",
          children: [
            { id: "beizhixingxinxi", name: "被执行信息" },
            { id: "shixinxinxi", name: "失信信息" },
            { id: "caipanwenshu", name: "裁判文书" },
            { id: "fayuangonggao", name: "法院公告" },
            { id: "kaitinggonggao", name: "开庭公告" }
            // { id: 'sifaxiezhu', name: '司法协助' }
          ]
        },

        {
          id: "detailStatus",
          name: "经营状况",
          children: [
            // { id: 'xuke', name: '行政许可' },
            // { id: 'shuiwu', name: '税务信用' },
            { id: "chanpinxinxi", name: "产品信息" },
            { id: "rongzixinxi", name: "融资信息" },
            { id: "zhaotoubiaoxinxi", name: "招投标信息" },
            { id: "zhaopinxinxi", name: "招聘信息" },
            // { id: 'caiwu', name: '财务总览' },
            // { id: 'jinchukou', name: '进出口信用' },
            // { id: 'weixin', name: '微信公众号' },
            { id: "xinwenyuqing", name: "新闻舆情" }
            // { id: 'gongbao', name: '公报研报' },
            // { id: 'dikuai', name: '地块公示' },
            // { id: 'goudi', name: '购地信息' },
            // { id: 'tudi', name: '土地转让' }
          ]
        },

        {
          id: "detailRisk",
          name: "经营风险",
          children: [
            { id: "jingyingyichang", name: "经营异常" },
            { id: "yanzhongweifa", name: "严重违法" },
            // { id: 'chuzhi', name: '股权出质' },
            // { id: 'xingzheng', name: '行政处罚' },
            // { id: 'choucha', name: '抽查检查' },
            // { id: 'weifa', name: '税收违法' },
            { id: "dongchandiya", name: "动产抵押" },
            { id: "huanbaochufa", name: "环保处罚" },
            // { id: 'qingsuan', name: '清算信息' },
            { id: "sifapaimai", name: "司法拍卖" },
            { id: "tudidiya", name: "土地抵押" },
            { id: "jianyizhuxiao", name: "简易注销" }
            // { id: 'cuigao', name: '公示催告' }
          ]
        },

        {
          id: "detailReport",
          name: "企业年报",
          children: [
            { id: "report2015", name: "2015年度报告" },
            { id: "report2014", name: "2014年度报告" }
          ]
        },

        {
          id: "detailProperty",
          name: "知识产权",
          children: [
            { id: "shangbiaoxinxi", name: "商标信息" },
            { id: "zhuanlixinxi", name: "专利信息" },
            { id: "zhengshuxinxi", name: "证书信息" },
            { id: "zuopinzhuzuoquan", name: "作品著作权" },
            { id: "ruanjianzhuzuoquan", name: "软件著作权" },
            { id: "wangzhanxinxi", name: "网站信息" }
          ]
        }

        // {
        //   id: "history",
        //   name: "历史信息",
        //   children: [
        //     { id: "lishigudong", name: "历史股东" },
        //     { id: "shixin", name: "失信被执行人" },
        //     { id: "beizhixing", name: "被执行人" },
        //     { id: "fayuan", name: "法院公告" },
        //     { id: "caipanwenshu", name: "裁判文书" },
        //     { id: "xingzheng", name: "行政处罚" },
        //     { id: "dongchan", name: "动产抵押" },
        //     { id: "kaiting", name: "开庭公告" },
        //     { id: "chuzhi", name: "股权出质" },
        //     { id: "gongshang", name: "工商信息" },
        //     { id: "touzi", name: "对外投资" },
        //     { id: "xuke", name: "行政许可" }
        //   ]
        // }
      ]
    };
  },
  computed: {
    data() {
      return this.value;
    },
    name() {
      return this.$route.name;
    }
  },
  mounted() {
    this.changeTab();
  },
  methods: {
    changeTab() {
      const name = this.$route.name;
      this.activeTab = _.findIndex(this.navList, { id: name });
    },
    handleClick(id, childId) {
      this.$emit("change-tab", id, childId);
    }
  },
  watch: {
    activeTab(tab) {
      const id = this.navList[tab].id;
      let hash = this.$route.hash;
      // console.log("TCL: activeTab -> hash", hash);
      if (hash) {
        hash = hash.replace("#", "");
        const childId = _.findIndex(this.navList[tab].children, { id: hash });
        if (childId > -1) {
          this.$emit("change-tab", id, hash);
        } else this.$emit("change-tab", id);
      } else this.$emit("change-tab", id);
    },
    name(routeName) {
      this.activeTab = _.findIndex(this.navList, { id: routeName });
    }
  }
};
</script>

<style lang="less">
.tab-menu {
  max-width: 128px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 0;
    border-right: thin solid rgba(0, 0, 0, 0.12);
  }
}
.v-tabs__icon--next,
.v-tabs__icon--prev {
  padding-top: 12px;
}
</style>
