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
    titleTemplate: null
  },
  components: {
    'viz-reader': VizReader,
    'comment-section': CommentSection
  }
}
</script>