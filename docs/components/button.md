# Button

Basic button component for K8s UI.

## Basic Usage

<div class="demo-block">
  <K8sButton>Default Button</K8sButton>
  <K8sButton type="primary">Primary</K8sButton>
  <K8sButton type="success">Success</K8sButton>
  <K8sButton type="warning">Warning</K8sButton>
  <K8sButton type="danger">Danger</K8sButton>
</div>

```vue
<template>
  <K8sButton>Default Button</K8sButton>
  <K8sButton type="primary">Primary</K8sButton>
  <K8sButton type="success">Success</K8sButton>
  <K8sButton type="warning">Warning</K8sButton>
  <K8sButton type="danger">Danger</K8sButton>
</template>
```

<style>
.demo-block {
  display: flex;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>

## API

### Attributes

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | Button type | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `default` | `default` |
| size | Button size | `large` \| `default` \| `small` | `default` |
| disabled | Whether to disable the button | `boolean` | `false` |
| loading | Whether it's loading | `boolean` | `false` |

### Slots

| Name | Description |
| :--- | :--- |
| default | Custom content |

