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
      class="info__circle"
    >{{ index + 1 }}</span>
    <!-- <router-link
      v-for="(el, index) in partialArray"
      :to="{ name: routeName, params: { id: el } }"
      class="info__circle"
      :key="`${title}${index}`"
      :data-el="el"
    >{{ index + 1 }}</router-link> -->
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
// import { RouterLink } from 'vue-router'

export default defineComponent({
  // components: { RouterLink },
  props: {
    partialArray: {
      required: true,
      type: Array as PropType<String[]>
    },
    title: {
      required: true,
      type: String
    }/* ,
    routeName: {
      required: true,
      type: String
    } */
  }
})
</script>
