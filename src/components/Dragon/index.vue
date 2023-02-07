<template>
  <div class="dragon text__center">
    <loader v-if="!dragonData" />
    <div
      v-else
      class="dragon__main"
    >
      <h3 class="info__header">{{ dragonData.name }}</h3>
      <dragon-table :dragon="dragonData" />
      <dragon-details :dragon="dragonData" />
      <p class="dragon__paragraph">{{ dragonData.description }}</p>
      <p class="dragon__paragraph text__center">
        <span>Links: </span>
        <a
          :href="dragonData.wikipedia"
          target="_blank"
          rel="noopener noreferrer"
          class="info__btn"
        >Wikipedia</a>
      </p>
      <slider
        v-if="dragonData.flickr_images.length"
        :imagesArray="dragonData.flickr_images"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Dragon } from '@/types/dragons'
import Slider from '@/components/common/Slider.vue'
import DragonTable from './DragonTable.vue'
import DragonDetails from './DragonDetails.vue'
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { Slider, DragonTable, DragonDetails, Loader },
  props: ['id'],
  setup (props) {
    const dragonData = ref<Dragon>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`/v4/dragons/${props.id}`)
        dragonData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { dragonData }
  }
})
</script>

<style lang="scss">
.dragon {
  &__main {
    width: 90%;
    margin: 0 auto 2%;
  }
  &__paragraph {
    font-size: 1vw;
    margin: 2%;
  }
}
</style>
