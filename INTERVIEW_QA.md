# k8s-ui 项目深度面试题库 (Q&A)

本文档旨在为面试准备提供深度的技术细节支持。涵盖了从架构决策到具体 Bug 修复的全链路经验。

## 1. 架构与工程化 (Monorepo & Engineering)

### Q: 请详细描述一下你的 Monorepo 目录结构是如何设计的？

**A:**
采用标准的 `pnpm workspace` 结构：

- **`pnpm-workspace.yaml`**: 定义工作区入口。
  - `packages/*`: 存放核心库，如 `@k8s-ui/components`。
  - `play`: 存放演示应用，用于本地开发和调试。
- **`packages/components`**: 独立的 npm 包结构，包含 `package.json` (定义 `main` 入口), `tsconfig.json` (类型配置), `vite.config.ts` (打包配置)。
- **`play`**: 一个标准的 Vite + Vue 应用，通过 `alias` 指向 components 的**源码目录**而非打包后的 dist，实现了修改组件即自动热更新 (HMR)。

### Q: 在搭建过程中遇到了什么 TypeScript 配置难题？(难点亮点)

**A:**
**问题 (Situation)**: 项目初期，根目录配置了 `tsconfig.json`，子包继承它。但是 IDE 经常报错找不到类型，或者 `vue-tsc` 检查失败。
**原因 (Cause)**: 根目录的 `tsconfig.json` 为了避免扫描过慢，默认排除了 `packages` 目录。子包继承配置后，没有覆盖 `exclude` 规则，导致子包通过 `extends` 继承了"排除自己"的规则。
**解决 (Action)**:

1. 在子包 (`packages/components`) 中建立独立的 `tsconfig.json`。
2. 使用 `extends` 继承根配置。
3. **关键点**：在子包中重写 `include` (包含 `src/**/*`) 和 `exclude` (仅排除 `node_modules` 和 `dist`)，覆盖了父级的排除规则。
4. **进阶修复**：在 `play` 包中，为了解决 `vite.config.ts` 的类型兼容性问题，显式开启了 `esModuleInterop`。

### Q: 为什么项目里会有 `.js` 文件残留？是怎么解决的？

**A:**
**现象**: 开发过程中发现源码目录里出现了很多同名的 `.js` 和 `.js.map` 文件。
**原因**: 这是因为早期的 `tsc` 或 `vue-tsc` 命令没有配置 `--noEmit`。默认情况下 TypeScript 编译器会将 `.ts` 编译为 `.js` 输出到同级目录。
**解决**:

1. 编写清理脚本删除了所有误生成的 `.js` 文件。
2. 在所有 `tsconfig.json` 或构建脚本 (`package.json`) 中强制加上 `--noEmit` 参数(或者在 config 中配置 `noEmit: true`)。这确保了类型检查只做检查，不输出文件，输出文件的工作完全交给 Vite (Rollup) 处理。

---

## 2. 组件设计与 Vue3 (Component Design)

### Q: 你的 `K8sStatusBadge` 组件是如何实现状态映射的？

**A:**
使用了 Vue3 的 `computed` 结合策略模式 (Strategy Pattern) 的思想：

```typescript
const type = computed(() => {
  const s = props.status.toLowerCase()
  // 策略映射
  if (s === 'running' || s === 'ready') return 'success'
  if (s === 'error' || s === 'crashloopbackoff') return 'danger'
  if (s === 'pending') return 'warning'
  return 'info'
})
```

**亮点**: 考虑到 K8s 的状态可能大小写不一致，我先统一转为小写 (`toLowerCase`) 再匹配，增强了组件的健壮性。

### Q: 为什么要把 `element-plus` 放在 `peerDependencies`？

**A:**
为了**依赖单例化**。
如果我把 `element-plus` 放在 `dependencies`，每个安装我组件库的项目都会下载一份 `element-plus`。如果用户项目自己也安装了不同版本的 `element-plus`，就会导致打包体积变大，甚至因为样式冲突/Context上下文不一致导致 Bug。
放到 `peerDependencies` 是声明："我的组件库需要宿主环境提供 Element Plus，版本需兼容 x.x.x"。

---

## 3. 测试驱动开发 (TDD & Vitest)

### Q: 你是如何搭建测试环境的？为什么选 Vitest？

**A:**

- **选型**: 选择 Vitest 因为它与 Vite **同源**。它直接复用 `vite.config.ts` 的配置（插件、别名等），不需要像 Jest 还需要额外配置 babel/jest-transform，开箱即用，速度极快。
- **环境**: 使用 `happy-dom` 模拟浏览器 DOM 环境，比 `jsdom` 更轻量更快。
- **配置**: 在根目录 `vitest.config.ts` 中配置 `environment: 'happy-dom'`，并在 `tsconfig` 中添加 `vitest/globals` 类型支持。

### Q: TDD 的具体流程是怎样的？

**A:**
以 `K8sStatusBadge` 为例：

1. **测试先行 (Red)**: 我先写测试 `k8s-status-badge.test.ts`，断言 `<K8sStatusBadge status="Running" />` 应该渲染出 `success` 样式的 Tag。此时组件还是空的，测试报错。
2. **实现逻辑 (Green)**: 我去组件里写代码，把 `props.status` 映射给 `el-tag` 的 `type` 属性。
3. **验证**: 再次运行测试，通过。
4. **重构 (Refactor)**: 发现状态多了 `if-else` 很乱，重构为 Map 或更清晰的结构（如果需要）。
   **价值**: 这保证了我的组件在面对 `Unknown` 或 `CrashLoopBackOff` 等长字符串状态时，行为永远符合预期，不会出现 UI 崩溃。
