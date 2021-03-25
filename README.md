## 环境依赖
yarn add rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa --ignore-workspace-root-check


vue3与vue2差异
  代码部分
    响应式区别：proxy ---> defineProperty
    模版编译优化：编译时生成 Block tree，对子节点的动态节点进行收集，减少比较，使用patchFlag 标记节点
    使用 compositionApi，解决反复横挑，优化复用逻辑（mixin带来数据来源不清，命名冲突），比optionsApi 类型推断更加方便
    增加Fragment、teleport、suspense 组件
  项目结构
    源码采用 monorepo 方式进行管理，将模块拆分到 package 目录里
    ts 开发，增强类型检测（vue2 采用 flow）
    性能优化，支持 tree-shaking，不使用不打包
    引入 RFC，每个版本改动可控
