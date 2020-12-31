<template>
  <v-app
  >
    <v-navigation-drawer
      :value="drawer"
      :clipped="clipped"
      :absolute="!fixed"
      :fixed="fixed"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawerToggle" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="themeToggle"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {

  computed: {
    ...mapState({
      clipped: state => state.layout.clipped,
      drawer: state => state.layout.drawer,
      fixed: state => state.layout.fixed,
      items: state => state.layout.items,
      title: state => state.layout.title
    })
  },
  methods: {
    themeToggle () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem("darkTheme", this.$vuetify.theme.dark)
    },
    ...mapMutations([
      'drawerToggle'
    ])
  },
  mounted() {
    const theme = localStorage.getItem("darkTheme");
      if (theme) {
        if (theme == "true") {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
  }
}
</script>
