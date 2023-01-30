<template>
  <div class="dragon__table info__table">
    <p class="info__cell">
      <strong>Type: </strong>
      {{ dragon.type || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Active: </strong>
      {{ dragon.active ? '✔' : '✖' }}
    </p>
    <p class="info__cell">
      <strong>First flight: </strong>
      {{ dragon.first_flight || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Mass: </strong>
      {{ `${dragon.dry_mass_kg} kg` || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Diameter: </strong>
      {{ `${dragon.diameter.meters} m` || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Height with Trunk: </strong>
      {{ `${dragon.height_w_trunk.meters} m` || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Crew Capacity: </strong>
      {{ `${dragon.crew_capacity}` || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Sidewall Angle: </strong>
      {{ `${dragon.sidewall_angle_deg} deg` || 'no data' }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Dragon } from '@/types/dragons'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    dragon: {
      required: true,
      type: Object as PropType<Dragon>
    }
  }
})
</script>

<style lang="scss">
.dragon__table {
  grid-template-columns: repeat(4, 1fr);
}
</style>
