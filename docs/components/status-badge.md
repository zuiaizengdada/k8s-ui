# Status Badge 状态徽章

用于展示 Kubernetes 资源（如 Pod, Node）的运行状态。

## 基础用法

<script setup>
import Basic from '../demos/status-badge/Basic.vue'
import BasicSource from '../demos/status-badge/Basic.vue?raw'
</script>

<vp-demo :source="BasicSource">
  <Basic />
</vp-demo>

## API

### 属性 (Attributes)

| 属性名 | 说明                                    | 类型     | 默认值 |
| :----- | :-------------------------------------- | :------- | :----- |
| status | 状态字符串 (例如 Running, Pending, ...) | `string` | -      |

### 状态映射

组件内置了 K8s 常见状态到颜色的映射规则：

| 状态关键词                              | 颜色           |
| :-------------------------------------- | :------------- |
| Running, Completed, Ready               | 绿色 (Success) |
| Error, Failed, CrashLoopBackOff         | 红色 (Danger)  |
| Pending, Terminating, ContainerCreating | 橙色 (Warning) |
| 其他 (Others)                           | 灰色 (Info)    |
