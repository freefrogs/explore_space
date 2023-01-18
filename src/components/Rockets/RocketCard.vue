<template>
  <div class="rockets__grid rockets__card">
    <span>{{ rocket.name }}</span>
    <span>{{ rocket.height.meters }}</span>
    <span>{{ rocket.diameter.meters }}</span>
    <span>{{ rocket.mass.kg }}</span>
    <span>{{ rocket.engines.number }}</span>
    <span>
      <span class="info__btn">Details</span>
      <!-- <router-link
        :to="{ name: 'rocket', params: { id: rocket.id } }"
        class="info__btn"
      >Details</router-link> -->
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
// import { RouterLink } from 'vue-router'
import type { Rocket } from '@/types/rockets'

export default defineComponent({
  // components: { RouterLink },
  props: {
    rocket: {
      required: true,
      type: Object as PropType<Rocket>
    }
  }
})
</script>

<style lang="scss">
.rockets__card {
  &:nth-child(even) {
    background: var(--details-light-2);
  }
}
</style>
