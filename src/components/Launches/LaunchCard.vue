<template>
  <div class="launch-card info-card launches__grid">
    <span class="launch-card__icon">{{ icon }}</span>
    <span>{{ launch.name }}</span>
    <span>{{ eventDate }}</span>
    <span>
      <router-link
        :to="{ name: 'launch', params: { id: launch.id } }"
        class="info__btn"
      >Details</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import type { Launch } from '@/types/launches'
import { getShortDate } from '@/utils/dataConversion'

export default defineComponent({
  components: { RouterLink },
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
    font-size: 1.2rem;
    @media screen and (min-width: 900px) {
      font-size: 1.9rem;
    }
  }
}
</style>
