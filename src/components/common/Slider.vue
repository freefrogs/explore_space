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
    <p
      @click="changeSlide('prev')"
      class="slider__btn slider__btn--prev slider__circle"
    >&#8249;</p>
    <p
      @click="changeSlide('next')"
      class="slider__btn slider__btn--next slider__circle"
    >&#8250;</p>
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
  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3vw;
    width: 4vw;
    height: 4vw;
    line-height: 4vw;
    text-align: center;
    z-index: 5
    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
    }
  }
  &__dot {
    width: 2vw;
    height: 2vw;
    &--active {
      background: var(--details-light);
    }
  }
  &__pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
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
