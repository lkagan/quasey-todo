<template>
  <q-input
    v-model="searchField"
    label="Search"
    outlined
    v-select-all
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>
  import {mapState} from 'vuex';
  import {selectAll} from '../../directives/select-all'

  export default {
    directives: {
      selectAll,
    },

    computed: {
      ...mapState('tasks', ['search']),

      searchField: {
        get() {
          return this.search;
        },

        set(value) {
          this.$store.dispatch('tasks/setSearch', value);
        }
      }
    },
  };
</script>

<style scoped>
  .q-input {
    flex-grow: 1;
  }
</style>
