<template>
  <div class="pagination">
    <span
      class="pagination__item pagination__item--show"
      @click="changeActiveItem('prev')"
    >&#8249;</span>
    <span
      v-for="el in pageAmount"
      class="pagination__item"
      :class="{ 'pagination__item--active': el === pageActive, 'pagination__item--show': checkIfVisible(el) }"
      :key="`page-${el}`"
      @click="changeActiveItem(el)"
    >{{ el }}</span>
    <span
      class="pagination__item pagination__item--show"
      @click="changeActiveItem('next')"
    >&#8250;</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeUnmount } from 'vue'

export default defineComponent({
  props: {
    pageAmount: {
      type: Number,
      required: true
    }
  },
  setup (props, { emit }) {
    let pageActive = ref<Number>(1)
    const changeActiveItem = (el:number|'next'|'prev') => {
      if (el === 'next') {
        pageActive.value = pageActive.value >= props.pageAmount ? props.pageAmount : pageActive.value as number + 1
      } else if (el === 'prev') {
        pageActive.value = pageActive.value <= 1 ? 1 : pageActive.value as number - 1
      } else {
        pageActive.value = el
      }
      emit('activePageChange', pageActive.value)
    }

    const checkIfVisible = (el:number) => {
      if (!pageActive.value) return true
      return el <= (pageActive.value as number + 2) && el >= (pageActive.value as number) - 2
    }

    const stopWatch = watch(() => props.pageAmount, () => {
      pageActive.value = 1
      emit('activePageChange', 1)
    })
    onBeforeUnmount(() => {
      stopWatch()
    })

    return { changeActiveItem, pageActive, checkIfVisible }
  }
})
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
  &__item {
    text-align: center;
    font-weight: 800;
    line-height: 30px;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(56, 55, 55);
    background: var(--details-light-2);
    cursor: pointer;
    transition: .3s ease-in-out;
    display: none;
    @media screen and (min-width: 1200px) {
      display: initial;
    }
    &--active {
      background: var(--details-light);
    }
    &--show {
      display: initial;
    }
  }
}
</style>
