<template>
  <div class="basic basic--height">
    <router-view
      name="stars"
      v-slot="{ Component }"
    >
      <transition
        name="animated"
        mode="out-in"
        appear
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
    <header>
      <navigation />
    </header>
    <main class="main__absolute">
      <router-view v-slot="{ Component }">
        <transition
          name="route"
          mode="out-in"
          appear
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
  <router-view
    name="info"
    class="basic"
    v-slot="{ Component }"
  >
    <transition
      name="animated"
      mode="out-in"
      appear
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
  <app-footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/common/Navigation.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<style lang="scss">
.basic {
  padding: 2rem 1%;
  width: 95%;
  @media screen and (min-width: 1000px) {
    width: 90%;
  }
  @media screen and (min-width: 1400px) {
    width: 80%;
  }
  margin: 2% auto;
  border: 6px solid var(--dark);
  box-shadow: var(--shadow);
  border-radius: 30px;
  overflow: hidden;
  &--height {
    min-height: 80vh;
  }
}
.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
.animated-enter-from, .animated-leave-to {
  opacity: 0;
}
.route-enter-active, .route-leave-active, .animated-enter-active, .animated-leave-active {
  transition: .4s ease-in-out;
}
</style>
