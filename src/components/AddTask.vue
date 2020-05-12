<template>
  <q-card>

    <q-card-section class="row">
      <div class="text-h6">Alert</div>
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

    <q-card-section class="q-pt-none">
      <q-input v-model="taskToSubmit.name"
               label="Task name"/>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat
             label="Save"
             color="primary"
             v-close-popup/>
    </q-card-actions>
  </q-card>
</template>

<script>
  export default {
    name: "AddTask",

    data() {
      return {
        taskToSubmit: {name: '', complete: '', date: ''},
      }
    },
  }
</script>

<style scoped>

</style>
