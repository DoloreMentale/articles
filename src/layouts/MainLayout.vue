<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title>
          Posts
        </q-toolbar-title>

        <q-space/>

        <q-tabs align="center">
          <q-route-tab
            v-for="(route, index) in routes[0].children"
            :key="index"
            :to="({name: route.name})"
            :label="route.name"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import routes from 'src/router/routes'

export default {
  name: 'MainLayout',
  data: () => ({
    routes
  })
}
</script>
