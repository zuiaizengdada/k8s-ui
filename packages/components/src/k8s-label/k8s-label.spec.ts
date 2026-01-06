import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import K8sLabel from './k8s-label.vue'

describe('K8sLabel', () => {
  it('renders label key and value correctly', () => {
    const wrapper = mount(K8sLabel, {
      props: {
        labelKey: 'app',
        labelValue: 'nginx',
      },
    })

    // Assert Key and Value are rendered separately
    const keyEl = wrapper.find('.k8s-label-key')
    const valueEl = wrapper.find('.k8s-label-value')

    expect(keyEl.exists()).toBe(true)
    expect(keyEl.text()).toBe('app')

    expect(valueEl.exists()).toBe(true)
    expect(valueEl.text()).toBe('nginx')
  })
})
