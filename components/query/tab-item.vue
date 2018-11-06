<template>
  <v-container
    fluid
    class="pa-0 mb-4">
    <v-layout column>
      <v-flex>
        <v-card flat>
          <v-card-title>
            <div class="title">{{ title }}</div>
            <v-spacer/>
            <div>
              <img
                src="@/assets/query/watermark.png"
                alt="">
            </div>
          </v-card-title>
          <!-- <div class="pa-3">
          </div> -->
          <v-card-text>
            <slot/>
          </v-card-text>
          <!-- <v-divider/> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "DetailTabItem",
  props: {
    title: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
