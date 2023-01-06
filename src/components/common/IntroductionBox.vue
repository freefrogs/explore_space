<template>
  <div class="main__absolute">
    <div class="text__center main__centered">
      <h2 class="main__title">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String
    }
  }
})
</script>
