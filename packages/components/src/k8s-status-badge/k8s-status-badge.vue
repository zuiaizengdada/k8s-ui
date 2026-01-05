<template>
  <el-tag :type="type" :class="badgeClass">
    {{ status }}
  </el-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElTag } from 'element-plus'

const props = defineProps<{
  status: string
}>()

// Map K8s status to Element Plus tag types
const type = computed(() => {
  const s = props.status.toLowerCase()
  if (s === 'running' || s === 'completed' || s === 'ready') return 'success'
  if (s === 'error' || s === 'failed' || s === 'crashloopbackoff') return 'danger'
  if (s === 'pending' || s === 'terminating' || s === 'containercreating') return 'warning'
  return 'info'
})

const badgeClass = computed(() => {
  // Map internal type back to status for the test requirement specific class
  // The test expects 'k8s-status-badge--running' for 'Running' status.
  // My logic above maps Running -> success.
  // So I should probably append the refined status or the type.
  // Test expectation: `k8s-status-badge--running`
  // So I should use the lowercased status directly so it matches the test ?
  // Or better, mapping the computed type is safer but the test explicitly checked for status name.
  // Let's use the status prop to satisfy the test requirement accurately.
  return `k8s-status-badge--${props.status.toLowerCase()}`
})
</script>
