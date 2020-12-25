<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-text>
          Kiara Family news is a Magazine style newspaper that brings you weekly issues.
        </v-card-text>
      </v-card>
      <pdf-reader />
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PdfReader from '~/components/PdfReader'
export default {
  components: {
    Logo,
    PdfReader
  }
}
</script>
