<template>
  <p
    class="launch__box"
    v-if="isLinks"
  >
    <span class="launch__box--title">Links: </span>
    <a
      v-if="links && links.article"
      :href="links.article"
      target="_blank"
      rel="noopener noreferrer"
      class="info__btn"
    >Article</a>
    <a
      v-if="links && links.presskit"
      :href="links.presskit"
      target="_blank"
      rel="noopener noreferrer"
      class="info__btn"
    >Presskit</a>
    <a
      v-if="links && links.webcast"
      :href="links.webcast"
      target="_blank"
      rel="noopener noreferrer"
      class="info__btn"
    >YouTube</a>
    <a
      v-if="links && links.wikipedia"
      :href="links.wikipedia"
      target="_blank"
      rel="noopener noreferrer"
      class="info__btn"
    >Wikipedia</a>
  </p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import type { LaunchesLinks } from '@/types/launches'

export default defineComponent({
  props: {
    links: {
      required: true,
      type: Object as PropType<LaunchesLinks>
    }
  },
  setup (props) {
    const isLinks = computed(() => {
      return props.links && (props.links.article || props.links.presskit || props.links.webcast || props.links.wikipedia)
    })

    return { isLinks }
  }
})
</script>
