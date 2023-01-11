<template>
  <introduction-box title="About SpaceX">
    <div v-if="aboutData">
      <p class="introduction__text">{{ aboutData.summary }}</p>
    </div>
  </introduction-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import IntroductionBox from '@/components/common/IntroductionBox.vue'
import spacex from '@/services/spacex'
import useAboutStore from '@/stores/aboutStore'

export default defineComponent({
  components: { IntroductionBox },
  setup () {
    const aboutStore = useAboutStore()
    
    const getInfo = async () => {
      try {
        const res = await spacex.get('/v4/company')
        aboutStore.updateAboutData(res.data)
      } catch(err) {
        console.error(err)
      }
    }

    getInfo()

    const { aboutData } = storeToRefs(aboutStore)

    return { aboutData }
  }
})
</script>
