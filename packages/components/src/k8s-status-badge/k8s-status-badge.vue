<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@k8s-ui/hooks'

const { status } = defineProps<{
  status: string
}>()

const ns = useNamespace('status-badge')

defineOptions({
  name: 'K8sStatusBadge',
})

// Map K8s status to Element Plus tag types
const type = computed(() => {
  const s = status.toLowerCase()
  if (s === 'running' || s === 'completed' || s === 'ready') return 'success'
  if (s === 'error' || s === 'failed' || s === 'crashloopbackoff') return 'danger'
  if (s === 'pending' || s === 'terminating' || s === 'containercreating') return 'warning'
  return 'info'
})

const badgeClass = computed(() => {
  return ns.m(status.toLowerCase())
})

console.log(badgeClass.value)
</script>

<template>
  <el-tag :type="type" :class="badgeClass">
    {{ status }}
  </el-tag>
</template>
