<template>
  <q-page class="flex">

    <div class="q-pa-md full-width">
      <tasks-todo :tasks="tasksTodo" v-if="Object.keys(tasksTodo).length"></tasks-todo>
      <tasks-completd :tasks="tasksCompleted" v-if="Object.keys(tasksCompleted).length"></tasks-completd>
      <div class="absolute-bottom text-center q-mb-md">
        <q-btn size="24"
               round
               color="primary"
               icon="add"
               @click="showAddTaskForm = true"></q-btn>
      </div>
    </div>

    <q-dialog v-model="showAddTaskForm">
      <AddTask @close="showAddTaskForm = false"></AddTask>
    </q-dialog>

  </q-page>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Task from "components/Task";
  import AddTask from "components/AddTask";
  import TasksTodo from "components/TasksTodo";
  import TasksCompletd from "components/TasksCompleted";

  export default {
    name: 'Tasks',

    components: {TasksCompletd, TasksTodo, AddTask, Task},

    data() {
      return {
        showAddTaskForm: false,
      }
    },

    computed: {
      ...mapGetters('tasks', ['tasksCompleted', 'tasksTodo']),
    }

  }
</script>
