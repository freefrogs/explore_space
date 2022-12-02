<template>
  <div class="app">
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
    <main>
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
  <app-footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/common/Navigation.vue'
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<style lang="scss">
.app {
  min-height: 80vh;
  width: 80%;
  margin: 2% auto;
  border: 6px solid var(--dark);
  box-shadow: var(--shadow);
  border-radius: 30px;
  overflow: hidden;
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
