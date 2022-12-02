<template>
  <div class="app">
    <stars />
    <header>
      <navigation />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
  <app-footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/common/Navigation.vue'
import AppFooter from '@/components/common/AppFooter.vue';
import Stars from '@/components/animated/Stars.vue'
</script>

<style lang="scss">
.app {
  min-height: 80vh;
  width: 80%;
  margin: 2% auto;
  border: 6px solid var(--dark);
  box-shadow: var(--shadow);
  border-radius: 30px;
}
</style>
