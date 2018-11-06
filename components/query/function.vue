<template>
  <v-container
    fluid
    grid-list-lg>
    <v-card
      v-if="$vuetify.breakpoint.xsOnly"
      flat>
      <v-container fluid>
        <v-layout
          row
          align-center
          justify-space-around>
          <v-flex
            v-for="(item, index) in functionCardList"
            :key="index"
            text-xs-center
            @click="$emit('show-info')">
            <v-btn
              :color="color[index]"
              icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
            <p class="caption">{{ item.title }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-layout
      v-if="!$vuetify.breakpoint.xsOnly"
      row>
      <v-flex
        v-for="(item, index) in functionCardList"
        :key="index"
        xs3
        d-flex>
        <v-card
          :color="color[index]"
          hover>
          <v-card-text @click="$emit('show-info')">
            <v-container
              fluid
              class="pa-0">
              <v-layout
                row
                align-center
                justify-space-between
                wrap>
                <v-flex
                  xs12
                  text-xs-center
                  order-xs2
                  lg6
                  order-lg1>
                  <div class="subheading text-no-wrap white--text">
                    {{ item.title }}
                  </div>
                  <div class="body-2 text-no-wrap white--text">
                    {{ item.subtitle }}
                  </div>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-center
                  order-xs1
                  lg6
                  order-lg2>
                  <v-icon
                    x-large
                    class="white--text">
                    {{ item.icon }}
                  </v-icon>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'QueryFunction',
  data() {
    return {
      functionCardList: [
        {
          title: '查商标',
          subtitle: '2400万+',
          icon: 'pets'
        },
        {
          title: '查专利',
          subtitle: '2000万+',
          icon: 'copyright'
        },
        {
          title: '查失信',
          subtitle: '2000万+',
          icon: 'pan_tool'
        },
        {
          title: '裁判文书',
          subtitle: '3000万+',
          icon: 'chrome_reader_mode'
        },
        {
          title: '著作权',
          subtitle: '1000万+',
          icon: 'verified_user'
        }
      ],
      color: ['blue', 'warning', 'error', 'green', 'primary']
    }
  }
}
</script>
