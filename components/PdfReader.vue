<template>
  <div id="pdfreader"></div>
</template>

<script>
import $ from 'flip-book'
export default {
  mounted() {
    $(this.$el).FlipBook(
      {
        pdf: 'pdfs/KFN001.pdf'
      }
    )
  }
}

</script>
