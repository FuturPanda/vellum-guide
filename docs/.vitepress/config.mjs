import { defineConfig } from 'vitepress'
import { en } from './locales/en.mjs'

export default defineConfig({
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: en
  },
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gacharles23/vellum-guide' }
    ]
  }
})
