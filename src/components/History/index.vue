<template>
  <div class="history">
    <h3 class="info__header">Dive in SpaceX history</h3>
    <div class="history__filters text__center">
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
        Events from:
        <input
          class="info__input"
          type="number"
          min="2007"
          :max="maxYear"
          v-model="searchYear"
        >
      </label>
    </div>
    <p class="info__paragraph text__center">{{ searchedEvents.length }} results:</p>
    <transition-group
      name="list"
      key="historyList"
      appear
      mode="out-in"
      tag="div"
      v-if="searchedEvents.length"
      class="history__events"
    >
      <history-card
        v-for="event in searchedEvents"
        :historyEvent="event"
        :key="event.id"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { HistoryEvent } from '@/types/history'
import HistoryCard from './HistoryCard.vue'
import { getCurrentYear } from '@/utils/dataConversion'

export default defineComponent({
  components: { HistoryCard },
  setup () {
    let historyEvents = ref<HistoryEvent[]>([])
    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/history')
        historyEvents.value = res.data
      } catch(err) {
        console.error(err)
      }
    }
    getInfo()

    const maxYear = getCurrentYear()

    let search = ref<String>('')
    let searchYear = ref<Number>(2008)

    const searchedEvents = computed(() => {
      if (!historyEvents.value.length) return []
      return historyEvents.value.filter(el => {
        const checkTexts =  el.title.toLowerCase().includes(search.value.toLowerCase()) || el.details.toLowerCase().includes(search.value.toLowerCase())
        const checkYear = parseInt(el.event_date_utc.split('-')[0]) >= searchYear.value
        return checkTexts && checkYear
      })
    })

    return { searchedEvents, search, searchYear, maxYear }
  }
})
</script>

<style lang="scss">
.history {
  &__events {
    width: 80%;
    margin: 1% auto;
    font-size: 1vw;
  }
  &__filters {
    font-size: 1.1vw;
  }
}
</style>
