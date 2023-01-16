<template>
  <div class="crew-card crew__grid">
    <helmet-icon />
    <span>{{ crewMember.name }}</span>
    <span>{{ crewMember.agency }}</span>
    <span>{{ crewMember.status }}</span>
    <span>
      <span class="info__btn">
        Details
        <!-- <router-link
          :to="{ name: 'crew', params: { id: crewMember.id } }"
          class="info__btn"
        >Details</router-link> -->
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Crew } from '@/types/crew'
import HelmetIcon from './HelmetIcon.vue'

export default defineComponent({
  components: { HelmetIcon },
  props: {
    crewMember: {
      required: true,
      type: Object as PropType<Crew>
    }
  }
})
</script>

<style lang="scss">
.crew-card {
  .icon__helmet {
    margin-left: 20px;
    height: auto;
    width: 50px;
  }
  &:nth-child(even) {
    background: var(--details-light-2);
  }
}
</style>
