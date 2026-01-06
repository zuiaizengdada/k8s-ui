import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import { K8sButton, K8sLabel, K8sStatusBadge } from '@k8s-ui/components'
import VpDemo from '../components/vp-demo.vue'
import { type App } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
    app.use(K8sButton)
    app.use(K8sLabel)
    app.use(K8sStatusBadge)
    app.component('VpDemo', VpDemo)
  },
}
