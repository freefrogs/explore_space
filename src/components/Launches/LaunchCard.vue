<template>
  <div class="launch-card launches__grid">
    <span class="launch-card__icon">{{ icon }}</span>
    <span class="launch-card__name">{{ launch.name }}</span>
    <span class="launch-card__date">{{ eventDate }}</span>
    <span>
      <span class="info__btn">Details</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import type { Launch } from '@/types/launches'
import { getShortDate } from '@/utils/dataConversion'

export default defineComponent({
  props: {
    launch: {
      required: true,
      type: Object as PropType<Launch>
    }
  },
  setup (props) {
    const eventDate = computed(() => {
      return getShortDate(props.launch.date_utc)
    })

    const icon = computed(() => {
      return props.launch.success ? '✔' : '✖'
    })

    return { eventDate, icon }
  }
})
</script>

<style lang="scss">
.launch-card {
  &__icon {
    font-size: 1.6vw;
    padding-left: 1.6vw;
  }
  &:nth-child(even) {
    background: var(--details-light-2);
  }
}
</style>
