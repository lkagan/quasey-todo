<template>
  <q-list separator>
    <Task v-for="(task, key) in tasks"
          :key="key"
          :task="task"
          :id="key"></Task>
  </q-list>
</template>

<script>
  import Task from "components/Task";

  export default {
    name: "TasksCompletd",

    props: {
      tasks: {
        required: true,
        type: Object,
      }
    },

    components: {
      Task,
    },

  }
</script>

<style scoped>

</style>
