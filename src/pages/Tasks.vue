<template>
  <q-page class="flex">
    <template>
      <div class="q-pa-md full-width">
        <q-list separator>

          <q-item
            clickable
            v-for="task in tasks" :key="task.id" v-ripple
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

        </q-list>
      </div>
    </template>

  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Tasks',

    computed: {
      ...mapGetters('tasks', ['tasks']),
    }

  }
</script>
