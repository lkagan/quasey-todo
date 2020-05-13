<template>
  <q-page class="flex">

    <div class="q-pa-md full-width">
      <q-list separator>

        <Task v-for="(task, key) in tasks"
              :key="key"
              :task="task"
              :id="key"></Task>

      </q-list>
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

  export default {
    name: 'Tasks',

    components: {AddTask, Task},

    data() {
      return {
        showAddTaskForm: false,
      }
    },

    computed: {
      ...mapGetters('tasks', ['tasks']),
    }

  }
</script>
