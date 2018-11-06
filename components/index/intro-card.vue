<template>
  <v-container
    :class="noPadding ? 'pa-0' : ''"
    fluid>
    <v-layout column>
      <v-flex>
        <v-container
          fluid
          class="pa-0">
          <v-layout
            row
            align-center
            justify-space-between>
            <v-flex
              class="pt-4 pb-3">
              <span
                :style="{ color: '#EF6C00' }"
                class="title">
                <v-icon
                  v-if="icon"
                  color="orange darken-3">
                  {{ icon }}
                </v-icon>
                {{ title }}
              </span>
            </v-flex>
            <slot name="more"/>
          </v-layout>
        </v-container>
        <v-divider/>
      </v-flex>
      <v-flex
        v-if="$slots.default"
        class="pt-3">
        <slot/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container.vue'
export default {
  name: 'IntroCard',
  components: {
    BenContainer
  },
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    icon: {
      type: String,
      default() {
        return ''
      }
    },
    noPadding: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>
