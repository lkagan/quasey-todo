<template>
  <q-card>

    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space></q-space>
      <q-btn
        flat
        round
        color="primary"
        icon="close"
        dense
        v-close-popup
      />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input v-model="taskToSubmit.name"
               label="Task name"/>

      <q-input v-model="taskToSubmit.date"
               label="Due date">
        <template v-slot:append>
          <q-icon name="event"
                  class="cursor-pointer">
            <q-popup-proxy transition-show="scale"
                           transition-hide="scale">
              <q-date v-model="taskToSubmit.date"
                      mask="MM/DD/YYYY"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat
             label="Save"
             color="primary"
             v-close-popup/>
    </q-card-actions>
  </q-card>
</template>

<script>
  export default {
    name: "AddTask",

    data() {
      return {
        taskToSubmit: {name: '', complete: '', date: ''},
      }
    },
  }
</script>

<style scoped>

</style>
