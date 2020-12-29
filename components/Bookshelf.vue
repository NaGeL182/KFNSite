<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        v-for="(issue, key) in issues" :key="key"
        cols="4"
      >
        <v-lazy>
          <v-card
          class="pa-4 ma-4"
          elevation="2"
          outlined
          >
            <v-img :src="issue.coversrc" />
            <v-card-title>
              {{issue.name}}
            </v-card-title>
          </v-card>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return { issues: this.$store.state.issues }
  },
})
</script>
