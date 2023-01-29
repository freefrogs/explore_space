<template>
  <div class="ships__grid info__grid ships-card info-card">
    <span>{{ ship.name }}</span>
    <span>{{ ship.type }}</span>
    <span>{{ ship.year_built ? ship.year_built : '?' }}</span>
    <span>
      <router-link
        :to="{ name: 'ship', params: { id: ship.id } }"
        class="info__btn"
      >Details</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import type { Ship } from '@/types/ships'

export default defineComponent({
  components: { RouterLink },
  props: {
    ship: {
      required: true,
      type: Object as PropType<Ship>
    }
  }
})
</script>
