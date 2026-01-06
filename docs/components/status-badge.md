# Status Badge

Display the status of Kubernetes resources.

## Basic Usage

<div class="demo-block">
  <K8sStatusBadge status="Running" />
  <K8sStatusBadge status="Pending" />
  <K8sStatusBadge status="Error" />
  <K8sStatusBadge status="CrashLoopBackOff" />
  <K8sStatusBadge status="Unknown" />
</div>

```vue
<template>
  <K8sStatusBadge status="Running" />
  <K8sStatusBadge status="Pending" />
  <K8sStatusBadge status="Error" />
  <K8sStatusBadge status="CrashLoopBackOff" />
  <K8sStatusBadge status="Unknown" />
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
| status | The status string (e.g. Running, Pending) | `string` | - |

### Status Mapping

The component automatically maps standard K8s statuses to colors:

| Status | Color |
| :--- | :--- |
| Running, Completed, Ready | Green (Success) |
| Error, Failed, CrashLoopBackOff | Red (Danger) |
| Pending, Terminating, ContainerCreating | Orange (Warning) |
| Others | Gray (Info) |
