<template>
  <div class="capsule text__center">
    <loader v-if="!capsuleData" />
    <div v-else>
      <h3 class="info__header">Capsule Serial: {{ capsuleData.serial }}</h3>
      <p class="info__paragraph">Last update: {{ capsuleData.last_update }}</p>
      <div class="capsule__table">
        <p
          v-for="el in capsuleCells"
          :key="el"
          class="capsule__cell"
        >
          <span class="capsule__header">{{ getHeader(el) }}: </span>
          {{ capsuleData[el] }}
        </p>
        <p class="capsule__cell">
          <span class="capsule__header">Launches: </span>
          <router-link
            v-for="(el, index) in capsuleData.launches"
            :to="{ name: 'launch', params: { id: el } }"
            class="info__circle"
            :key="`capsule_${el}`"
          >{{ index + 1 }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import spacex from '@/services/spacex'
import type { Capsule } from '@/types/capsules'
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { RouterLink, Loader },
  props: ['id'],
  setup (props) {
    let capsuleData = ref<Capsule>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`/v4/capsules/${props.id}`)
        capsuleData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    
    const capsuleCells: (keyof Capsule)[] = ['type', 'status', 'reuse_count', 'water_landings', 'land_landings']

    const getHeader = (header: string) => {
      return header.replace('_', ' ')
    }

    return { capsuleData, capsuleCells, getHeader }
  }
})
</script>

<style lang="scss">
.capsule {
  &__table {
    width: 70%;
    margin: 0 auto 2%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--details-light);
  }
  &__cell {
    background: var(--light);
    padding: 20px;
    font-size: 1.1vw;
  }
  &__header {
    font-weight: 800;
    text-transform: capitalize;
  }
}
</style>
