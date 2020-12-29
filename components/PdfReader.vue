<template>
  <div id="pdfreader"></div>
</template>

<script>
export default {
  mounted() {
    $(this.$el).flipBook({
            pdfUrl:"pdf/KFN001.pdf",
        });
  }
}

</script>
