module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = {
          'og:title': 'Read Seraph of the End, Chapter 95 - Unofficial Shounen Joke',
          'og:type': 'website',
          'og:image': 'https://ppangco.web.app/thumb.jpg',
          'og:image:secure_url': 'https://ppangco.web.app/thumb.jpg',
          'og:image:alt': 'Narumi drinking tea',
          'og:url': 'https://ppangco.web.app/#/seraph-of-the-end-chapter-95',
          'og:description': 'In a post-apocalyptic world of vampires vs. humans, Yuichiro brings vengeance upon his vampire overlords!'
        }
      return args
    })
  }
}