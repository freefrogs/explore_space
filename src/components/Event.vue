<template>
  <div class="event text__center">
    <p
      v-if="!event"
      class="info__paragraph text__center"
    >Waiting for data...</p>
    <div v-else>
      <h3 class="info__header">{{ event.title }}</h3>
      <h5 class="info__subheader">Date: {{ eventDate }}</h5>
      <p class="info__paragraph">{{ event.details }}</p>
      <a
        v-if="event.links && event.links.article"
        :href="event.links.article"
        target="_blank"
        rel="noopener noreferrer"
        class="main__btn"
      >Read more</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { HistoryEvent } from '@/types/history'

export default defineComponent({
  props: ['id'],
  setup (props) {
    let event = ref<HistoryEvent>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`/v4/history/${props.id}`)
        event.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    const eventDate = computed(() => {
      if (!event.value) return ''
      return new Date(event.value.event_date_utc)
    })
    return { event, eventDate }
  }
})
</script>

<style lang="scss">
.event {
  padding-bottom: 3%;
}
</style>
