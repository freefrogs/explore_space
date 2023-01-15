<template>
  <p
    v-if="partialArray.length"
    class="launch__box"
  >
    <span class="launch__box--title">{{ title }}:</span>
    <span
      v-for="(el, index) in partialArray"
      :data-rocket="el"
      :key="`${title}${index}`"
      class="launch__box--circle"
    >{{ index + 1 }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    partialArray: {
      required: true,
      type: Array as PropType<String[]>
    },
    title: {
      required: true,
      type: String
    }
  }
})
</script>
