<template>
  <div class="demo-label-container">
    <K8sLabel labelKey="app" labelValue="nginx" />
    <K8sLabel labelKey="env" labelValue="production" />
    <K8sLabel labelKey="tier" labelValue="frontend" />
  </div>
</template>

<style scoped>
.demo-label-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
