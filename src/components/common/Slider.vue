<template>
  <div class="slider">
    <div class="slider__view">
      <img
        v-for="(img, index) in imagesArray"
        class="slider__image"
        :class="{'slider__image--active': currentSlide === index}"
        :src="img"
        :key="`slider_img_${index}`"
        alt="spaceX launch"
      >
    </div>
    <div class="slider__arrows">
      <p
        @click="changeSlide('prev')"
        class="slider__btn slider__circle"
      >&#8249;</p>
      <p
        @click="changeSlide('next')"
        class="slider__btn slider__circle"
      >&#8250;</p>
    </div>
    <div class="slider__pagination">
      <span
        v-for="(dot, index) in imagesArray.length"
        class="slider__dot slider__circle"
        :class="{'slider__dot--active': currentSlide === index}"
        :key="`dot_${index}`"
        @click="changeSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    imagesArray: {
      required: true,
      type: Array as PropType<string[]>
    }
  },
  setup (props) {
    let currentSlide = ref<number>(0)
    const changeSlide = (slide: string|number) => {
      if (slide === 'prev') {
        const newSlide = currentSlide.value - 1
        currentSlide.value = currentSlide.value <= 0 ? 0 : newSlide
      } else if (slide === 'next') {
        const newSlide = currentSlide.value + 1
        currentSlide.value = currentSlide.value >= props.imagesArray.length - 1 ? props.imagesArray.length - 1 : newSlide
      } else if (typeof slide === 'number') {
        currentSlide.value = slide
      }
    }

    return { currentSlide, changeSlide }
  }
})
</script>

<style lang="scss">
.slider {
  margin: 4% auto;
  &__view {
    width: 80%;
    height: 50vh;
    margin: 20px auto;
  }
  &__circle {
    border-radius: 50%;
    background: var(--details-light-2);
    transition: .3s ease-in-out;
    cursor: pointer;
    &:hover {
      background: var(--details-light);
    }
  }
  &__arrows {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (min-width: 900px) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }
  }
  &__btn {
    font-size: 3.5rem;
    width: 4.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
  }
  &__dot {
    width: 2.3rem;
    height: 2.3rem;
    &--active {
      background: var(--details-light);
    }
  }
  &__pagination {
    display: none;
    @media screen and (min-width: 900px) {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
  &__image {
    height: 100%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    opacity: 0;
    transition: .3s ease-in-out;
    &--active {
      opacity: 1;
    }
  }
}
</style>
