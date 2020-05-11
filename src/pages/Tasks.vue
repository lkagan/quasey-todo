<template>
  <q-page class="flex">
    <template>
      <div class="q-pa-md full-width">
        <q-list separator>

         <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></Task>

        </q-list>
      </div>
    </template>

  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Task from "components/Task";

  export default {
    name: 'Tasks',
    components: {Task},
    computed: {
      ...mapGetters('tasks', ['tasks']),
    }

  }
</script>
