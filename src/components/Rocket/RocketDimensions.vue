<template>
  <div class="rocket__dimensions">
    <rocket-icon />
    <p class="rocket__dimension rocket__height"><span>{{ rocket.height.meters }}m</span></p>
    <p class="rocket__dimension rocket__diameter">{{ rocket.diameter.meters }}m</p>
    <p class="rocket__dimension rocket__mass">{{ rocket.mass.kg }}kg</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import RocketIcon from './RocketIcon.vue'
import type { Rocket } from '@/types/rockets'

export default defineComponent({
  components: { RocketIcon },
  props: {
    rocket: {
      required: true,
      type: Object as PropType<Rocket>
    }
  }
})
</script>

<style lang="scss">
.rocket__dimensions {
  width: 80%;
  height: auto;
  margin-top: 3rem;
  @media screen and (min-width: 500px) {
    width: 60%;
  }
  @media screen and (min-width: 700px) {
    width: 40%;
  }
  @media screen and (min-width: 900px) {
    width: 20%;
  }
  * {
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    transform: rotate(270deg);
  }
  .rocket__height {
    position: absolute;
    height: 85%;
    top: 0;
    border-left: 1px solid var(--dark);
    right: -1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 900px) {
      height: 75%;
      right: -2.5rem;
    }
    @media screen and (min-width: 1200px) {
      height: 80%;
      right: -2rem;
    }
  }
  .rocket__diameter {
    position: absolute;
    width: 55%;
    top: -3rem;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--dark);
    left: 50%;
    transform: translateX(-50%);
  }
  .rocket__mass {
    margin: 10px auto;
  }
}
</style>
