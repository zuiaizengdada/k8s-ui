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
      message: 'Select resource type to delete:',
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
      validate: (value: string) =>
        !value ? 'Name is required' : true,
    },
  ])

  if (!result.type || !result.name) {
    console.log(chalk.red('Operation cancelled'))
    return
  }

  const { type, name } = result

  if (type === 'component') {
    await deleteComponent(name)
  } else if (type === 'hook') {
    await deleteHook(name)
  } else if (type === 'util') {
    await deleteUtil(name)
  }
}

async function removeExport(filePath: string, matchString: string) {
    if (fs.existsSync(filePath)) {
        let content = await fs.readFile(filePath, 'utf-8')
        const lines = content.split('\n')
        const newLines = lines.filter(line => !line.includes(matchString))
        
        if (lines.length !== newLines.length) {
            await fs.writeFile(filePath, newLines.join('\n'))
            console.log(chalk.green(`Removed export from ${filePath}`))
        }
    }
}

async function deleteComponent(name: string) {
  const dir = path.join(packagesDir, 'components/src', name)
  
  if (!fs.existsSync(dir)) {
    console.log(chalk.red(`Component directory ${dir} does not exist!`))
    return
  }

  await fs.remove(dir)
  console.log(chalk.green(`Component directory ${dir} deleted.`))

  // Remove export from global components index
  const componentsIndex = path.join(packagesDir, 'components/index.ts')
  await removeExport(componentsIndex, `export * from './src/${name}'`)
  
  console.log(chalk.green(`Component ${name} deleted successfully!`))
}

async function deleteHook(name: string) {
    // Standardize hook name to ensure it starts with 'use-' for file paths if that's the convention, 
    // but based on gen.ts, it seems the user might input 'my-hook' and it gets converted.
    // However, for delete, we usually expect the user to provide the exact name or common variations.
    // Let's assume the user provides the kebab-case name used in the file system.
    // gen.ts logic: const fileName = kebabName.startsWith('use-') ? kebabName : `use-${kebabName}`
    
    const fileName = name.startsWith('use-') ? name : `use-${name}`
    
    // Check if files exist with this logical derivation
    const srcFile = path.join(packagesDir, 'hooks/src', `${fileName}.ts`)
    const testFile = path.join(packagesDir, 'hooks/src/__tests__', `${fileName}.spec.ts`)

    if (fs.existsSync(srcFile)) {
        await fs.remove(srcFile)
        console.log(chalk.green(`Hook file ${srcFile} deleted.`))
    } else {
        console.log(chalk.yellow(`Hook file ${srcFile} not found.`))
    }

    if (fs.existsSync(testFile)) {
        await fs.remove(testFile)
        console.log(chalk.green(`Hook test file ${testFile} deleted.`))
    }

    // Remove export from hooks index
    // gen.ts doesn't seem to add to index.ts for hooks? 
    // Wait, let me check the previous `check` step.
    // Step 26: packages/hooks/src/index.ts -> export * from './use-namespace'
    // So yes, it should be in packages/hooks/src/index.ts
    // The previous gen.ts verification didn't explicitly show appending to index.ts for hooks...
    // Let me re-read gen.ts carefully.
    // Step 13 does NOT show appending to packages/hooks/src/index.ts. 
    // This implies the user has to add it manually or I missed it.
    // Wait, if gen.ts doesn't add it, how is it there? 
    // Maybe the user added it manually? Or I missed a part of gen.ts?
    // Let's quickly re-check gen.ts content in Step 13.
    // Lines 130-170 createHook. It writes file and testFile. It logs success. NO index update.
    // So `gen` doesn't auto-export hooks. 
    // BUT, if the user manually added it, `del` should probably try to remove it if it exists.
    // The pattern in `packages/hooks/src/index.ts` is `export * from './use-namespace'`.
    
    const indexFile = path.join(packagesDir, 'hooks/src/index.ts')
    await removeExport(indexFile, `export * from './${fileName}'`)
    
    console.log(chalk.green(`Hook ${name} deleted successfully! (Note: Manual cleanup of index.ts might be needed if export format differs)`))
}

async function deleteUtil(name: string) {
    // gen.ts logic: const file = path.join(packagesDir, 'utils/src', `${kebabName}.ts`)
    
    const srcFile = path.join(packagesDir, 'utils/src', `${name}.ts`)
    const testFile = path.join(packagesDir, 'utils/src/__tests__', `${name}.spec.ts`)

    if (fs.existsSync(srcFile)) {
        await fs.remove(srcFile)
        console.log(chalk.green(`Util file ${srcFile} deleted.`))
    } else {
        console.log(chalk.yellow(`Util file ${srcFile} not found.`))
    }

    if (fs.existsSync(testFile)) {
        await fs.remove(testFile)
        console.log(chalk.green(`Util test file ${testFile} deleted.`))
    }

    // Remove export from utils index
    // Similar to hooks, gen.ts doesn't seem to auto-export.
    // Pattern in `packages/utils/src/index.ts` is `export * from './install'`.
    
    const indexFile = path.join(packagesDir, 'utils/src/index.ts')
    await removeExport(indexFile, `export * from './${name}'`)
    
    console.log(chalk.green(`Util ${name} deleted successfully!`))
}

run()
