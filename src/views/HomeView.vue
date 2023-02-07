<template>
  <introduction-box title="Explore the Space">
    <div class="home">
      <p>
        This application is based on
        <br>
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer"
        > SpaceX REST API</a>
        <br>
      </p>
      <p>I wish you a pleasant exploration</p>
    </div>
  </introduction-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroductionBox from '@/components/common/IntroductionBox.vue'

export default defineComponent({
  components: { IntroductionBox }
})
</script>

<style lang="scss">
.home {
  font-size: 2vw;
  margin: 1% auto;
  text-shadow: 0 0 5px var(--light);
}
</style>
