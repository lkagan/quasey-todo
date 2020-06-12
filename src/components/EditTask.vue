<template>
  <q-card>

    <ModalHeader>Edit Task</ModalHeader>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <NameInput :task="taskToSubmit"></NameInput>
        <DateInput :task="taskToSubmit"></DateInput>
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
  import DateInput from "components/Modal/DateInput";

  export default {
    name: "EditTask",

    props: {
      task: {
        required: true,
        type: Object,
      },
      id: {
        required: true,
        type: String,
      }
    },

    components: {DateInput, NameInput, ModalHeader},

    data() {
      return {
        taskToSubmit: {},
      }
    },

    methods: {
      ...mapMutations('tasks', ['updateTask']),

      submitForm() {
        this.updateTask({ id: this.id, updates: this.taskToSubmit });
        this.$emit('close');
      }
    },

    created() {
      this.taskToSubmit = { id: this.id, ...this.task };
    }
  }
</script>

<style scoped>

</style>
