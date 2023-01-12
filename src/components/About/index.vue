<template>
  <div class="about">
    <h3 class="info__header">Some facts & data:</h3>
    <about-table :companyInfo="aboutData"/>
    <h3 class="info__header">Important links:</h3>
    <links :links="aboutData.links"/>   
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import useAboutStore from '@/stores/aboutStore'
import Links from './Links.vue'
import AboutTable from './AboutTable.vue'

export default defineComponent({
  components: { Links, AboutTable },
  setup () {
    const aboutStore = useAboutStore()
    const { aboutData } = storeToRefs(aboutStore)
    return { aboutData }
  }
})
</script>

<style lang="scss">
.about {
  padding-bottom: 2%;
}
</style>
