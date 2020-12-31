<template>
  <v-lazy>
          <v-card
          elevation="2"
          outlined
          >
            <v-img :src="require(`~/assets/${issue.cardCoverSrc}`)" />
            <v-card-title>
              {{issue.name}}
            </v-card-title>
          </v-card>
        </v-lazy>
</template>
<script lang="ts">
import Vue from 'vue'
import { Issue } from 'assets/interfaces'
export default Vue.extend({
  props: {
    issue : {
      validator (value: Issue) {
        return true
      }
    }
  },
  mounted() {
    const issue: Issue = this.$props.issue
    $(this.$el).flipBook({
            pdfUrl:require(`~/assets/${issue.pdfSrc}`),
            lightBox:true
        });
  }
})

</script>
