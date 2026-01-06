# Button 按钮

基础按钮组件。

## 基础用法

<script setup>
import Basic from '../demos/button/Basic.vue'
import BasicSource from '../demos/button/Basic.vue?raw'
</script>

<vp-demo :source="BasicSource">
  <Basic />
</vp-demo>

## API

### 属性 (Attributes)

| 属性名   | 说明       | 类型                                                                   | 默认值    |
| :------- | :--------- | :--------------------------------------------------------------------- | :-------- |
| type     | 按钮类型   | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `default` | `default` |
| size     | 按钮尺寸   | `large` \| `default` \| `small`                                        | `default` |
| disabled | 是否禁用   | `boolean`                                                              | `false`   |
| loading  | 是否加载中 | `boolean`                                                              | `false`   |

### 插槽 (Slots)

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 按钮自定义内容 |
