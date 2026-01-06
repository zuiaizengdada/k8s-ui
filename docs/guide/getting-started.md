# 快速上手

欢迎使用 **K8s UI**，这是一个专为构建 Kubernetes 风格管理后台而设计的 Vue 3 组件库。

## 安装

```bash
# 使用 pnpm
pnpm add @k8s-ui/components @k8s-ui/hooks @k8s-ui/utils

# 使用 npm
npm install @k8s-ui/components @k8s-ui/hooks @k8s-ui/utils
```

## 配置

在你的 `main.ts` 文件中引入所需的组件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import '@k8s-ui/components/style.css' // 引入样式 (如果已构建)

// 引入特定组件
import { K8sButton } from '@k8s-ui/components'

const app = createApp(App)
app.use(K8sButton)
app.mount('#app')
```

## 组件使用

为了避免命名冲突，所有组件均以 `K8s` 作为前缀。

```vue
<template>
  <K8sButton type="primary">点击我</K8sButton>
</template>
```
