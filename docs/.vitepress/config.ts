import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'K8s UI',
  description: 'A Vue 3 Component Library for Kubernetes',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Label', link: '/components/label' },
          { text: 'Status Badge', link: '/components/status-badge' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zuiaizengdada/k8s-ui' }],
  },
})
