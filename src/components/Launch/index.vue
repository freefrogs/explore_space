<template>
  <div class="launch">
    <loader v-if="!launchData" />
    <div
      v-else
      class="launch__main"
    >
      <h3 class="info__header">Launch {{ launchData.name }}</h3>
      <img
        :src="launchData.links.patch.small"
        :alt="`${launchData.name} patch`"
        class="launch__patch"
      />
      <div
        class="launch__box launch__box--gap"
        v-if="isPartials"
      >
        <router-link
          v-if="launchData.rocket"
          class="launch__box--title"
          :to="{ name: 'rocket', params: { id: launchData.rocket } }"
        >Rocket</router-link>
        <launch-partial
          title="Crew members"
          :partialArray="launchData.crew"
          pathName="crew_member"
        />
        <launch-partial
          title="Ships"
          :partialArray="launchData.ships"
          pathName="ship"
        />
        <launch-partial
          title="Capsules"
          :partialArray="launchData.capsules"
          pathName="capsule"
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
import { RouterLink } from 'vue-router'
import LaunchLinks from './LaunchLinks.vue'
import LaunchPartial from './LaunchPartial.vue'
import Slider from '@/components/common/Slider.vue'
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { LaunchLinks, LaunchPartial, Slider, RouterLink, Loader },
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
  text-align: center;
  @media screen and (min-width: 900px) {
    text-align: initial;
  }
  &__main {
    width: 90%;
    margin: 0 auto 2%;
    font-size: 1.45rem;
  }
  &__box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &--title {
      font-weight: 800;
    }
    &--gap {
      gap: 20px;
    }
  }
  &__patch {
    max-height: 150px;
    width: auto;
    opacity: 1;
    align-self: center;
    @media screen and (min-width: 900px) {
      opacity: 0.7;
      position: absolute;
      top: -2%;
      right: -5%;
    }
  }
}
</style>
