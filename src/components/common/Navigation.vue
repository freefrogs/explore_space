<template>
  <nav class="navigation">
    <router-link
      v-for="link in mainLinks"
      :key="link"
      class="navigation__link"
      :class="{'navigation__link--active': checkIfLinkIsActive(link)}"
      :to="{ name: link }"
    >{{ link }}</router-link>
    <div class="navigation-explore__box">
      <span
        class="navigation__link navigation__link--explore"
        :class="{'navigation__link--active': checkIfLinkIsActive('explore')}"
      >Explore</span>
      <div class="navigation-explore__links">
        <router-link
          v-for="link in exploreLinks"
          :key="link"
          class="navigation__link"
          :class="{'navigation__link--active': checkIfLinkIsActive(link)}"
          :to="{ name: link }"
        >{{ link }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { RouteRecordName } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  setup() {
    const mainLinks: RouteRecordName[] = [
      'home',
      'about',
      'history'
    ]
    const exploreLinks: RouteRecordName[] = [
      'launches',
      'crew',
      'capsules',
      'rockets',
      'ships',
      'dragons'
    ]
    const route = useRoute()
    const checkIfLinkIsActive = (routeName: RouteRecordName) => {
      if (!exploreLinks.includes(route.name!) && !mainLinks.includes(route.name!) && routeName !== 'explore') return false
      if (routeName === 'explore') {
        return exploreLinks.includes(route.name!)
      } else {
        return routeName === route.name
      }
    }

    return { checkIfLinkIsActive, exploreLinks, mainLinks }
  }
})
</script>

<style lang="scss">
.navigation {
  z-index: 10;
  display: flex;
  padding-left: 10px;
  .navigation__link {
    margin: 10px;
    text-transform: uppercase;
    font-size: 1.5vw;
    border-bottom: 3px solid transparent;
  }
  .navigation__link--explore {
    font-weight: 800;
    display: inline-block;
  }
  .navigation__link--active {
    border-bottom: 3px solid var(--details-light);
  }
  .navigation-explore__links {
    opacity: 0;
    background: var(--light);
    transform: translateY(-1000px);
    transition: .4s ease-in-out;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  .navigation-explore__box {
    width: 20%;
    min-width: 320px;
    height: calc(1.5vw + 20px);
    &:hover .navigation-explore__links {
      opacity: 0.92;
      transform: translateY(0);
    }
  }
}
</style>
