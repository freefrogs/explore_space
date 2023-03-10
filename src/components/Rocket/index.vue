<template>
  <div class="rocket">
    <loader v-if="!rocketData" />
    <div
      v-else
      class="rocket__main"
    >
      <h3 class="info__header">{{ rocketData.name }} rocket</h3>
      <div class="rocket__details">
        <rocket-dimensions :rocket="rocketData" />
        <rocket-table :rocket="rocketData" />
      </div>
      <p class="rocket__paragraph">{{ rocketData.description }}</p>
      <p class="rocket__paragraph text__center">
        <span>Links: </span>
        <a
          :href="rocketData.wikipedia"
          target="_blank"
          rel="noopener noreferrer"
          class="info__btn"
        >Wikipedia</a>
      </p>
      <slider
        v-if="rocketData.flickr_images.length"
        :imagesArray="rocketData.flickr_images"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import type { Rocket } from '@/types/rockets'
import RocketDimensions from './RocketDimensions.vue'
import RocketTable from './RocketTable.vue'
import Slider from '@/components/common/Slider.vue'
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { RocketDimensions, RocketTable, Slider, Loader },
  props: ['id'],
  setup (props) {
    let rocketData = ref<Rocket>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`/v4/rockets/${props.id}`)
        rocketData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { rocketData }
  }
})
</script>

<style lang="scss">
.rocket {
  &__details {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 900px) {
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
    }
  }
  &__paragraph {
    font-size: 1.2rem;
    margin: 2rem auto;
  }
}
</style>
