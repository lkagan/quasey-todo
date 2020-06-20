<template>
  <q-input v-model="task.name"
           label="Task name"
           autofocus
           clearable
           v-select-all
           :rules="[val => !!val || 'required']"
  />

</template>

<script>
  export default {
    name: "NameInput",

    props: {
      task: {
        required: true,
        type: Object,
      }
    },

    directives: {
      selectAll: {
        bind(el) {
          const input = el.querySelector('.q-field__native');
          input.addEventListener('focus', () => {
            if (input.value.length) {
              input.select();
            }
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
