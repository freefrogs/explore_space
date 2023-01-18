<template>
  <div class="crew-member">
    <p
      v-if="!memberData"
      class="info__paragraph text-center"
    >Waiting for data...</p>
    <div v-else>
      <h3 class="info__header">{{ memberData.name }}</h3>
      <div class="crew-member__box">
        <img
          :src="memberData.image"
          :alt="memberData.name"
          class="crew-member__image"
        >
        <div class="crew-member__details">
          <p><span class="crew-member__title">Agency: </span>{{ memberData.agency }}</p>
          <p><span class="crew-member__title">Status: </span>{{ memberData.status }}</p>
          <p>
            <span class="crew-member__title">Launches: </span>
            <router-link
              v-for="(el, index) in memberData.launches"
              :to="{ name: 'launch', params: { id: el } }"
              class="info__circle"
              :key="`crew_${el}`"
            >{{ index + 1 }}</router-link>
          </p>
          <span>
            <a
              :href="memberData.wikipedia"
              target="_blank"
              rel="noopener noreferrer"
              class="info__btn"
            >Wikipedia</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import spacex from '@/services/spacex'
import { RouterLink } from 'vue-router'
import type { Crew } from '@/types/crew'

export default defineComponent({
  components: { RouterLink },
  props: ['id'],
  setup (props) {
    let memberData = ref<Crew>()
    const getInfo = async() => {
      try {
        const res = await spacex.get(`/v4/crew/${props.id}`)
        memberData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { memberData }
  }
})
</script>

<style lang="scss">
.crew-member {
  &__box {
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
  }
  &__image {
    width: 30%;
    height: auto;
    border-radius: 20px 0 0 20px;
    padding-right: 20px;
    border-right: 3px solid var(--details-light);
  }
  &__title {
    font-weight: 800;
  }
  &__details {
    padding-left: 40px;
    font-size: 1.4vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
}
</style>
