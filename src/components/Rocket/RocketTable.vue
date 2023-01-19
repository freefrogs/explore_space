<template>
  <div class="rocket__table">
    <p class="rocket__cell">
      <span class="rocket__header">Engines number: </span>
      {{ rocket.engines.number || 'no data' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Engines type: </span>
      {{ rocket.engines.type || 'no data' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Engines version: </span>
      {{ rocket.engines.version || 'no data' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Propellants: </span>
      {{ fuel }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">{{ legs.header }}</span>
      {{ legs.text }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Active: </span>
      {{ rocket.active ? '✔' : '✖' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">First flight: </span>
      {{ rocket.first_flight || 'no data' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Country: </span>
      {{ rocket.country || 'no data' }}
    </p>
    <p class="rocket__cell">
      <span class="rocket__header">Company: </span>
      {{ rocket.company || 'no data' }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import type { Rocket } from '@/types/rockets'

export default defineComponent({
  props: {
    rocket: {
      required: true,
      type: Object as PropType<Rocket>
    }
  },
  setup(props) {
    const fuel = computed(() => {
      let text: string = 'no data'
      if (props.rocket.engines.propellant_1 && props.rocket.engines.propellant_2) {
        text = `${props.rocket.engines.propellant_1}, ${props.rocket.engines.propellant_2}`
      } else if (props.rocket.engines.propellant_1 && !props.rocket.engines.propellant_2) {
        text = props.rocket.engines.propellant_1
      } else if (!props.rocket.engines.propellant_1 && props.rocket.engines.propellant_2) {
        text = props.rocket.engines.propellant_2
      }
      return text
    })

    const legs = computed(() => {
      const el = {
        header: 'Landing legs: ' as string,
        text: '0' as string | number
      }
      if (props.rocket.landing_legs.number && props.rocket.landing_legs.material) {
        el.text = `${props.rocket.landing_legs.number} (${props.rocket.landing_legs.material})`
      } else if (props.rocket.landing_legs.number && !props.rocket.landing_legs.material) {
        el.header = 'Landing legs number: '
        el.text = props.rocket.landing_legs.number
      } else if (!props.rocket.landing_legs.number && props.rocket.landing_legs.material) {
        el.header = 'Landing legs material: '
        el.text = props.rocket.landing_legs.material
      }
      return el
    })

    return { fuel, legs }
  }
})
</script>

<style lang="scss">
.rocket {
  &__table {
    width: 70%;
    background: var(--details-light);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin: 2% auto;
    border: 2px solid var(--details-light);
  }
  &__cell {
    background: var(--light);
    text-align: center;
    padding-top: 1vw;
    font-size: 1vw;
    padding: 1vw 5px 5px;
  }
  &__header {
    font-weight: 800;
  }
}
</style>
