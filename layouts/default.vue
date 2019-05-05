<template>
  <v-app
    v-scroll="onScroll"
    ref="app"
    :dark="app.dark">
    <v-navigation-drawer
      :mini-variant="app.drawerLeft.miniVariant"
      :clipped="app.drawerLeft.clipped"
      v-model="drawerLeftVisible"
      fixed
      app>
      <v-layout
        column
        fill-height
        align-center>
        <v-spacer />
        <v-btn
          icon
          @click.stop="handleDrawerLeft({ miniVariant: !app.drawerLeft.miniVariant })">
          <v-icon v-html="app.drawerLeft.miniVariant ? 'chevron_right' : 'chevron_left'" />
        </v-btn>
      </v-layout>
      <!--
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :to="item.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      -->
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="app.drawerLeft.clipped"
      :clipped-right="app.drawerRight.clipped"
      fixed
      app>
      <v-btn
        icon
        @click.stop="handleDrawerLeft({ visible: !app.drawerLeft.visible })">
        <v-icon v-html="app.drawerLeft.visible ? 'close' : 'menu'" />
      </v-btn>
      <v-btn
        v-show="$vuetify.breakpoint.lgAndUp"
        icon
        @click.stop="handleDrawerLeft({ clipped: !app.drawerLeft.clipped })">
        <v-icon v-html="'web'" />
      </v-btn>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="handleDrawerRight({ visible: !app.drawerRight.visible })">
        <v-icon v-html="app.drawerRight.visible ? 'close' : 'menu'" />
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
        class="pa-0">
        <nuxt />
        <v-fab-transition>
          <v-btn
            v-show="backToTopVisible"
            color="info"
            fab
            dark
            small
            fixed
            bottom
            right
            @click="handleBackToTop">
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="true"
      :mini-variant="app.drawerRight.miniVariant"
      :clipped="app.drawerRight.clipped"
      v-model="drawerRightVisible"
      fixed
      app>
      <v-layout
        column
        fill-height
        align-center>
        <v-spacer />
        <v-btn
          icon
          @click.stop="handleDrawerRight({ miniVariant: !app.drawerRight.miniVariant })">
          <v-icon v-html="app.drawerRight.miniVariant ? 'chevron_left' : 'chevron_right'" />
        </v-btn>
      </v-layout>
    </v-navigation-drawer>
    <v-footer>
      <span>&copy; 2017</span>
    </v-footer>
    <notice />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import { throttle } from 'lodash'

import Notice from '@/components/notice'
export default {
  components: {
    Notice
  },
  data() {
    return {
      title: 'Vuetify.js',
      backToTopVisible: false
    }
  },
  computed: {
    app() {
      return this.$store.state.app
    },
    drawerLeftVisible: {
      get() {
        return this.$store.state.app.drawerLeft.visible
      },
      set(value) {
        this.handleDrawerLeft({ visible: value })
      }
    },
    drawerRightVisible: {
      get() {
        return this.$store.state.app.drawerRight.visible
      },
      set(value) {
        this.handleDrawerRight({ visible: value })
      }
    }
  },
  methods: {
    ...mapMutations({
      handleThemeChange: 'app/changeTheme',
      handleDrawerLeft: 'app/changeDrawerLeft',
      handleDrawerRight: 'app/changeDrawerRight'
    }),
    onScroll: throttle(function() {
      const scrollHeight =
        window.pageYOffset || document.documentElement.scrollTop
      if (scrollHeight > 100) {
        this.backToTopVisible = true
      } else {
        this.backToTopVisible = false
      }
    }, 500),
    handleBackToTop() {
      const target = this.$refs.app
      this.$vuetify.goTo(target, {
        offset: 0,
        duration: 300,
        easing: 'easeInOutCubic'
      })
    }
  }
}
</script>
