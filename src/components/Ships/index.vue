<template>
  <div class="ships">
    <h3 class="info__header">Check out ships info</h3>
    <div class="ships__filters text__center">
      <label>
        Enter phrase:
        <input
          class="info__input"
          type="text"
          v-model="search"
          placeholder="search for..."
        >
      </label>
      <br class="main--hidden">
      <label>
        Year built from:
        <input
          class="info__input"
          type="number"
          min="1940"
          :max="maxYear"
          v-model="searchYear"
        >
      </label>
    </div>
    <p class="info__paragraph text__center">{{ searchedShips.length }} results:</p>
    <transition-group
      name="list"
      key="ShipsList"
      appear
      mode="out-in"
      tag="div"
      v-if="searchedShips.length"
      class="info__box"
    >
      <div class="ships__grid info__grid">
        <strong>Name</strong>
        <strong>Type</strong>
        <strong>Year Built</strong>
      </div>
      <ship-card
        v-for="ship in searchedShips"
        :ship="ship"
        :key="ship.id"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { Ship } from '@/types/ships'
import { getCurrentYear } from '@/utils/dataConversion'
import ShipCard from './ShipCard.vue'

export default defineComponent({
  components: { ShipCard },
  setup () {
    const shipsList = ref<Ship[]>([])
    const search = ref<string>('')
    const searchYear = ref<number>(1944)
    const maxYear = getCurrentYear()

    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/ships')
        shipsList.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    const searchedShips = computed(() => {
      if (!shipsList.value.length) return []
      return shipsList.value.filter(el => {
        const checkName = el.name.toLowerCase().includes(search.value.toLowerCase())
        const checkYear = el.year_built >= searchYear.value || el.year_built === null
        return checkName && checkYear
      })
    })
    
    return { search, maxYear, searchYear, searchedShips }
  }
})
</script>

<style lang="scss">
.ships {
  &__grid {
    grid-template-columns: 2fr 2fr 1fr 1fr;
  }
}
</style>
