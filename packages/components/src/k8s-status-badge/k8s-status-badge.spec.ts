import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import K8sStatusBadge from './k8s-status-badge.vue'

describe('K8sStatusBadge', () => {
  it('renders running status correctly', () => {
    const wrapper = mount(K8sStatusBadge, {
      props: {
        status: 'Running',
      },
    })
    expect(wrapper.text()).toContain('Running')
    expect(wrapper.classes()).toContain('k8s-status-badge--running')
  })

  it('renders error status correctly', () => {
    const wrapper = mount(K8sStatusBadge, {
      props: {
        status: 'Error',
      },
    })
    expect(wrapper.text()).toContain('Error')
    expect(wrapper.classes()).toContain('k8s-status-badge--error')
  })
})
