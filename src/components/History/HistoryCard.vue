<template>
  <div class="history__card">
    <p class="history__card--desc">
      <span class="history__card--date">{{ eventDate }}</span>
      <span class="history__card--title">{{ historyEvent.title }}</span>
    </p>
    <span>
      <router-link
        class="info__btn history__card--link"
        :to="{ name: 'event', params: { id: historyEvent.id } }"
      >read more</router-link>
    </span>
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
  font-size: 0.8rem;
  border-left: 2px solid var(--details-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 900px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
  }
  &::before {
    content: '';
    position: absolute;
    width: calc(1.3rem * 1.5);
    height: calc(1.3rem * 1.5);
    background: var(--light);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid var(--details-light);
    left: calc((-1)*(1.3rem * 1.5 / 2));
  }
  &--desc {
    flex: 3;
    padding: 0.5rem 1rem 0.5rem 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 900px) {
      display: block;
    }
  }
  &--date {
    padding: 0 5%;
  }
  &--title {
    font-weight: 800;
  }
}
</style>
