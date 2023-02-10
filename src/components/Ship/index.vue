<template>
  <div class="ship">
    <loader v-if="!shipData" />
    <div v-else>
      <h3 class="info__header">Ship {{ shipData.name }}</h3>
      <div class="ship__box">
        <ship-image 
          v-if="!shipData.image"
          class="ship__image info__image"
        />
        <img
          v-else
          :src="shipData.image"
          :alt="`ship ${shipData.name}`"
          class="ship__image info__image"
        >
        <div class="info__details">
          <p><strong>Type: </strong>{{ shipData.type }}</p>
          <p><strong>Mass: </strong>{{ shipData.mass_kg ? `${shipData.mass_kg} kg` : '?' }}</p>
          <p><strong>Year Built: </strong>{{ shipData.year_built ? shipData.year_built : '?' }}</p>
          <p><strong>Home Port: </strong>{{ shipData.home_port }}</p>
          <p><strong>Legacy ID: </strong>{{ shipData.legacy_id ? shipData.legacy_id : '?' }}</p>
          <p><strong>Roles: </strong>{{ shipData.roles.join(', ') }}</p>
          <p>
            <strong>Launches: </strong>
            <router-link
              v-for="(el, index) in shipData.launches"
              :to="{ name: 'launch', params: { id: el } }"
              class="info__circle"
              :key="`ship_${el}`"
            >{{ index + 1 }}</router-link>
          </p>
          <p v-if="shipData.link">
            <a
              :href="shipData.link"
              target="_blank"
              rel="noopener noreferrer"
              class="info__btn"
            >Read More</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import spacex from '@/services/spacex'
import type { Ship } from '@/types/ships'
import ShipImage from './ShipImage.vue'
import Loader from '@/components/common/Loader.vue'

export default defineComponent({
  components: { RouterLink, ShipImage, Loader },
  props: ['id'],
  setup (props) {
    const shipData = ref<Ship>()
    const getInfo = async () => {
      try {
        const res = await spacex.get(`/v4/ships/${props.id}`)
        shipData.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    return { shipData }
  }
})
</script>

<style lang="scss">
.ship {
  &__image {
    width: 80%;
    @media screen and (min-width: 900px) {
      width: 50%;
    }
  }
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    flex-direction: column;
    padding: 1rem;
    @media screen and (min-width: 900px) {
      flex-direction: row;
    }
  }
}
</style>
