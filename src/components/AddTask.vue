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

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <q-input v-model="taskToSubmit.name"
                 label="Task name"
                 :rules="[val => !!val || 'required']"
        />

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
        <q-btn
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: "AddTask",

    data() {
      return {
        taskToSubmit: {name: '', complete: false, date: ''},
      }
    },

    methods: {
      ...mapMutations('tasks', ['addTask']),

      submitForm() {
        this.addTask(this.taskToSubmit);
      }
    }
  }
</script>

<style scoped>

</style>
