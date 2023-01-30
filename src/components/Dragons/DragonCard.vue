<template>
  <div class="dragons__grid info-card info__grid">
    <span>{{ dragon.name }}</span>
    <span>{{ dragon.type }}</span>
    <span>{{ dragon.dry_mass_kg }}</span>
    <span>{{ dragon.diameter.meters }}</span>
    <span>
      <router-link
        :to="{ name: 'dragon', params: { id: dragon.id } }"
        class="info__btn"
      >Details</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Dragon } from '@/types/dragons'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  props: {
    dragon: {
      required: true,
      type: Object as PropType<Dragon>
    }
  }
})
</script>
