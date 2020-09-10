<template>
  <div>
    <v-carousel
      show-arrows-on-hover
      hide-delimiters
      :height="pageHeight"
      :continuous="false"
      v-model="page"
    >
      <v-carousel-item v-for="p of pages" :key="p">
        <img :src="p" class="page">
      </v-carousel-item>
    </v-carousel>
    <v-slider
      dense
      hide-details
      track-color="#cccccc"
      color="#2566de"
      min="0"
      :max="pageCount"
      v-model="page"
    >
      <template v-slot:prepend>
        <p class="body-1 text-no-wrap ma-0">Page {{ pages.length }}</p>
      </template>
      <template v-slot:append>
        <p class="body-1 text-no-wrap ma-0">Page 1</p>
      </template>
    </v-slider>
    <p class="text-center">{{ pageLabel }}</p>
  </div>
</template>

<script>
export default {
  name: 'viz-reader',
  props: {
    pageCount: {
      type: Number,
      default: 1
    },
    folder: {
      type: String,
      required: true
    }
  },
  data: () => ({
    pageHeight: window.innerHeight - 54,
    page: 0,
    pages: []
  }),
  computed: {
    pageLabel() {
      if (this.page === this.pageCount) {
        return 'Page: 1'
      } else {
        return `Pages: ${this.pageCount - this.page + 1} - ${this.pageCount - this.page + 2}`;
      }
    },
  },
  created() {
    for (let i = this.pageCount; i >= 0; i--) {
      this.pages.push(require(`../assets/${this.folder}/${i}.png`));
    }
    this.page = this.pageCount;
  }
}
</script>

<style>
.page {
  height: 100%;
}
</style>