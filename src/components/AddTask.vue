<template>
  <q-card>

    <ModalHeader>Add Task</ModalHeader>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <NameInput :task="taskToSubmit"></NameInput>
        <q-input v-model="taskToSubmit.date"
                 clearable
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
  import {mapMutations} from 'vuex';
  import ModalHeader from "components/Modal/Header";
  import NameInput from "components/Modal/NameInput";

  export default {
    name: "AddTask",
    components: {NameInput, ModalHeader},
    data() {
      return {
        taskToSubmit: {name: '', complete: false, date: ''},
      }
    },

    methods: {
      ...mapMutations('tasks', ['addTask']),

      submitForm() {
        this.addTask(this.taskToSubmit);
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>

</style>
