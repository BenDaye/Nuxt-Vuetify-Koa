<template>
  <v-container fluid>
    <v-card>
      <v-responsive :aspect-ratio="16/7">
        <v-tabs
          v-model="shortcutTab"
          slider-color="orange darken-3">
          <v-tab
            :class="shortcutTab === 0 ? 'orange--text text--darken-3' : ''">最新注册公司</v-tab>
          <v-tab
            :class="shortcutTab === 1 ? 'orange--text text--darken-3' : ''">按区域查公司</v-tab>
          <v-tab
            :class="shortcutTab === 2 ? 'orange--text text--darken-3' : ''">按行业查公司</v-tab>
        </v-tabs>
        <v-divider/>
        <v-tabs-items v-model="shortcutTab">
          <v-tab-item>
            <v-container
              fluid
              grid-list-lg>
              <v-layout
                row
                wrap>
                <v-flex
                  v-for="(item, index) in newCompanyList"
                  :key="index"
                  xs12
                  sm4
                  lg2
                  d-flex>
                  <v-card hover>
                    <v-card-text @click="$emit('show-info')">
                      <div class="body-2 accent--text text-no-wrap text-truncate">{{ item.name }}</div>
                      <div class="body-1 grey--text">{{ item.date }}</div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container
              fluid
              grid-list-lg>
              <v-layout
                row
                wrap>
                <v-flex
                  v-for="(item, index) in areaList"
                  :key="index"
                  xs3
                  lg1
                  d-flex>
                  <v-btn
                    color="accent"
                    flat
                    @click="$emit('show-info')">{{ item.name }}</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container
              fluid
              grid-list-lg>
              <v-layout
                row
                wrap>
                <v-flex
                  v-for="(item, index) in industryList"
                  :key="index"
                  xs12>
                  <div class="body-2 pa-3">{{ item.name }}</div>
                  <v-divider/>
                  <v-container
                    fluid
                    grid-list-lg>
                    <v-layout
                      row
                      wrap>
                      <div
                        v-for="(childItem, childIndex) in item.children"
                        :key="childIndex">
                        <v-btn
                          color="accent"
                          flat
                          @click="$emit('show-info')">{{ childItem.name }}</v-btn>
                      </div>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'QueryShortcut',
  data() {
    return {
      shortcutTab: 0,
      newCompanyList: [
        {
          id: 1,
          name: '乾景融资租赁有限公司',
          date: '2018-04-13'
        },
        {
          id: 2,
          name: '东营瑞银能源科技有限公司',
          date: '2018-04-13'
        },
        {
          id: 3,
          name: '中联万国置业有限公司',
          date: '2018-04-13'
        },
        {
          id: 4,
          name: '上海融正房地产开发发展有限公司',
          date: '2018-04-13'
        },
        {
          id: 5,
          name: '英德市莎隆农副产品专业合作社',
          date: '2018-04-13'
        },
        {
          id: 6,
          name: '珠海市尚高建筑劳务有限公司',
          date: '2018-04-13'
        },
        {
          id: 7,
          name: '上海赟美实业有限公司',
          date: '2018-04-13'
        },
        {
          id: 8,
          name: '上海鹏巨企业发展有限公司',
          date: '2018-04-13'
        }
      ],
      areaList: [
        {
          code: '450100',
          name: '南宁'
        },
        {
          code: '450200',
          name: '柳州'
        },
        {
          code: '450300',
          name: '桂林'
        },
        {
          code: '450400',
          name: '梧州'
        },
        {
          code: '450500',
          name: '北海'
        },
        {
          code: '450600',
          name: '防城港'
        },
        {
          code: '450700',
          name: '钦州'
        },
        {
          code: '450800',
          name: '贵港'
        },
        {
          code: '450900',
          name: '玉林'
        },
        {
          code: '451000',
          name: '百色'
        },
        {
          code: '451100',
          name: '贺州'
        },
        {
          code: '451200',
          name: '河池'
        },
        {
          code: '451300',
          name: '来宾'
        },
        {
          code: '451400',
          name: '崇左'
        }
      ],
      industryList: [
        {
          code: 1,
          name: '农、林、牧、渔业',
          children: [
            {
              code: 1,
              name: '农业'
            },
            {
              code: 2,
              name: '林业'
            },
            {
              code: 3,
              name: '畜牧业'
            },
            {
              code: 4,
              name: '渔业'
            },
            {
              code: 5,
              name: '农、林、牧、渔专业及辅助性活动'
            }
          ]
        },

        {
          code: 1,
          name: '采矿业',
          children: [
            {
              code: 1,
              name: '煤炭开采和洗选业'
            },
            {
              code: 1,
              name: '石油和天然气开采业'
            },
            {
              code: 1,
              name: '黑色金属矿采选业'
            },
            {
              code: 1,
              name: '有色金属矿采选业'
            },
            {
              code: 1,
              name: '非金属矿采选业'
            },
            {
              code: 1,
              name: '开采专业及辅助性活动'
            },
            {
              code: 1,
              name: '其他采矿业'
            }
          ]
        },

        {
          code: 1,
          name: '制造业',
          children: [
            {
              code: 1,
              name: '农副食品加工业'
            },
            {
              code: 1,
              name: '食品制造业'
            },
            {
              code: 1,
              name: '酒、饮料和精制茶制造业'
            },
            {
              code: 1,
              name: '烟草制品业'
            },
            {
              code: 1,
              name: '纺织业'
            },
            {
              code: 1,
              name: '纺织服装、服饰业'
            },
            {
              code: 1,
              name: '皮革、毛皮、羽毛及其制品和制鞋业'
            },
            {
              code: 1,
              name: '木材加工和木、竹、藤、棕、草制品业'
            },
            {
              code: 1,
              name: '家具制造业'
            },
            {
              code: 1,
              name: '造纸和纸制品业'
            },
            {
              code: 1,
              name: '印刷和记录媒介复制业'
            },
            {
              code: 1,
              name: '文教、工美、体育和娱乐用品制造业'
            },
            {
              code: 1,
              name: '石油、煤炭及其他燃料加工业'
            },
            {
              code: 1,
              name: '化学原料和化学制品制造业'
            },
            {
              code: 1,
              name: '医药制造业'
            },
            {
              code: 1,
              name: '化学纤维制造业'
            },
            {
              code: 1,
              name: '橡胶和塑料制品业'
            },
            {
              code: 1,
              name: '非金属矿物制品业'
            },
            {
              code: 1,
              name: '黑色金属冶炼和压延加工业'
            },
            {
              code: 1,
              name: '有色金属冶炼和压延加工业'
            },
            {
              code: 1,
              name: '金属制品业'
            },
            {
              code: 1,
              name: '通用设备制造业'
            },
            {
              code: 1,
              name: '专用设备制造业'
            },
            {
              code: 1,
              name: '汽车制造业'
            },
            {
              code: 1,
              name: '铁路、船舶、航空航天和其他运输设备制造业'
            },
            {
              code: 1,
              name: '电气机械和器材制造业'
            },
            {
              code: 1,
              name: '计算机、通信和其他电子设备制造业'
            },
            {
              code: 1,
              name: '仪器仪表制造业'
            },
            {
              code: 1,
              name: '其他制造业'
            },
            {
              code: 1,
              name: '废弃资源综合利用业'
            },
            {
              code: 1,
              name: '金属制品、机械和设备修理业'
            }
          ]
        },

        {
          code: 1,
          name: '电力、热力、燃气及水生产和供应业',
          children: [
            {
              code: 1,
              name: '电力、热力生产和供应业'
            },
            {
              code: 1,
              name: '燃气生产和供应业'
            },
            {
              code: 1,
              name: '水的生产和供应业'
            }
          ]
        },

        {
          code: 1,
          name: '建筑业',
          children: [
            {
              code: 1,
              name: '房屋建筑业'
            },
            {
              code: 1,
              name: '土木工程建筑业'
            },
            {
              code: 1,
              name: '建筑安装业'
            },
            {
              code: 1,
              name: '建筑装饰、装修和其他建筑业'
            }
          ]
        },

        {
          code: 1,
          name: '批发和零售业',
          children: [
            {
              code: 1,
              name: '批发业'
            },
            {
              code: 1,
              name: '零售业'
            }
          ]
        },

        {
          code: 1,
          name: '交通运输、仓储和邮政业',
          children: [
            {
              code: 1,
              name: '铁路运输业'
            },
            {
              code: 1,
              name: '道路运输业'
            },
            {
              code: 1,
              name: '水上运输业'
            },
            {
              code: 1,
              name: '航空运输业'
            },
            {
              code: 1,
              name: '管道运输业'
            },
            {
              code: 1,
              name: '多式联运和运输代理业'
            },
            {
              code: 1,
              name: '装卸搬运和仓储业'
            },
            {
              code: 1,
              name: '邮政业'
            }
          ]
        },

        {
          code: 1,
          name: '住宿和餐饮业',
          children: [
            {
              code: 1,
              name: '住宿业'
            },
            {
              code: 1,
              name: '餐饮业'
            }
          ]
        },

        {
          code: 1,
          name: '信息传输、软件和信息技术服务业',
          children: [
            {
              code: 1,
              name: '电信、广播电视和卫星传输服务'
            },
            {
              code: 1,
              name: '互联网和相关服务'
            },
            {
              code: 1,
              name: '软件和信息技术服务业'
            }
          ]
        },

        {
          code: 1,
          name: '金融业',
          children: [
            {
              code: 1,
              name: '货币金融服务'
            },
            {
              code: 1,
              name: '资本市场服务'
            },
            {
              code: 1,
              name: '保险业'
            },
            {
              code: 1,
              name: '其他金融业'
            }
          ]
        },

        {
          code: 1,
          name: '房地产业',
          children: [
            {
              code: 1,
              name: '房地产业'
            }
          ]
        },

        {
          code: 1,
          name: '租赁和商务服务业',
          children: [
            {
              code: 1,
              name: '租赁业'
            },
            {
              code: 1,
              name: '商务服务业'
            }
          ]
        },

        {
          code: 1,
          name: '科学研究和技术服务业',
          children: [
            {
              code: 1,
              name: '研究和试验发展'
            },
            {
              code: 1,
              name: '专业技术服务业'
            },
            {
              code: 1,
              name: '科技推广和应用服务业'
            }
          ]
        },

        {
          code: 1,
          name: '水利、环境和公共设施管理业',
          children: [
            {
              code: 1,
              name: '水利管理业'
            },
            {
              code: 1,
              name: '生态保护和环境治理业'
            },
            {
              code: 1,
              name: '公共设施管理业'
            },
            {
              code: 1,
              name: '土地管理业'
            }
          ]
        },

        {
          code: 1,
          name: '居民服务、修理和其他服务业',
          children: [
            {
              code: 1,
              name: '居民服务业'
            },
            {
              code: 1,
              name: '机动车、电子产品和日用产品修理业'
            },
            {
              code: 1,
              name: '其他服务业'
            }
          ]
        },

        {
          code: 1,
          name: '教育',
          children: [
            {
              code: 1,
              name: '教育'
            }
          ]
        },

        {
          code: 1,
          name: '卫生和社会工作',
          children: [
            {
              code: 1,
              name: '卫生'
            },
            {
              code: 1,
              name: '社会工作'
            }
          ]
        },
        {
          code: 1,
          name: '文化、体育和娱乐业',
          children: [
            { code: 1, name: '新闻和出版业' },
            { code: 1, name: '广播、电视、电影和录音制作业' },
            { code: 1, name: '文化艺术业' },
            { code: 1, name: '体育' },
            { code: 1, name: '娱乐业' }
          ]
        },

        {
          code: 1,
          name: '公共管理、社会保障和社会组织',
          children: [
            { code: 1, name: '中国共产党机关' },
            { code: 1, name: '国家机构' },
            { code: 1, name: '人民政协、民主党派' },
            { code: 1, name: '社会保障' },
            { code: 1, name: '群众团体、社会团体和其他成员组织' },
            { code: 1, name: '基层群众自治组织及其他组织' }
          ]
        },

        {
          code: 1,
          name: '国际组织',
          children: [{ code: 1, name: '国际组织' }]
        }
      ]
    }
  }
}
</script>
