<template>
  <div class="launch">
    <p
      v-if="!launchData"
      class="info__paragraph text__center"
    >Waiting for data...</p>
    <div
      v-else
      class="launch__main"
    >
      <img
        :src="launchData.links.patch.small"
        :alt="`${launchData.name} patch`"
        class="launch__patch"
      />
      <h3 class="info__header">Launch {{ launchData.name }}</h3>
      <div
        class="launch__box"
        v-if="isPartials"
      >
        <span
          v-if="launchData.rocket"
          :data-rocket="launchData.rocket"
          class="launch__box--title"
        >Rocket</span>
        <launch-partial
          title="Crew members"
          :partialArray="launchData.crew"
          routeName="crew_member"
        />
        <launch-partial
          title="Ships"
          :partialArray="launchData.ships"
          routeName="ships"
        />
        <launch-partial
          title="Capsules"
          :partialArray="launchData.capsules"
          routeName="capsule"
        />
      </div>
      <h5
        class="info__subheader"
        v-if="launchData.date_utc"
      >Launch date: {{ launchDate }}</h5>
      <div class="launch__box">
        <p>
          <span class="launch__box--title">Flight number: </span>
          <span class="info__circle">{{ launchData.flight_number }}</span>
        </p>
        <p>
          <span class="launch__box--title">Success: </span>
          <span class="info__circle">{{ icon }}</span>
        </p>
      </div>
      <p class="info__paragraph">{{ launchData.details }}</p>
      <launch-links :links="launchData.links" />
      <slider
        v-if="sliderImages.length"
        :imagesArray="sliderImages"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { Launch } from '@/types/launches'
import LaunchLinks from './LaunchLinks.vue'
import LaunchPartial from './LaunchPartial.vue'
import Slider from '@/components/common/Slider.vue'

export default defineComponent({
  components: { LaunchLinks, LaunchPartial, Slider },
  props: ['id'],
  setup (props) {
    let launchData = ref<Launch>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`v4/launches/${props.id}`)
        launchData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    const isPartials = computed(() => {
      return launchData.value && (launchData.value.rocket || launchData.value.crew.length || launchData.value.ships.length || launchData.value.capsules.length)
    })

    const launchDate = computed(() => {
      if (!launchData.value) return ''
      return new Date(launchData.value.date_utc)
    })

    const icon = computed(() => {
      if (!launchData.value)  return ''
      return launchData.value.success ? '✔' : '✖'
    })

    const sliderImages = computed(() => {
      if (!launchData.value || !launchData.value.links || !launchData.value.links.flickr || !launchData.value.links.flickr.original || !launchData.value.links.flickr.original.length) return []
      return launchData.value.links.flickr.original
    })

    return { launchData, isPartials, launchDate, icon, sliderImages }
  }
})
</script>

<style lang="scss">
.launch {
  &__main {
    width: 90%;
    margin: 0 auto 2%;
    font-size: 1.2vw;
  }
  &__box {
    display: flex;
    gap: 20px;
    align-items: center;
    &--title {
      font-weight: 800;
    }
  }
  &__patch {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 150px;
    width: auto;
  }
}
</style>
