<template>
  <q-item
    clickable
    v-ripple
    @click="updateTask({id, updates: {complete: !task.complete}})"
    :class="task.complete ? 'text-grey-7' : ''"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.complete" class="no-pointer-events"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label
        caption
        :class="task.complete ? 'text-grey-7' : ''"
      ><q-icon name="event" /> {{ task.date }}</q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: "Task",

    props: {
      'task' : {
        required: true,
        type: Object,
      },
      'id': {
        required: true,
        type: String,
      }
    },

    methods: {
      ...mapMutations('tasks', ['updateTask']),
    }
  }
</script>

<style scoped>

</style>
