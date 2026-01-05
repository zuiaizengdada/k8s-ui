<template>
  <div style="padding: 20px">
    <h1>K8s UI Playground</h1>
    <el-divider />
    <h2>K8sStatusBadge Demo</h2>
    
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <K8sStatusBadge status="Running" />
      <K8sStatusBadge status="Pending" />
      <K8sStatusBadge status="Error" />
      <K8sStatusBadge status="CrashLoopBackOff" />
      <K8sStatusBadge status="Unknown" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { K8sStatusBadge } from '@k8s-ui/components'
</script>
