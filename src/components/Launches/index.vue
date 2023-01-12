<template>
  <div>
    launches
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Launche } from '@/types/launches'

export default defineComponent({
  setup () {
    const launches = ref<Launche[]>([])

    const getInfo = async () => {
      try {
        const res = await spacex.get('v4/launches')
        launches.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()
    console.log(launches)

    return { launches }
  }
})
</script>

<style scoped>

</style>