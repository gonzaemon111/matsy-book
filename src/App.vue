<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-bottom-navigation
      v-model="bottomNav"
      color="primary"
    >
      <v-btn value="recent" to="/">
        <span>一覧</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites" to="/add">
        <span>追加</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
// import Table from '@/components/Table.vue'

export default {
  name: 'App',

  // components: {
  //   Table,
  // },

  data: () => ({
    bottomNav: 'recent',
  }),
};
</script>
