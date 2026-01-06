# Button

Basic button component for K8s UI.

## Basic Usage

<script setup>
import Basic from '../demos/button/Basic.vue'
import BasicSource from '../demos/button/Basic.vue?raw'
</script>

<vp-demo :source="BasicSource">
  <Basic />
</vp-demo>

## API

### Attributes

| Name     | Description                   | Type                                                                   | Default   |
| :------- | :---------------------------- | :--------------------------------------------------------------------- | :-------- |
| type     | Button type                   | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `default` | `default` |
| size     | Button size                   | `large` \| `default` \| `small`                                        | `default` |
| disabled | Whether to disable the button | `boolean`                                                              | `false`   |
| loading  | Whether it's loading          | `boolean`                                                              | `false`   |

### Slots

| Name    | Description    |
| :------ | :------------- |
| default | Custom content |
