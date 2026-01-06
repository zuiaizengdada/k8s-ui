<script setup lang="ts">
// Note: In real usage, you simply use <K8sStatusBadge />
// This demo shows various statuses.
</script>

<template>
  <div class="demo-badge-container">
    <K8sStatusBadge status="Running" />
    <K8sStatusBadge status="Pending" />
    <K8sStatusBadge status="Error" />
    <K8sStatusBadge status="CrashLoopBackOff" />
    <K8sStatusBadge status="Unknown" />
  </div>
</template>

<style scoped>
.demo-badge-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
