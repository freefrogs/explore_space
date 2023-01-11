import { defineStore } from "pinia";
import type { CompanyInfo } from '@/types/about'

const useAboutStore = defineStore('aboutStore', {
  state: () => ({
    aboutData: {} as CompanyInfo
  }),
  actions: {
    updateAboutData(about:CompanyInfo) {
      this.aboutData = about
    }
  }
})

export default useAboutStore
