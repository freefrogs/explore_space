<template>
  <div class="crew-card crew__grid info-card">
    <helmet-icon />
    <strong>{{ crewMember.name }}</strong>
    <strong>{{ crewMember.agency }}</strong>
    <strong>{{ crewMember.status }}</strong>
    <strong>
      <router-link
        :to="{ name: 'crew_member', params: { id: crewMember.id } }"
        class="info__btn"
      >Details</router-link>
    </strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import type { Crew } from '@/types/crew'
import HelmetIcon from './HelmetIcon.vue'

export default defineComponent({
  components: { HelmetIcon, RouterLink },
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
}
</style>
