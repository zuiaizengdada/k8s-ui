# k8s-ui 业务组件库

## 项目简介

为解决 Kubernetes 后台管理系统业务逻辑重复、UI 风格不统一的问题，本项目基于 **Vue3 + TypeScript + Element Plus** 搭建了企业级业务组件库。采用 **Monorepo** 架构管理，通过 **Vite** 构建高效开发环境，并引入 **TDD (测试驱动开发)** 模式，确保组件的高可用性与稳定性。

## 技术栈

- **核心框架**: Vue3 + TypeScript
- **UI 基础**: Element Plus (二次封装)
- **构建工具**: Vite
- **测试框架**: Vitest (TDD 实践)
- **包管理**: pnpm (Monorepo Workspace)

## 项目结构

```
├── packages
│   └── components   # 业务组件库源码 (@k8s-ui/components)
├── play             # 组件调试演示环境 (@k8s-ui/play)
├── pnpm-workspace.yaml
└── package.json
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动演示环境 (Playground)

```bash
pnpm run dev
```

### 3. 运行测试

```bash
pnpm run test
```

## 已实现组件

- **K8sStatusBadge**: Kubernetes 资源状态徽章，自动映射 Running/Error/Pending 等业务状态。
