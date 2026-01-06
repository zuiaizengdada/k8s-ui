<script setup lang="ts">
import { K8sStatusBadge, K8sLabel } from '@k8s-ui/components'
</script>

<template>
  <div style="padding: 20px">
    <h1>K8s UI Playground</h1>
    <el-divider />
    <h2>K8sStatusBadge Demo</h2>

    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <K8sStatusBadge status="Running" />
      <K8sStatusBadge status="Pending" />
      <K8sStatusBadge status="Error" />
      <K8sStatusBadge status="CrashLoopBackOff" />
      <K8sStatusBadge status="Unknown" />
    </div>

    <el-divider />
    <h2>K8sLabel Demo</h2>
    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <K8sLabel labelKey="app" labelValue="nginx" />
      <K8sLabel labelKey="env" labelValue="production" />
      <K8sLabel labelKey="tier" labelValue="frontend" />
    </div>
  </div>
</template>
