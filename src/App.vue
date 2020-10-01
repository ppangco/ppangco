<template>
  <v-app>
    <v-container>
      <v-row class="px-4 px-md-0">
        <router-link to="/">
          <v-avatar class="mr-10">
            <v-img src="@/assets/logo.png" />
          </v-avatar>
        </router-link>
        <router-link to="/" tag="button" class="title">Ppang Co.</router-link>
        <v-spacer />
        <v-btn v-for="link of links" :key="link[0]" :to="{path:link[1]}" text>
          {{ link[0] }}
        </v-btn>
      </v-row>
    </v-container>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    links: [
      ['Shounen Joke', '/seraph-of-the-end-chapter-95'],
      ['About', '/about']
    ]
  }),
};
</script>
