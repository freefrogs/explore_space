<template>
  <div class="launches">
    <h3 class="info__header">Select launches criteria</h3>
    <launches-filters />
    <p class="info__paragraph text__center">{{ searchedLaunches.length }} results:</p>
    <transition-group
      name="list"
      key="launchesList"
      appear
      mode="out-in"
      tag="div"
      v-if="searchedLaunches.length"
      class="launches__box"
    >
      <div class="launches__grid launches__header">
        <span>Success?</span>
        <span>Name</span>
        <span>Date</span>
      </div>
      <launch-card
        v-for="launch in currentSearchedLaunches"
        :launch="launch"
        :key="launch.id"
      />
    </transition-group>
    <pagination
      v-show="pages > 1"
      :pageAmount="pages"
      @activePageChange="updateSearchedLaunches"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import spacex from '@/services/spacex'
import useLaunchesStore from '@/stores/launchesStore'
import type { Launch } from '@/types/launches'
import LaunchCard from './LaunchCard.vue'
import LaunchesFilters from './LaunchesFilters.vue'
import Pagination from '@/components/common/Pagination.vue'


export default defineComponent({
  components: { LaunchCard, LaunchesFilters, Pagination },
  setup () {
    const launches = ref<Launch[]>([])
    const getInfo = async () => {
      try {
        const res = await spacex.get('v4/launches')
        launches.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    const launchesStore = useLaunchesStore()
    const { filters } = storeToRefs(launchesStore)
    
    const searchedLaunches = computed(() => {
      if ( !filters.value ) return launches.value
      if (!launches.value.length) return []
      const filteredLaunches = launches.value.filter(el => {
        const newText = `${el.name} ${el.details}`.toLocaleLowerCase()
        const checkTexts = newText.includes(filters.value.search.toLowerCase())

        const launchYear = parseInt(el.date_utc.split('-')[0])
        const checkYear = launchYear >= filters.value.yearFrom && launchYear <= filters.value.yearTo
        let checkSuccess
        if (filters.value.isSuccess === 'both') {
          checkSuccess = true
        } else if (filters.value.isSuccess === 'success') {
          checkSuccess = el.success
        } else {
          checkSuccess = !el.success
        }

        let checkCrew
        if (filters.value.withCrew === 'both') {
          checkCrew = true
        } else if (filters.value.withCrew === 'with') {
          checkCrew = el.crew.length
        } else {
          checkCrew = !el.crew.length
        }

        return checkTexts && checkYear && checkSuccess && checkCrew
      })

      return filteredLaunches
    })

    // Pagination handling
    const pages = computed(() => {
      return Math.ceil(searchedLaunches.value.length/10)
    })

    let currentPage = ref<Number>(1)

    const updateSearchedLaunches = (el:number) => {
      currentPage.value = el
    }

    const currentSearchedLaunches = computed(() => {
      if (!searchedLaunches.value.length) return []
      const start = currentPage.value as number * 10 - 10
      const end = currentPage.value as number * 10
      return searchedLaunches.value.slice(start, end)
    })

    return { searchedLaunches, pages, updateSearchedLaunches, currentSearchedLaunches }
  }
})
</script>

<style lang="scss">
.launches {
  &__box {
    width: 80%;
    margin: 1% auto;
    font-size: 1.1vw;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    align-items: center;
    padding: 20px 0;
  }
  &__header * {
    font-weight: 800;
  }
}
</style>
