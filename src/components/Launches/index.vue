<template>
  <div class="launches">
    <h3 class="info__header">Select launches criteria</h3>
    <transition-group
      name="list"
      appear
      mode="out-in"
      tag="div"
      v-if="launches.length"
      class="launches__box"
    >
      <div class="launches__grid launches__header">
        <span>Success?</span>
        <span>Name</span>
        <span>Date</span>
      </div>
      <launch-card
        v-for="launch in launches"
        :launch="launch"
        :key="launch.id"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Launch } from '@/types/launches'
import LaunchCard from './LaunchCard.vue'

export default defineComponent({
  components: { LaunchCard },
  setup () {
    const launches = ref<Launch[]>([])

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

<style lang="scss">
.launches {
  &__box {
    width: 80%;
    margin: 1% auto;
    font-size: 1.1vw;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    align-items: center;
    padding: 20px 0;
  }
  &__header * {
    font-weight: 800;
  }
}
</style>
