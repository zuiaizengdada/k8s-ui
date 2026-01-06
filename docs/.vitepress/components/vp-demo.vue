<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  source?: string
}>()

const showSource = ref(false)

const handleToggle = () => {
  showSource.value = !showSource.value
}

const decodedSource = computed(() => {
  return props.source ? decodeURIComponent(props.source) : ''
})

const copyCode = async () => {
  if (props.source) {
    try {
      await navigator.clipboard.writeText(decodedSource.value)
      // Could add toast here
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }
}
</script>

<template>
  <div class="vp-demo">
    <!-- Preview Block -->
    <div class="vp-demo__preview">
      <slot />
    </div>

    <!-- Actions -->
    <div class="vp-demo__actions">
      <button class="action-btn" @click="copyCode" title="Copy Code">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
      <button class="action-btn" @click="handleToggle" title="View Source">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </button>
    </div>

    <!-- Source Code -->
    <div v-show="showSource" class="vp-demo__source">
      <div class="language-vue">
        <pre><code>{{ decodedSource }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  margin-bottom: 20px;
}

.vp-demo__preview {
  padding: 24px;
}

.vp-demo__actions {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 4px;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: var(--vp-c-gray-soft);
  color: var(--vp-c-brand);
}

.vp-demo__source {
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
  padding: 16px;
  overflow-x: auto;
}

.vp-demo__source pre {
  margin: 0;
  padding: 0;
  background: transparent;
}
</style>
