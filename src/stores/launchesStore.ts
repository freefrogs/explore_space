import { defineStore } from "pinia";
import type { LaunchesFiltersData } from '@/types/launches'

const useLaunchesStore = defineStore('launchesStore', {
  state: () => ({
    filters: {} as LaunchesFiltersData
  }),
  actions: {
    updateFiltersData(filters:LaunchesFiltersData) {
      this.filters = filters
    }
  }
})

export default useLaunchesStore
