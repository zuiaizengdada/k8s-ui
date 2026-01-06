# Label 标签

键值对标签组件，常用于展示 Kubernetes 资源的 Labels。

## 基础用法

<script setup>
import Basic from '../demos/label/Basic.vue'
import BasicSource from '../demos/label/Basic.vue?raw'
</script>

<vp-demo :source="BasicSource">
  <Basic />
</vp-demo>

## API

### 属性 (Attributes)

| 属性名     | 说明           | 类型     | 默认值 |
| :--------- | :------------- | :------- | :----- |
| labelKey   | 标签的 Key     | `string` | -      |
| labelValue | 标签的 Value值 | `string` | -      |
