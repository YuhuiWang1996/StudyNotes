# 框架中的CSS

- Angular Vue React 三大框架
- Angular Vue 内置样式集成
- React 一些业界实践

## Angular（2+）

- ShadowDOM
  - 逻辑上一个DOM
  - 结构上存在子集结构
- Scoped CSS
  - 限定了范围的CSS
  - 无法影响外部元素
  - 外部样式一般不影响内部
  - 可以通过 /deep/ 或 >>> 穿透
- 模拟Scoped CSS
  - 方案一：随机选择器（不支持）
  - 方案二：随机属性
    - ```<div abcdefg>```
    - ```div[abcdefg]{ }```
