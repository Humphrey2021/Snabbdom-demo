# 虚拟DOM库(Snabbdom)
- Vue.js2.x内部使用的虚拟DOM就是改造的 Snabbdom
- 大约 200 SLOC(single line of code)
- 通过模块可扩展
- 源码使用 TypeScript 开发
- 最快的 Virtual DOM 之一


## Snabbdom 文档
### 看文档的意义
    - 学习任何一个库都要先看文档
    - 通过文档了解库的作用
    - 看文档中提供的示例，自己快速实现一个demo
    - 通过文档查看API的使用
- Snabbdom 文档
    - [https://github.com/snabbdom/snabbdom](https://github.com/snabbdom/snabbdom)

## Snabbdom基本使用

- [案例demo](https://github.com/Humphrey2021/Snabbdom-demo/tree/main/src)

## Snabbdom 模块
- Snabbdom的核心库并不能处理DOM元素的属性/样式/事件等，可以通过注册Snabbdom默认提供的模块来实现
- Snabbdom中的模块可以用来拓展Snabbdom的功能
- Snabbdom中的模块的实现是通过注册全局的钩子函数来实现的

官方提供的模块
attributes/props/dataset/class/style/eventlisteners

模块的使用步骤
- 导入需要的模块
- init() 中注册模块
- h() 函数的第二个参数处使用模块
