<script setup lang="ts">
import { useNamespace } from '@k8s-ui/hooks'
import K8sLabel from '../k8s-label'
import type { PropType, VNode } from 'vue'

const ns = useNamespace('table')

defineOptions({
  name: 'K8sTable',
})

export interface Column {
  label: string
  prop: 'labels' | 'status' | 'creationTimestamp' | string
  type?: 'labels' | 'time'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (row: any) => VNode | string | number
}

defineProps({
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<any[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RenderColumn = (props: { row: any; render: (row: any) => any }) => {
  return props.render(props.row)
}

const formatTime = (time: string) => {
  if (!time) return ''
  const date = new Date(time)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  if (diff < 60 * 1000) return Math.floor(diff / 1000) + 's'
  if (diff < 60 * 60 * 1000) return Math.floor(diff / (60 * 1000)) + 'm'
  if (diff < 24 * 60 * 60 * 1000) return Math.floor(diff / (60 * 60 * 1000)) + 'h'
  return Math.floor(diff / (24 * 60 * 60 * 1000)) + 'd'
}
</script>

<template>
  <div :class="ns.b()">
    <el-table :data="data" style="width: 100%">
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      >
        <template #default="{ row }">
          <RenderColumn
            v-if="column.render && row && Object.keys(row).length"
            :row="row"
            :render="column.render"
          />
          <div
            v-else-if="column.type === 'labels' && row?.[column.prop]"
            style="display: flex; gap: 4px; flex-wrap: wrap"
          >
            <K8sLabel
              v-for="(value, key) in row[column.prop]"
              :key="key"
              :label-key="String(key)"
              :label-value="String(value)"
            />
          </div>
          <span v-else-if="column.type === 'time' && row?.[column.prop]">
            {{ formatTime(row[column.prop]) }}
          </span>
          <span v-else>{{ row?.[column.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
