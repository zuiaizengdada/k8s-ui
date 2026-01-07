import { mount } from '@vue/test-utils'
import K8sTable from './k8s-table.vue'
import K8sStatusBadge from '../k8s-status-badge'

describe('K8sTable', () => {
  it('renders table data correctly', async () => {
    const data = [
      {
        name: 'nginx-pod',
        status: 'Running',
      },
    ]

    const columns = [
      {
        label: 'Name',
        prop: 'name',
      },
      {
        label: 'Status',
        prop: 'status',
      },
    ]

    const wrapper = mount(K8sTable, {
      props: {
        data,
        columns,
      },
    })

    // Wait for table to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // table header should contain "Name" and "Status"
    expect(wrapper.text()).toContain('Name')
    expect(wrapper.text()).toContain('Status')

    // table body should contain "nginx-pod" and "Running"
    expect(wrapper.text()).toContain('nginx-pod')
    expect(wrapper.text()).toContain('Running')
  })

  it('should render k8s-status-badge in table column', async () => {
    const data = [
      {
        name: 'nginx-pod',
        status: 'Running',
      },
    ]

    const columns = [
      {
        label: 'Name',
        prop: 'name',
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

    const wrapper = mount(K8sTable, {
      props: {
        data,
        columns,
      },
    })

    // Wait for table to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // table body should contain "k8s-status-badge"
    expect(wrapper.html()).toContain('k8s-status-badge')
  })

  it('should render k8s-label for column type "labels"', async () => {
    const data = [
      {
        name: 'nginx-pod',
        labels: {
          app: 'nginx',
          tier: 'frontend',
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
    ]

    const wrapper = mount(K8sTable, {
      props: {
        data,
        columns,
      },
    })

    // Wait for table to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // table body should contain labels
    const html = wrapper.html()
    expect(html).toContain('app')
    expect(html).toContain('nginx')
    expect(html).toContain('tier')
    expect(html).toContain('frontend')
    expect(html).toContain('k8s-label')
  })

  it('should render formatted time for column type "time"', async () => {
    // 65 seconds ago
    const pastTime = new Date(Date.now() - 65 * 1000).toISOString()

    const data = [
      {
        name: 'nginx-pod',
        creationTimestamp: pastTime,
      },
    ]

    const columns = [
      {
        label: 'Age',
        prop: 'creationTimestamp',
        type: 'time' as const,
      },
    ]

    const wrapper = mount(K8sTable, {
      props: {
        data,
        columns,
      },
    })

    // Wait for table to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Should display roughly "1m"
    expect(wrapper.text()).toContain('1m')
  })
})
