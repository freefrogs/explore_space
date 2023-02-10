<template>
  <div class="crew-member">
    <loader v-if="!memberData" />
    <div v-else>
      <h3 class="info__header">{{ memberData.name }}</h3>
      <div class="crew-member__box">
        <img
          :src="memberData.image"
          :alt="memberData.name"
          class="crew-member__image info__image"
        >
        <div class="info__details">
          <p><strong>Agency: </strong>{{ memberData.agency }}</p>
          <p><strong>Status: </strong>{{ memberData.status }}</p>
          <p>
            <strong>Launches: </strong>
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
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { RouterLink, Loader },
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
    flex-wrap: wrap;
  }
  &__image {
      width: 80%;
    @media screen and (min-width: 900px) {
      width: 30%;
    }
  }
}
</style>
