import { mount } from '@vue/test-utils'
import K8sButton from './k8s-button.vue'

describe('K8sButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(K8sButton)
    expect(wrapper.exists()).toBe(true)
  })
})
