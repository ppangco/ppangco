<template>
  <div>
    <viz-reader :page-count="8" folder="chapter-95" />
    <comment-section />
  </div>
</template>

<script>
import VizReader from '@/components/VizReader.vue'
import CommentSection from '@/components/CommentSection.vue'
export default {
  name: 'seraph-of-the-end-chapter-95',
  metaInfo: {
    title: 'Read Seraph of the End, Chapter 95',
    titleTemplate: null,
    meta: [
      { property: 'og:title', content: 'Read Seraph of the End, Chapter 95 - Unofficial Shounen Joke' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', itemprop: 'image', content: require('@/assets/chapter-95/1.png') },
      { property: 'og:image:secure_url', content: require('@/assets/chapter-95/1.png') },
      { property: 'og:image:alt', content: 'Narumi drinking tea' },
      { property: 'og:url', content: 'https://ppangco.web.app/#/seraph-of-the-end-chapter-95' },
      { property: 'og:description', content: 'In a post-apocalyptic world of vampires vs. humans, Yuichiro brings vengeance upon his vampire overlords!' }
    ]
  },
  components: {
    'viz-reader': VizReader,
    'comment-section': CommentSection
  }
}
</script>