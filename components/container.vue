<template>
  <v-container
    :class="noPadding ? 'pa-0' : ''"
    fluid
    fill-height>
    <v-layout>
      <v-flex
        xs12
        md10
        xl8
        offset-md1
        offset-xl2>
        <slot/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BenContainer',
  props: {
    noPadding: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>
