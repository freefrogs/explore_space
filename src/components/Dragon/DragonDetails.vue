<template>
  <div class="dragon__details">
    <div>
      <p class="info__paragraph dragon__details__paragraph"><strong>Heat Shield</strong></p>
      <ul class="dragon__items">
        <li><strong>material: </strong>{{ dragon.heat_shield.material || 'no data' }}</li>
        <li><strong>size: </strong>{{ `${dragon.heat_shield.size_meters} m` || 'no data' }}</li>
        <li><strong>temp: </strong>{{ `${dragon.heat_shield.temp_degrees} deg` || 'no data' }}</li>
        <li><strong>dev partner: </strong>{{ dragon.heat_shield.dev_partner || 'no data' }}</li>
      </ul>
    </div>
    <div
      v-for="(thruster, index) in dragon.thrusters"
      :key="`${thruster.type}_${thruster.amount}_${thruster.pods}`"
    >
      <p class="info__paragraph dragon__details__paragraph"><strong>Thruster {{ index + 1 }}</strong></p>
      <ul class="dragon__items">
        <li><strong>type: </strong>{{ thruster.type || 'no data' }}</li>
        <li><strong>amount: </strong>{{ thruster.amount || 'no data' }}</li>
        <li><strong>pods: </strong>{{ thruster.pods || 'no data' }}</li>
        <li><strong>thrust: </strong>{{ `${thruster.thrust.kN} kN` || 'no data' }}</li>
      </ul>
    </div>
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
.dragon {
  &__details {
    display: flex;
    justify-content: center;
    gap: 10%;
    &__paragraph {
      text-decoration: underline;
      text-decoration-color: var(--details-light);
    }
  }
  &__items {
    font-size: 1vw;
    text-align: left;
  }
}
</style>
