<template>
  <q-input v-model="task.name"
           label="Task name"
           autofocus
           clearable
           v-select-all
           :rules="[val => !!val || 'required']"
  />

</template>

<script>
  import { selectAll } from '../../directives/select-all'

  export default {
    name: "NameInput",

    props: {
      task: {
        required: true,
        type: Object,
      }
    },

    directives: {
      selectAll,
    }
  }
</script>

<style scoped>

</style>
