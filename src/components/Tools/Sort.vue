<template>
  <q-select filled v-model="sortBy" :options="options" label="Sort by"
            stack-label class="q-ml-sm" emit-value map-options/>

</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: "Sort",

    data() {
      return {
        options: [
          {
            label: 'Name',
            value: 'name',
          }, {
            label: 'Date',
            value: 'date',
          }
        ],
      }
    },

    computed: {
      ...mapState('tasks', ['sort']),

      sortBy: {
        get() {
          return this.sort;
        },

        set(value) {
          this.setSort(value);
        }
      },
    },

    methods: {
      ...mapMutations('tasks', ['setSort']),
    }
  }
</script>

<style scoped>
  .q-select {
    flex: 0 0 112px;
  }
</style>
