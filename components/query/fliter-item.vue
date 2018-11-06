<template>
  <v-flex>
    <v-container
      fluid
      class="py-0">
      <v-layout
        row
        wrap
        align-center>
        <div class="grey--text body-2 pr-4">{{ title }}</div>
        <v-btn
          v-for="(item, index) in list"
          :key="index">
          depressed
          small
          <div class="font-weight-regular">{{ item }}</div>
        </v-btn>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'QueryFilterItem',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
