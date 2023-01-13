<template>
  <div class="launches-filters">
    <label>
      Enter phrase:
      <input
        class="info__input"
        type="text"
        v-model="search"
        placeholder="search for..."
      >
    </label>
    <label>
      Success or failure:
      <select
        class="info__select info__input"
        v-model="isSuccess"
      >
        <option
          v-for="el in isSuccessOptions"
          :value="el"
          :key="`isSuccess_${el}`"
        >{{ el }}</option>
      </select>
    </label>
    <label>
      With or without crew:
      <select
        class="info__select info__input"
        v-model="withCrew"
      >
      <option
          v-for="el in withCrewOptions"
          :value="el"
          :key="`withCrew_${el}`"
        >{{ el }}</option>
      </select>
    </label>
    <div>
      <label>
        Launches from:
        <input
          class="info__input"
          type="number"
          min="2007"
          :max="maxYear"
          v-model="yearFrom"
        >
      </label>
      <label>
        To:
        <input
          class="info__input"
          type="number"
          min="2007"
          :max="maxYear"
          v-model="yearTo"
        >
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, onBeforeUnmount } from 'vue'
import { getCurrentYear } from '@/utils/dataConversion'
import useLaunchesStore from '@/stores/launchesStore'
import type { LaunchesFiltersData } from '@/types/launches'

export default defineComponent({
  setup () {
    const maxYear = getCurrentYear()
    const search = ref<String>('')
    const yearFrom = ref<Number>(2007)
    const yearTo = ref<Number>(maxYear)
    const isSuccess = ref<'both'|'success'|'failure'>('both')
    const withCrew = ref<'both'|'with'|'without'>('both')
    const isSuccessOptions = ['both', 'success', 'failure']
    const withCrewOptions = ['both', 'with', 'without']

    const launchesStore = useLaunchesStore()
    const stopWatch = watchEffect(() => {
      launchesStore.updateFiltersData(
        {
          search: search.value,
          yearFrom: yearFrom.value,
          yearTo: yearTo.value,
          isSuccess: isSuccess.value,
          withCrew: withCrew.value
        } as LaunchesFiltersData
      )
    })

    onBeforeUnmount(() => {
      stopWatch()
    })

    return { maxYear, search, yearFrom, yearTo, isSuccess, withCrew, withCrewOptions, isSuccessOptions }
  }
})
</script>

<style lang="scss">
.launches-filters {
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
