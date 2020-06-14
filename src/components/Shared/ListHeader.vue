<template>
  <q-banner inline-actions :class="bgColor" class="text-white text-center list-header">
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
  export default {
    name: "ListHeader",

    props: {
      bgColor: {
        required: true,
        type: String,
      }

    }
  }

</script>

<style scoped>
  .list-header {
    border-radius: 5px;
  }

</style>
