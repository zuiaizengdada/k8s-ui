# Status Badge

Display the status of Kubernetes resources.

## Basic Usage

<script setup>
import Basic from '../demos/status-badge/Basic.vue'
import BasicSource from '../demos/status-badge/Basic.vue?raw'
</script>

<vp-demo :source="BasicSource">
  <Basic />
</vp-demo>

## API

### Attributes

| Name   | Description                               | Type     | Default |
| :----- | :---------------------------------------- | :------- | :------ |
| status | The status string (e.g. Running, Pending) | `string` | -       |

### Status Mapping

The component automatically maps standard K8s statuses to colors:

| Status                                  | Color            |
| :-------------------------------------- | :--------------- |
| Running, Completed, Ready               | Green (Success)  |
| Error, Failed, CrashLoopBackOff         | Red (Danger)     |
| Pending, Terminating, ContainerCreating | Orange (Warning) |
| Others                                  | Gray (Info)      |
