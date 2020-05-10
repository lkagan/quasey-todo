<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Todo
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
      v-model="leftDrawerOpen"
      :breakpoint="1023"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
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
            title: 'Todo',
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
<style>
  @media screen and (min-width: 1024px) {
    .q-footer {
      display: none;
    }
  }
</style>
