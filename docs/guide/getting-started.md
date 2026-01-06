# Getting Started

Welcome to **K8s UI**, a Vue 3 component library designed for building Kubernetes-themed dashboards.

## Installation

```bash
# using pnpm
pnpm add @k8s-ui/components @k8s-ui/hooks @k8s-ui/utils

# using npm
npm install @k8s-ui/components @k8s-ui/hooks @k8s-ui/utils
```

## Setup

Import the components you need in your `main.ts`:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import '@k8s-ui/components/style.css' // Import styles (if available)

// Import specific components
import { K8sButton } from '@k8s-ui/components'

const app = createApp(App)
app.use(K8sButton)
app.mount('#app')
```

## Component Usage

All components are prefixed with `K8s` to avoid conflicts.

```vue
<template>
  <K8sButton type="primary">Click Me</K8sButton>
</template>
```
