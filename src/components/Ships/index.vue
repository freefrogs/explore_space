<template>
  <div class="ships">
    <h3 class="info__header">Check out ships info</h3>
    <p class="info__paragraph text__center">{{ shipsList.length }} results:</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Ship } from '@/types/ships'

export default defineComponent({
  setup () {
    const shipsList = ref<Ship[]>([])

    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/ships')
        shipsList.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { shipsList }
  }
})
</script>
