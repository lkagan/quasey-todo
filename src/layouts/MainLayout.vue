<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Quasey Tasks
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs >
        <q-route-tab v-for="item in essentialLinks" :key="item.link" :icon="item.icon"
                     :label="item.title" :to="item.link"/>
      </q-tabs>
    </q-footer>

    <q-drawer
      :width="250"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      elevated
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import EssentialLink from 'components/EssentialLink'

  export default {
    name: 'MainLayout',

    components: {
      EssentialLink
    },

    data() {
      return {
        leftDrawerOpen: false,
        essentialLinks: [
          {
            title: 'Tasks',
            caption: '',
            icon: 'list',
            link: '/'
          },
          {
            title: 'Settings',
            caption: '',
            icon: 'settings',
            link: '/settings'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  .q-drawer {
    .q-item.q-router-link--active, .q-item--active {
      background-color: $grey-9;
      color: $grey-1;
    }

    .q-item {
      color: $grey-5;
    }
  }

  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
