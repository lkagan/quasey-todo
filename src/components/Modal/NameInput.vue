<template>
  <q-input v-model="task.name"
           label="Task name"
           autofocus
           clearable
           :rules="[val => !!val || 'required']"
  />

</template>

<script>
  export default {
    name: "NameInput",

    props: {
      task: {
        required: true,
        type: Object,
      }
    }

  }
</script>

<style scoped>

</style>
