<script setup lang="ts">
// 注意：实际使用时，直接使用 <K8sStatusBadge /> 即可
// 本示例展示了不同状态下的样式表现
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
