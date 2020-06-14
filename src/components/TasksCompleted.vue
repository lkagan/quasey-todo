<template>
  <div class="q-mt-lg">
    <ListHeader bgColor="bg-grey-4">Completed</ListHeader>
    <q-list separator>
      <Task v-for="(task, key) in tasks"
            :key="key"
            :task="task"
            :id="key"></Task>
    </q-list>
  </div>
</template>

<script>
  import Task from "components/Task";
  import ListHeader from "components/Shared/ListHeader";

  export default {
    name: "TasksCompletd",

    props: {
      tasks: {
        required: true,
        type: Object,
      }
    },

    components: {
      ListHeader,
      Task,
    },

  }
</script>

<style scoped>

</style>
