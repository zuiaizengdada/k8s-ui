<template>
  <div class="demo-button-container">
    <K8sButton>Default Button</K8sButton>
    <K8sButton type="primary">Primary</K8sButton>
    <K8sButton type="success">Success</K8sButton>
    <K8sButton type="warning">Warning</K8sButton>
    <K8sButton type="danger">Danger</K8sButton>
  </div>
</template>

<style scoped>
.demo-button-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
