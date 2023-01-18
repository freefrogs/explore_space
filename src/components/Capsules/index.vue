<template>
  <div class="capsules">
    <h3 class="info__header">Check out capsules info</h3>
    <div class="crew__filters text__center">
      <label>
        Type:
        <select
          class="info__input"
          v-model="type"
        >
          <option
            v-for="(el, index) in typeOptions"
            :value="el"
            :key="`type_${index}`"
          >{{ el }}</option>
        </select>
      </label>
      <label>
        Status:
        <select
          class="info__input"
          v-model="status"
        >
          <option
            v-for="(el, index) in statusOptions"
            :value="el"
            :key="`status_${index}`"
          >{{ el }}</option>
        </select>
      </label>
    </div>
    <p class="info__paragraph text__center">{{ searchedCapsules.length }} results:</p>
    <transition-group
      name="list"
      key="searchedCapsules"
      appear
      mode="out-in"
      tag="div"
      v-if="searchedCapsules.length"
      class="info__box"
    >
      <div class="capsules__grid capsules__header">
        <span>Serial</span>
        <span>Type</span>
        <span>Status</span>
      </div>
      <capsule-card
        v-for="capsule in searchedCapsules"
        :capsule="capsule"
        :key="capsule.id"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import spacex from '@/services/spacex'
import type { Capsule } from '@/types/capsules'
import CapsuleCard from './CapsuleCard.vue'

export default defineComponent({
  components: { CapsuleCard },
  setup () {
    let capsulesList = ref<Capsule[]>([])
    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/capsules')
        capsulesList.value = res.data
      } catch (err) {
        console.log(err)
      }
    }
    getInfo()

    const type = ref<String>('all')
    const status = ref<String>('all')
    const typeOptions = ['all', 'Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0']
    const statusOptions = ['all', 'unknown', 'active', 'retired', 'destroyed']

    const searchedCapsules = computed(() => {
      if (!capsulesList.value.length) return []
      return capsulesList.value.filter(el => {
        const checkType = type.value === 'all' ? true : el.type === type.value
        const checkStatus = status.value === 'all' ? true : el.status === status.value
        return checkType && checkStatus
      })
    })

    return { capsulesList, type, status, typeOptions, statusOptions, searchedCapsules }
  }
})
</script>

<style lang="scss">
.capsules {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 20px 0;
  }
  &__header * {
    font-weight: 800;
  }
}
</style>
