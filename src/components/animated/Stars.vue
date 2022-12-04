<template>
  <div class="stars-box main__absolute">
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="star"
      :style="{ top: star.top, left: star.left, animationDelay: star.delay }"
    ></div>
  </div>
  <morphing-bg />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import type Star from '@/types/Star'
import MorphingBg from '@/components/animated/MorphingBg.vue'

export default defineComponent({
  components: { MorphingBg },
  setup () {
    const stars = ref<Star[]>([])

    const generatePosition = (max = 100) => {
      const randomInteger = Math.floor(Math.random() * (max + 1))
      return `${randomInteger}%`
    }

    const generateDelay = (interval = 3) => {
      const randomNumber = Math.random() * (interval + 1)
      return `${randomNumber}s`
    }

    const generateStars = (amount = 30) => {
      for (let i = 0; i <= amount; i++) {
        const star = {
          top: generatePosition(),
          left: generatePosition(),
          delay: generateDelay()
        }
        stars.value.push(star)
      }
    }

    onMounted(() => {
      generateStars()
    })
    return { stars }
  }
})
</script>

<style lang="scss">
.stars-box {
  background: radial-gradient(ellipse at bottom, #290029 0%, #090a0f 100%);
}

.star {
  background-color: #f0f0f0;
  width: 1.5px;
  height: 1.5px;
  position: absolute;
  border: #f0f0f0 0px solid;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0px 0px 3px 2px rgba(255, 255, 255, 0.5);
  animation: glow 5s infinite ease-in-out
}

@keyframes glow {
  0% {
    opacity: 0;
    transform: scale(1, 1);
  }
  20% {
    opacity: 0.5;
  }
  35% {
    opacity: 1;
  }
  50% {
    transform: scale(2, 2);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
