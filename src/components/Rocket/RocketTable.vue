<template>
  <div class="rocket__table info__table">
    <p class="info__cell">
      <strong>Engines number: </strong>
      {{ rocket.engines.number || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Engines type: </strong>
      {{ rocket.engines.type || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Engines version: </strong>
      {{ rocket.engines.version || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Propellants: </strong>
      {{ fuel }}
    </p>
    <p class="info__cell">
      <strong>{{ legs.header }}</strong>
      {{ legs.text }}
    </p>
    <p class="info__cell">
      <strong>Active: </strong>
      {{ rocket.active ? '✔' : '✖' }}
    </p>
    <p class="info__cell">
      <strong>First flight: </strong>
      {{ rocket.first_flight || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Country: </strong>
      {{ rocket.country || 'no data' }}
    </p>
    <p class="info__cell">
      <strong>Company: </strong>
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
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
