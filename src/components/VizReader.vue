<template>
  <div>
    <div class="carousel" :style="browserSize">
      <v-carousel
        show-arrows-on-hover
        hide-delimiters
        height="100%"
        :continuous="false"
        v-model="page"
      >
        <v-carousel-item v-for="p of pages" :key="p[0]">
          <v-container fill-height class="pa-0">
            <v-row no-gutters class="fill-height">
              <v-col cols="6" class="fill-height text-right">
                <img :src="p[1]" class="page" />
              </v-col>
              <v-col cols="6" class="fill-height">
                <img :src="p[0]" class="page" />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
      <v-slider
        dense
        hide-details
        track-color="#cccccc"
        color="#2566de"
        min="0"
        :max="maxPage"
        v-model="page"
        class="px-5"
      >
        <template v-slot:prepend>
          <p class="body-1 text-no-wrap ma-0">Page {{ pageCount }}</p>
        </template>
        <template v-slot:append>
          <p class="body-1 text-no-wrap ma-0">Page 1</p>
        </template>
      </v-slider>
      <p class="text-center">{{ pageLabel }}</p>
    </div>
    <div class="single-page">
      <v-img v-for="p of mobilePages" :key="p" :src="p" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'viz-reader',
  props: {
    pageCount: {
      type: Number,
      default: 1,
    },
    folder: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    browserSize: { height: `${window.innerHeight}px`},
    page: 0,
    maxPage: null,
    pages: [],
    mobilePages: []
  }),
  computed: {
    pageLabel() {
      if (this.page === this.maxPage) {
        return 'Page: 1'
      } else {
        return `Pages: ${(this.maxPage - this.page) * 2} - ${
          (this.maxPage - this.page) * 2 + 1
        }`
      }
    },
  },
  methods: {
    updateBrowserSize(e) {
      this.browserSize.height = `${window.innerHeight}px`
      console.log(this.browserSize);
    },
    keyboardNav(e) {
      if (e.key === 'ArrowLeft') {
        this.page--
      } else if (e.key === 'ArrowRight') {
        this.page++
      }
    },
  },
  created() {
    let pages = [
      [
        require(`../assets/blank.png`),
        require(`../assets/${this.folder}/1.png`),
      ],
    ]
    let mobilePages = [require(`../assets/${this.folder}/1.png`)]
    for (let i = 2; i < this.pageCount; i += 2) {
      pages.push([
        require(`../assets/${this.folder}/${i}.png`),
        require(`../assets/${this.folder}/${i + 1}.png`),
      ])
      mobilePages.push(require(`../assets/${this.folder}/${i}.png`))
      mobilePages.push(require(`../assets/${this.folder}/${i + 1}.png`))
    }
    this.pages = pages.reverse()
    this.mobilePages = mobilePages
    this.maxPage = Math.ceil(this.pageCount / 2) - 1
    this.page = this.maxPage
    window.addEventListener('resize', this.updateBrowserSize)
    window.addEventListener('keydown', this.keyboardNav)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBrowserSize)
    window.removeEventListener('keydown', this.keyboardNav)
  },
}
</script>

<style scoped>
.page {
  max-width: 100%;
  max-height: 100%;
  align-self: start;
}
.single-page {
  display: none;
}

@media (max-width: 800px) {
  .carousel {
    display: none;
  }
  .single-page {
    display: block;
  }
}
</style>