# Label

key-value pair label component.

## Basic Usage

<div class="demo-block">
  <K8sLabel labelKey="app" labelValue="nginx" />
  <K8sLabel labelKey="env" labelValue="production" />
  <K8sLabel labelKey="tier" labelValue="frontend" />
</div>

```vue
<template>
  <K8sLabel labelKey="app" labelValue="nginx" />
  <K8sLabel labelKey="env" labelValue="production" />
  <K8sLabel labelKey="tier" labelValue="frontend" />
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
| labelKey | The key part of the label | `string` | - |
| labelValue | The value part of the label | `string` | - |
