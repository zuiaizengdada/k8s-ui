<script setup lang="ts">
import { K8sStatusBadge, K8sLabel, K8sButton, K8sTable } from '@k8s-ui/components'

const data = [
  {
    name: 'nginx-pod',
    status: 'Running',
    creationTimestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    labels: {
      app: 'nginx',
      tier: 'frontend',
      env: 'prod',
    },
  },
]

const columns = [
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Labels',
    prop: 'labels',
    type: 'labels' as const,
  },
  {
    label: 'Age',
    prop: 'creationTimestamp',
    type: 'time' as const,
  },
  {
    label: 'Status',
    prop: 'status',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (row: any) => {
      return h(K8sStatusBadge, {
        status: row.status,
      })
    },
  },
]
</script>

<template>
  <div style="padding: 20px">
    <h1>K8s UI Playground</h1>
    <el-divider />
    <h2>K8sStatusBadge Demo</h2>

    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <K8sStatusBadge status="Running" />
      <K8sStatusBadge status="Pending" />
      <K8sStatusBadge status="Error" />
      <K8sStatusBadge status="CrashLoopBackOff" />
      <K8sStatusBadge status="Unknown" />
    </div>

    <el-divider />
    <h2>K8sLabel Demo</h2>
    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <K8sLabel labelKey="app" labelValue="nginx" />
      <K8sLabel labelKey="env" labelValue="production" />
      <K8sLabel labelKey="tier" labelValue="frontend" />
    </div>
    <el-divider />
    <h2>K8sButton Demo</h2>
    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <K8sButton type="primary" size="small">111</K8sButton>
      <K8sButton type="success" size="default">222</K8sButton>
      <K8sButton type="warning" size="large">333</K8sButton>
    </div>
    <el-divider />
    <h2>K8sTable Demo</h2>
    <div style="width: 100%">
      <K8sTable :data="data" :columns="columns" />
    </div>
  </div>
</template>
