<template>

  <q-input v-model="task.date"
           clearable
           label="Due date">
    <template v-slot:append>
      <q-icon name="event"
              class="cursor-pointer">
        <q-popup-proxy transition-show="scale"
                       transition-hide="scale">
          <q-date v-model="task.date"
                  mask="MM/DD/YYYY"/>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>

</template>

<script>
  export default {
    name: "DateInput",

    props: {
      task: {
        required: true,
        type: Object,
      }
    }
  }
</script>

<style scoped>

</style>
