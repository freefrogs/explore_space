<template>
  <div class="crew">
    <h3 class="info__header">Check details about crew members</h3>
    <div class="crew__filters text__center">
      <label>
        Enter phrase:
        <input
          class="info__input"
          type="text"
          v-model="search"
          placeholder="search for..."
        >
      </label>
      <label>
        Agency:
        <select
          class="info__input"
          v-model="agency"
        >
          <option
            v-for="el in agencyOptions"
            :value="el"
            :key="`agency_${el}`"
          >{{ el }}</option>
        </select>
      </label>
    </div>
    <p class="info__paragraph text__center">{{ searchedCrewMembers.length }} results:</p>
    <transition-group
      name="list"
      key="crewList"
      appear
      mode="out-in"
      tag="div"
      v-if="crewList.length"
      class="info__box"
    >
      <div class="crew__grid crew__header">
        <span></span>
        <span>Name</span>
        <span>Agency</span>
        <span>Status</span>
      </div>
      <crew-card
        v-for="member in searchedCrewMembers"
        :crewMember="member"
        :key="member.id"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { Crew } from '@/types/crew'
import CrewCard from './CrewCard.vue'

export default defineComponent({
  components: { CrewCard },
  setup () {
    let crewList = ref<Crew[]>([])
    const getInfo = async () => {
      try {
        const res = await spacex.get('v4/crew')
        crewList.value = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getInfo()

    const search = ref<String>('')
    const agency = ref<String>('all')

    const agencyOptions = computed(() => {
      if (!crewList.value.length) return []
      const options = crewList.value.map(el => el.agency)
      options.push('all')
      return [...new Set(options)]
    })

    const searchedCrewMembers = computed(() => {
      if (!crewList.value.length) return []
      return crewList.value.filter(el => {
        const checkName = el.name.toLowerCase().includes(search.value.toLowerCase())
        const checkAgency = agency.value === 'all' ? true : el.agency === agency.value
        return checkName && checkAgency
      })
    })

    return { crewList, search, agency, agencyOptions, searchedCrewMembers }
  }
})
</script>

<style lang="scss">
.crew {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    padding: 10px;
  }
  &__header * {
    font-weight: 800;
  }
}
</style>
