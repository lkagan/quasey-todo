<template>
  <q-item
    clickable
    v-ripple
    @click="task.complete = ! task.complete"
    :class="task.complete ? 'text-grey-7' : ''"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.complete"/>
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
  }
</script>

<style scoped>

</style>
