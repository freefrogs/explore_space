<template>
  <div class="capsule-card capsules__grid">
    <span>{{ capsule.serial }}</span>
    <span>{{ capsule.type }}</span>
    <span>{{ capsule.status }}</span>
    <span>
      <router-link
        :to="{ name: 'capsule', params: { id: capsule.id } }"
        class="info__btn"
      >Details</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import type { Capsule } from '@/types/capsules'

export default defineComponent({
  components: { RouterLink },
  props: {
    capsule: {
      required: true,
      type: Object as PropType<Capsule>
    }
  }
})
</script>

<style lang="scss">
.capsule-card {
  &:nth-child(even) {
    background: var(--details-light-2);
  }
}
</style>
