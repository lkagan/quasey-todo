<template>
  <q-page class="flex">

    <div class="q-pa-md full-width">
        <tasks-todo :tasks="tasksTodo"></tasks-todo>
      <hr>
      <tasks-todo :tasks="tasksCompleted"></tasks-todo>
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

  export default {
    name: 'Tasks',

    components: {TasksTodo, AddTask, Task},

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
