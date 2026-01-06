import { useNamespace } from '../use-namespace'

describe('use-namespace', () => {
  const ns = useNamespace('button')

  it('should return default namespace', () => {
    expect(ns.namespace.value).toBe('k8s')
  })

  it('should generate block class', () => {
    expect(ns.b()).toBe('k8s-button')
  })

  it('should generate block with suffix', () => {
    expect(ns.b('group')).toBe('k8s-button-group')
  })

  it('should generate element class', () => {
    expect(ns.e('text')).toBe('k8s-button__text')
  })

  it('should generate modifier class', () => {
    expect(ns.m('primary')).toBe('k8s-button--primary')
  })

  it('should generate block suffix with element', () => {
    expect(ns.be('group', 'item')).toBe('k8s-button-group__item')
  })

  it('should generate element with modifier', () => {
    expect(ns.em('text', 'active')).toBe('k8s-button__text--active')
  })

  it('should generate block suffix with modifier', () => {
    expect(ns.bm('group', 'hover')).toBe('k8s-button-group--hover')
  })

  it('should generate block suffix, element and modifier', () => {
    expect(ns.bem('group', 'item', 'active')).toBe('k8s-button-group__item--active')
  })

  it('should generate is-state class', () => {
    expect(ns.is('active')).toBe('is-active')
    expect(ns.is('disabled', true)).toBe('is-disabled')
    expect(ns.is('disabled', false)).toBe('')
  })

  it('should generate css vars', () => {
    const vars = ns.cssVar({
      color: 'red',
      fontSize: '14px',
    })
    expect(vars).toEqual({
      '--k8s-color': 'red',
      '--k8s-fontSize': '14px',
    })
  })

  it('should generate css block vars', () => {
    const vars = ns.cssVarBlock({
      color: 'blue',
    })
    expect(vars).toEqual({
      '--k8s-button-color': 'blue',
    })
  })

  it('should generate css var name', () => {
    expect(ns.cssVarName('color')).toBe('--k8s-color')
  })

  it('should generate css block var name', () => {
    expect(ns.cssVarBlockName('color')).toBe('--k8s-button-color')
  })
})
