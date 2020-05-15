<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space></q-space>
    <q-btn
      flat
      round
      color="primary"
      icon="close"
      dense
      v-close-popup
    />
  </q-card-section>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
