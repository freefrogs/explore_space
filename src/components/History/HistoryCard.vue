<template>
  <div class="history__card">
    <p class="history__card--desc">
      <span class="history__card--date">{{ eventDate }}</span>
      <span class="history__card--title">{{ title }}</span>
    </p>
    <router-link
      class="info__btn history__card--link"
      :to="{ name: 'event', params: { id: eventId } }"
    >read more</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getShortDate } from '@/utils/dataConversion'

export default defineComponent({
  components: { RouterLink },
  props: {
    title: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
    eventId: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const eventDate = computed(() => {
      return getShortDate(props.date)
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
