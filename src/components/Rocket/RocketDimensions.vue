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
  width: 20%;
  height: auto;
  * {
    font-weight: 800;
    font-size: 1vw;
    text-align: center;
  }
  .rocket__height {
    position: absolute;
    height: 85%;
    top: 0;
    border-left: 1px solid var(--dark);
    padding-left: 10px;
    right: -1vw;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rocket__diameter {
    position: absolute;
    width: 55%;
    top: -2.3vw;
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
