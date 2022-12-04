<template>
  <nav class="navigation">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink }
})
</script>

<style lang="scss">
.navigation {
  z-index: 10;
}
</style>
