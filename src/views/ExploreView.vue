<template>
  <introduction-box title="Explore">
    <p class="introduction__text">Detailed info about <span class="explore__name">{{ route.name }}</span></p>
  </introduction-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute  } from 'vue-router'
import IntroductionBox from '@/components/common/IntroductionBox.vue'

export default defineComponent({
  components: { IntroductionBox },
  setup () {
    const route = useRoute()

    return { route }
  }
})
</script>

<style lang="scss">
.explore__name {
  font-weight: 800;
  text-transform: capitalize;
}
</style>
