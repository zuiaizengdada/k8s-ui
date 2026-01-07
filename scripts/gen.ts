import prompts from 'prompts'
import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'

import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packagesDir = path.resolve(__dirname, '../packages')

async function run() {
  const result = await prompts([
    {
      type: 'select',
      name: 'type',
      message: 'Select resource type:',
      choices: [
        { title: 'Component', value: 'component' },
        { title: 'Hook', value: 'hook' },
        { title: 'Util', value: 'util' },
      ],
    },
    {
      type: 'text',
      name: 'name',
      message: 'Resource name (kebab-case, e.g. my-button):',
      validate: (value: string) => (!value ? 'Name is required' : true),
    },
  ])

  if (!result.type || !result.name) {
    console.log(chalk.red('Operation cancelled'))
    return
  }

  const { type, name } = result
  let kebabName = name
  if (type === 'component' && !kebabName.startsWith('k8s-')) {
    kebabName = `k8s-${kebabName}`
  }
  const pascalName = kebabName
    .split('-')
    .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1)
  const componentName = pascalName.startsWith('K8s') ? pascalName : `K8s${pascalName}`

  if (type === 'component') {
    await createComponent(kebabName, pascalName, componentName)
  } else if (type === 'hook') {
    await createHook(kebabName, camelName)
  } else if (type === 'util') {
    await createUtil(kebabName, camelName)
  }
}

async function createComponent(kebabName: string, pascalName: string, componentName: string) {
  const dir = path.join(packagesDir, 'components/src', kebabName)
  const indexFile = path.join(dir, 'index.ts')
  const vueFile = path.join(dir, `${kebabName}.vue`)
  const testFile = path.join(dir, `${kebabName}.spec.ts`)

  if (fs.existsSync(dir)) {
    console.log(chalk.red(`Component directory ${dir} already exists!`))
    return
  }

  await fs.ensureDir(dir)

  // Vue File
  await fs.writeFile(
    vueFile,
    `<script setup lang="ts">
import { useNamespace } from '@k8s-ui/hooks'

const ns = useNamespace('${kebabName}')

defineOptions({
  name: '${componentName}',
})

defineProps<{
  // props definition
}>()
</script>

<template>
  <div :class="ns.b()">
    <!-- content -->
  </div>
</template>
`,
  )

  // Index File
  await fs.writeFile(
    indexFile,
    `import { withInstall } from '@k8s-ui/utils'
import ${pascalName} from './${kebabName}.vue'

export const ${componentName} = withInstall(${pascalName})
export default ${componentName}
`,
  )

  // Test File
  await fs.writeFile(
    testFile,
    `import { mount } from '@vue/test-utils'
import ${pascalName} from './${kebabName}.vue'

describe('${pascalName}', () => {
  it('renders correctly', () => {
    const wrapper = mount(${pascalName})
    expect(wrapper.exists()).toBe(true)
  })
})
`,
  )

  // Append export to global components index
  const componentsIndex = path.join(packagesDir, 'components/index.ts')
  if (fs.existsSync(componentsIndex)) {
    const exportStatement = `export * from './src/${kebabName}'\n`
    await fs.appendFile(componentsIndex, exportStatement)
  }

  console.log(chalk.green(`Component ${kebabName} created successfully!`))
}

async function createHook(kebabName: string, camelName: string) {
  const fileName = kebabName.startsWith('use-') ? kebabName : `use-${kebabName}`
  const fileCamelName = camelName.startsWith('use')
    ? camelName
    : `use${camelName.charAt(0).toUpperCase() + camelName.slice(1)}`

  const file = path.join(packagesDir, 'hooks/src', `${fileName}.ts`)
  const testDir = path.join(packagesDir, 'hooks/src/__tests__')
  const testFile = path.join(testDir, `${fileName}.spec.ts`)

  if (fs.existsSync(file)) {
    console.log(chalk.red(`Hook file ${file} already exists!`))
    return
  }

  await fs.ensureDir(testDir)

  // Hook File
  await fs.writeFile(
    file,
    `export const ${fileCamelName} = () => {
  // your implementation
  return {}
}
`,
  )

  // Test File
  await fs.writeFile(
    testFile,
    `import { ${fileCamelName} } from '../${fileName}'

describe('${fileCamelName}', () => {
  it('should work', () => {
    const result = ${fileCamelName}()
    expect(result).toBeDefined()
  })
})
`,
  )

  console.log(chalk.green(`Hook ${fileName} created successfully!`))
}

async function createUtil(kebabName: string, camelName: string) {
  const file = path.join(packagesDir, 'utils/src', `${kebabName}.ts`)
  const testDir = path.join(packagesDir, 'utils/src/__tests__')
  const testFile = path.join(testDir, `${kebabName}.spec.ts`)

  if (fs.existsSync(file)) {
    console.log(chalk.red(`Util file ${file} already exists!`))
    return
  }

  await fs.ensureDir(testDir)

  // Util File
  await fs.writeFile(
    file,
    `export const ${camelName} = () => {
  // your implementation
}
`,
  )

  // Test File
  await fs.writeFile(
    testFile,
    `import { ${camelName} } from '../${kebabName}'

describe('${camelName}', () => {
  it('should work', () => {
    const result = ${camelName}()
    // expect(result).toBe(...)
  })
})
`,
  )

  console.log(chalk.green(`Util ${kebabName} created successfully!`))
}

run()
