<template>
  <div class="about__table" v-if="companyInfo">
    <p class="about__paragraph"><span class="about__table--title">CEO: </span>{{ companyInfo.ceo }}</p>
    <p class="about__paragraph"><span class="about__table--title">COO: </span>{{ companyInfo.coo }}</p>
    <p class="about__paragraph"><span class="about__table--title">CTO: </span>{{ companyInfo.cto }}</p>
    <p class="about__paragraph"><span class="about__table--title">Employees: </span>{{ companyInfo.employees }}</p>
    <p class="about__paragraph"><span class="about__table--title">Founded: </span>{{ companyInfo.founded }}</p>
    <p class="about__paragraph about__paragraph--headquarters">
      <span class="about__table--title">Headquarters: </span>
      <span v-if="companyInfo && companyInfo.headquarters">
        {{ companyInfo.headquarters.address }}<br>
        {{ companyInfo.headquarters.city }}<br>
        {{ companyInfo.headquarters.state }}
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { CompanyInfo } from '@/types/about'

export default defineComponent({
  props: {
    companyInfo: {
      required: true,
      type: Object as PropType<CompanyInfo>
    }
  }
})
</script>

<style lang="scss">
.about {
  &__table {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    background: var(--details-light);
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      width: 80%;
    }
    @media screen and (min-width: 1200px) {
      width: 70%;
      grid-template-columns: repeat(3, 1fr);
    }
    &--title {
      font-weight: 800;
    }
  }
  &__paragraph {
    font-size: 1.2rem;
    background: var(--light);
    padding: 10px;
    &--headquarters {
      display: grid;
      gap: 5px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
