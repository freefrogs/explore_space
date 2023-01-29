<template>
  <div class="dragons">
    <h3 class="info__header">Check details about Dragons</h3>
    <p class="info__paragraph text__center">{{ dragonsList.length }} results:</p>
    <div
      v-if="dragonsList.length"
      class="info__box"
    >
      <div class="dragons__grid info__grid">
        <strong>Name</strong>
        <strong>Type</strong>
        <strong>Mass [kg]</strong>
        <strong>Diameter [m]</strong>
      </div>
      <dragon-card
        v-for="dragon in dragonsList"
        :dragon="dragon"
        :key="dragon.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Dragon } from '@/types/dragons'
import DragonCard from './DragonCard.vue'

export default defineComponent({
  components: { DragonCard },
  setup () {
    const dragonsList = ref<Dragon[]>([])

    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/dragons/')
        dragonsList.value = res.data
        console.log(dragonsList.value)
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { dragonsList }
  }
})
</script>

<style lang="scss">
.dragons {
  &__grid  {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
