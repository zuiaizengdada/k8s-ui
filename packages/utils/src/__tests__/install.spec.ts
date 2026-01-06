import { withInstall } from '../install'
import type { App } from 'vue'

describe('install', () => {
  it('should add install method to component', () => {
    const component = {
      name: 'TestComponent',
    }
    const componentWithInstall = withInstall(component)

    expect(componentWithInstall.install).toBeDefined()
    expect(typeof componentWithInstall.install).toBe('function')
  })

  it('should register component when install is called', () => {
    const component = {
      name: 'TestComponent',
    }
    const componentWithInstall = withInstall(component)

    const app = {
      component: vi.fn(),
    } as unknown as App

    componentWithInstall.install!(app)

    expect(app.component).toHaveBeenCalledWith('TestComponent', componentWithInstall)
  })
})
