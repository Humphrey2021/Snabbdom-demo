import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

// h 函数
// 第一个参数：标签+选择器
// 第二个参数：如果是字符串，就是标签中的文本内容
let vnode = h('div#container.cls', 'Hello World')

let app = document.querySelector('#app')

// patch 函数
// 第一个参数：旧的 vnode，也可以是 DOM 元素
// 第二个参数：新的 vnode
// 返回新的 vnode
let oldVNode = patch(app, vnode)

vnode = h('div#container.xxx', 'hello Snabbdom')

patch(oldVNode, vnode)

