import { ISSUES, KFN } from 'assets/constants'

export const state = () => ({
  layout: {
    clipped: true,
    drawer: true,
    fixed: true,
    items: [
      {
        icon: 'mdi-home',
        title: 'Welcome',
        to: '/'
      }
    ],
    title: KFN
  },
  issues: ISSUES
})

export const mutations = {
}
