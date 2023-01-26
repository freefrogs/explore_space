<template>
  <div class="history__card">
    <p class="history__card--desc">
      <span class="history__card--date">{{ eventDate }}</span>
      <span class="history__card--title">{{ historyEvent.title }}</span>
    </p>
    <router-link
      class="info__btn history__card--link"
      :to="{ name: 'event', params: { id: historyEvent.id } }"
    >read more</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getShortDate } from '@/utils/dataConversion'
import type { PropType } from 'vue'
import type { HistoryEvent } from '@/types/history'


export default defineComponent({
  components: { RouterLink },
  props: {
    historyEvent: {
      required: true,
      type: Object as PropType<HistoryEvent>
    }
  },
  setup(props) {
    const eventDate = computed(() => {
      return getShortDate(props.historyEvent.event_date_utc)
    })

    return { eventDate }
  }
})
</script>

<style lang="scss">
.history__card {
  padding: 20px 0;
  font-size: 1.1vw;
  border-left: 2px solid var(--details-light);
  display: flex;
  justify-content: space-between;
  align-content: center;
  &::before {
    content: '';
    position: absolute;
    width: calc(1.1vw * 1.6);
    height: calc(1.1vw * 1.6);
    background: var(--light);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid var(--details-light);
    left: calc((-1)*(1.1vw * 1.6 / 2));
  }
  &--desc {
    flex: 3;
    padding: 10px 0;
  }
  &--date {
    padding: 0 5%;
  }
  &--title {
    font-weight: 800;
  }
}
</style>
