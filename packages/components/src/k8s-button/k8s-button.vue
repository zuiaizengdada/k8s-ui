<script setup lang="ts">
import { useNamespace } from '@k8s-ui/hooks'

defineProps<{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
  loading?: boolean
}>()

const ns = useNamespace('k8s-button')

defineOptions({
  name: 'K8sButton',
})
</script>

<template>
  <el-button :type="type" :size="size" :disabled="disabled" :loading="loading" :class="ns.b()">
    <slot />
  </el-button>
</template>
