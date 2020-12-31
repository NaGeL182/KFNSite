<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        v-for="(issue, key) in issues" :key="key"
        cols="4"
      >
        <pdf-reader v-bind:issue="issue"/>
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
