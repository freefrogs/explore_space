<template>
  <div class="launch">
    <p
      v-if="!launchData"
      class="info__paragraph"
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
      <h3 class="info__header">{{ launchData.name }}</h3>
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
        />
        <launch-partial
          title="Ships"
          :partialArray="launchData.ships"
        />
        <launch-partial
          title="Capsules"
          :partialArray="launchData.capsules"
        />
      </div>
      <h5
        class="info__subheader"
        v-if="launchData.date_utc"
      >Launch date: {{ launchDate }}</h5>
      <div class="launch__box">
        <p>
          <span class="launch__box--title">Flight number: </span>
          <span class="launch__box--circle">{{ launchData.flight_number }}</span>
        </p>
        <p>
          <span class="launch__box--title">Success: </span>
          <span class="launch__box--circle">{{ icon }}</span>
        </p>
      </div>
      <p class="info__paragraph">{{ launchData.details }}</p>
      <launch-links :links="launchData.links" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { Launch } from '@/types/launches'
import LaunchLinks from './LaunchLinks.vue'
import LaunchPartial from './LaunchPartial.vue'

export default defineComponent({
  components: { LaunchLinks, LaunchPartial },
  props: ['id'],
  setup (props) {
    let launchData = ref<Launch>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`v4/launches/${props.id}`)
        launchData.value = res.data
        console.log(launchData.value)
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

    return { launchData, isPartials, launchDate, icon }
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
    &--circle {
      display: inline-block;
      text-align: center;
      width: 2vw;
      height: 2vw;
      line-height: 2vw;
      background: var(--details-light-2);
      border-radius: 50%;
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
