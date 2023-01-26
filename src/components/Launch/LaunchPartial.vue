<template>
  <p
    v-if="partialArray.length"
    class="launch__box"
  >
    <span class="launch__box--title">{{ title }}:</span>
    <router-link
      v-for="(el, index) in partialArray"
      :to="{ name: pathName, params: { id: el } }"
      class="info__circle"
      :key="`${title}${index}`"
    >{{ index + 1 }}</router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { RouteParamValueRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  props: {
    partialArray: {
      required: true,
      type: Array as PropType<RouteParamValueRaw[]>
    },
    title: {
      required: true,
      type: String
    },
    pathName: {
      required: true,
      type: String
    }
  }
})
</script>
