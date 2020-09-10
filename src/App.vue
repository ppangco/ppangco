<template>
  <v-app>
    <router-link to="/seraph-of-the-end-chapter-95">Hi</router-link>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
