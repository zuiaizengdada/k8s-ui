import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'K8s UI',
  description: '基于 Vue 3 的 Kubernetes 常用业务组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [{ text: '快速上手', link: '/guide/getting-started' }],
      },
      {
        text: '组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Label 标签', link: '/components/label' },
          { text: 'Status Badge 状态徽章', link: '/components/status-badge' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zuiaizengdada/k8s-ui' }],
  },
})
