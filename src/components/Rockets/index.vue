<template>
  <div class="rockets">
    <h3 class="info__header">Check details about rockets</h3>
    <p class="info__paragraph text__center">{{ rocketsList.length }} results:</p>
    <div
      v-if="rocketsList.length"
      class="info__box"
    >
      <div class="rockets__grid">
        <strong>Name</strong>
        <strong>Height [m]</strong>
        <strong>Diameter [m]</strong>
        <strong>Mass [kg]</strong>
        <strong>Engines</strong>
      </div>
      <rocket-card
        v-for="rocket in rocketsList"
        :rocket="rocket"
        :key="rocket.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Rocket } from '@/types/rockets'
import RocketCard from './RocketCard.vue'

export default defineComponent({
  components: { RocketCard },
  setup () {
    let rocketsList = ref<Rocket[]>([])
    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/rockets/')
        rocketsList.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { rocketsList }
  }
})
</script>

<style lang="scss">
.rockets {
  &__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-items: center;
    padding: 20px 0;
  }
}
</style>
