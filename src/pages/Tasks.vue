<template>
  <q-page class="flex">
    <template>
      <div class="q-pa-md full-width">
        <q-list>

          <q-item
            clickable
            v-for="task in tasks" :key="task.id" v-ripple
            @click="task.complete = ! task.complete"
          >
            <q-item-section side top>
              <q-checkbox v-model="task.complete"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ task.name }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption><q-icon name="event" /> {{ task.date }}</q-item-label>
            </q-item-section>

          </q-item>

        </q-list>
      </div>
    </template>

  </q-page>
</template>

<script>
  export default {
    name: 'Tasks',

    data() {
      return {
        tasks: [
          {id: 1, name: 'Go to store', complete: false, date: '5/12/2020' },
          {id: 1, name: 'Get bananas', complete: false, date: '5/13/2020' },
          {id: 1, name: 'Get apples', complete: false, date: '5/14/2020' },
        ],
      }
    }
  }
</script>
