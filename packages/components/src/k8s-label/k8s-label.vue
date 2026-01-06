<script setup lang="ts">
defineOptions({
  name: 'K8sLabel',
})

defineProps<{
  labelKey: string
  labelValue: string
}>()
</script>

<template>
  <div
    class="k8s-label inline-flex items-center border border-gray-300 rounded-xl text-xs leading-5 overflow-hidden max-w-full"
  >
    <span class="k8s-label-key px-2 bg-gray-100 text-gray-600 font-medium border-r border-gray-300">
      {{ labelKey }}
    </span>
    <span class="k8s-label-value px-2 bg-white text-gray-800">
      {{ labelValue }}
    </span>
  </div>
</template>
