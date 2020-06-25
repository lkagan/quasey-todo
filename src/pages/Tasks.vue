<template>
  <q-page class="flex">
    <div class="q-pa-md full-width">
      <div class="row q-mb-md">
        <Search class="column"></Search>
        <Sort class="column"></Sort>
      </div>
      <p v-if="search && !hasTasksTodo">No Search Results</p>
        <div class="relative-position">
            <NoTasks v-if="showNoTasksBanner"></NoTasks>
            <tasks-todo :tasks="tasksTodo" v-if="hasTasksTodo"></tasks-todo>
            <tasks-completd :tasks="tasksCompleted"
                            v-if="hasTasksCompleted"></tasks-completd>
        </div>
      <div class="absolute-bottom text-center q-mb-md">
        <q-btn size="24" round color="primary" icon="add"
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
  import NoTasks from "components/NoTasks";
  import Search from "components/Tools/Search";
  import Sort from "components/Tools/Sort";

  export default {
    name: 'Tasks',

    components: {Sort, NoTasks, TasksCompletd, TasksTodo, AddTask, Task, Search},

    data() {
      return {
        showAddTaskForm: false,
      }
    },

    computed: {
      ...mapGetters('tasks', [
        'tasksCompleted',
        'tasksTodo',
        'hasTasksTodo',
        'hasTasksCompleted',
      ]),

      search() {
        return this.$store.state.tasks.search;
      },

      showNoTasksBanner() {
        return !this.hasTasksTodo && !this.search;
      },
    },

    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTaskForm = true;
      });
    },
  }
</script>
